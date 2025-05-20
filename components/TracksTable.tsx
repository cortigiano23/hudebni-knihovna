'use client';

import { useState, useRef, useEffect } from "react";
import { tracks } from "@/data/tracks";

export default function TracksTable() {
  const [search, setSearch] = useState("");
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [bpmRange, setBpmRange] = useState<[number, number]>([0, 250]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const sliderRef = useRef<HTMLDivElement>(null);

  // Get all unique tags and styles
  const allTags = Array.from(new Set(tracks.flatMap((track) => track.tags ?? [])));
  const allStyles = Array.from(
    new Set(
      tracks
        .map((track) => track.style)
        .filter((style): style is string => style !== undefined)
    )
  );

  const handleMouseDown = (e: React.MouseEvent, type: 'min' | 'max') => {
    e.preventDefault();
    setIsDragging(type);
  };

  const handleMouseMove = (e: MouseEvent) => {
    if (!isDragging || !sliderRef.current) return;

    const slider = sliderRef.current;
    const rect = slider.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const percentage = x / rect.width;
    const value = Math.round(percentage * 250);

    if (isDragging === 'min') {
      const newMin = Math.min(value, bpmRange[1] - 1);
      setBpmRange([newMin, bpmRange[1]]);
    } else {
      const newMax = Math.max(value, bpmRange[0] + 1);
      setBpmRange([bpmRange[0], newMax]);
    }
  };

  const handleMouseUp = () => {
    setIsDragging(null);
  };

  useEffect(() => {
    if (isDragging) {
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    }
    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
    };
  }, [isDragging, bpmRange]);

  // Filter tracks based on all criteria
  const filteredTracks = tracks.filter((track) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      track.title.toLowerCase().includes(searchLower) ||
      track.description.toLowerCase().includes(searchLower) ||
      track.style?.toLowerCase().includes(searchLower) ||
      (track.tags?.some((tag) => tag.toLowerCase().includes(searchLower)));

    const matchesBpm =
      !track.bpm || (track.bpm >= bpmRange[0] && track.bpm <= bpmRange[1]);

    const matchesTags =
      selectedTags.length === 0 ||
      track.tags?.some((tag) => selectedTags.includes(tag));

    const matchesStyles =
      selectedStyles.length === 0 ||
      (track.style && selectedStyles.includes(track.style));

    return matchesSearch && matchesBpm && matchesTags && matchesStyles;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  const toggleStyle = (style: string) => {
    setSelectedStyles((prev) =>
      prev.includes(style) ? prev.filter((s) => s !== style) : [...prev, style]
    );
  };

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Filter</h2>

        {/* BPM Range */}
        <div style={{ marginBottom: '3rem' }}>
          <label>bpm</label>
          <div 
            ref={sliderRef}
            className="dual-range-slider"
            style={{ 
              position: 'relative',
              height: '2px',
              background: '#404040',
              marginTop: '1rem',
              marginBottom: '1rem',
              width: '100%',
              maxWidth: '180px',
              cursor: 'pointer'
            }}
          >
            <div
              className="range-track"
              style={{
                position: 'absolute',
                height: '100%',
                background: '#ffffff',
                left: `${(bpmRange[0] / 250) * 100}%`,
                right: `${100 - (bpmRange[1] / 250) * 100}%`
              }}
            />
            <div
              className="range-thumb min"
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                background: '#ffffff',
                borderRadius: '50%',
                left: `${(bpmRange[0] / 250) * 100}%`,
                transform: 'translate(-50%, -50%)',
                top: '50%',
                cursor: 'pointer',
                zIndex: 1,
                touchAction: 'none'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'min')}
            />
            <div
              className="range-thumb max"
              style={{
                position: 'absolute',
                width: '12px',
                height: '12px',
                background: '#ffffff',
                borderRadius: '50%',
                left: `${(bpmRange[1] / 250) * 100}%`,
                transform: 'translate(-50%, -50%)',
                top: '50%',
                cursor: 'pointer',
                zIndex: 1,
                touchAction: 'none'
              }}
              onMouseDown={(e) => handleMouseDown(e, 'max')}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.875rem', maxWidth: '180px' }}>
            <span>{bpmRange[0]}</span>
            <span>{bpmRange[1]}</span>
          </div>
        </div>

        {/* Styles */}
        <div style={{ marginBottom: '3rem' }}>
          <label>Style</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {allStyles
              .slice()
              .sort((a, b) => a.localeCompare(b))
              .map((style) => (
                <label key={style} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    checked={selectedStyles.includes(style)}
                    onChange={() => toggleStyle(style)}
                  />
                  {style}
                </label>
              ))}
          </div>
        </div>

        {/* Tags */}
        <div style={{ marginBottom: '1rem' }}>
          <label>Tags</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {allTags
              .slice()
              .sort((a, b) => a.localeCompare(b))
              .map((tag) => (
                <label key={tag} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    checked={selectedTags.includes(tag)}
                    onChange={() => toggleTag(tag)}
                  />
                  {tag}
                </label>
              ))}
          </div>
        </div>
      </aside>

      {/* Table */}
      <div className="table-container">
        <input
          type="text"
          placeholder="Search tracks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Length</th>
              <th>BPM</th>
              <th>Style</th>
              <th>Tags</th>
              <th>Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map((track) => (
              <tr key={track.id}>
                <td>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    {track.files.mp3 && (
                      <button
                        onClick={() =>
                          setPlayingTrackId(playingTrackId === track.id ? null : track.id)
                        }
                        aria-label={playingTrackId === track.id ? "Stop" : "Play"}
                        style={{ 
                          display: 'inline-flex', 
                          alignItems: 'center', 
                          justifyContent: 'center', 
                          width: '1.5rem', 
                          height: '1.5rem',
                          background: 'none',
                          border: 'none',
                          padding: 0,
                          cursor: 'pointer'
                        }}
                      >
                        {playingTrackId === track.id ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            style={{ display: 'block' }}
                          >
                            <rect x="6" y="6" width="12" height="12" />
                          </svg>
                        ) : (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="white"
                            viewBox="0 0 24 24"
                            width="20"
                            height="20"
                            style={{ display: 'block' }}
                          >
                            <path d="M8 5v14l11-7z" />
                          </svg>
                        )}
                      </button>
                    )}
                    {track.title}
                  </div>
                </td>
                <td>{track.description}</td>
                <td>{track.length ?? "-"}</td>
                <td>{track.bpm ?? "-"}</td>
                <td>{track.style ?? "-"}</td>
                <td>
                  {track.tags?.map((tag) => (
                    <span key={tag} className="tag">
                      {tag}
                    </span>
                  ))}
                </td>
                <td>
                  <div style={{ display: 'inline-flex', gap: '0.5rem', justifyContent: 'flex-end' }}>
                    {Object.entries(track.files).map(([format, filename]) => (
                      <a
                        key={format}
                        href={`/audio/${filename}`}
                        download={filename}
                        title={`Download ${format.toUpperCase()}`}
                        className="download-button"
                      >
                        {format.toUpperCase()}
                      </a>
                    ))}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {playingTrackId && (
          <div style={{ marginTop: '1rem' }}>
            <audio
              controls
              autoPlay
              src={`/audio/${
                tracks.find((t) => t.id === playingTrackId)?.files.mp3
              }`}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}