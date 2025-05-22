'use client';

import { useState, useRef, useEffect } from "react";
import { tracks } from "@/data/tracks";
import { Track } from '../data/tracks';

export default function TracksTable() {
  const [search, setSearch] = useState("");
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [bpmRange, setBpmRange] = useState<[number, number]>([0, 250]);
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedForms, setSelectedForms] = useState<string[]>([]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);
  const [selectedStyles, setSelectedStyles] = useState<string[]>([]);
  const [isDragging, setIsDragging] = useState<'min' | 'max' | null>(null);
  const [isClient, setIsClient] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const tracksPerPage = 50;
  const sliderRef = useRef<HTMLDivElement>(null);

  // Calculate pagination
  const indexOfLastTrack = currentPage * tracksPerPage;
  const indexOfFirstTrack = indexOfLastTrack - tracksPerPage;
  const currentTracks = tracks.filter((track) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      track.title.toLowerCase().includes(searchLower) ||
      track.description.toLowerCase().includes(searchLower) ||
      track.type?.toLowerCase().includes(searchLower) ||
      track.form?.toLowerCase().includes(searchLower) ||
      (track.tags?.some((tag) => tag.toLowerCase().includes(searchLower)));

    const matchesBpm =
      !track.bpm || (track.bpm >= bpmRange[0] && track.bpm <= bpmRange[1]);

    const matchesType =
      selectedTypes.length === 0 ||
      (track.type && selectedTypes.includes(track.type));

    const matchesForm =
      selectedForms.length === 0 ||
      (track.form && selectedForms.includes(track.form));

    const matchesTags =
      selectedTags.length === 0 ||
      track.tags?.some((tag) => selectedTags.includes(tag));

    return matchesSearch && matchesBpm && matchesType && matchesForm && matchesTags;
  }).slice(indexOfFirstTrack, indexOfLastTrack);
  const totalPages = Math.ceil(tracks.filter((track) => {
    const searchLower = search.toLowerCase();
    const matchesSearch =
      track.title.toLowerCase().includes(searchLower) ||
      track.description.toLowerCase().includes(searchLower) ||
      track.type?.toLowerCase().includes(searchLower) ||
      track.form?.toLowerCase().includes(searchLower) ||
      (track.tags?.some((tag) => tag.toLowerCase().includes(searchLower)));

    const matchesBpm =
      !track.bpm || (track.bpm >= bpmRange[0] && track.bpm <= bpmRange[1]);

    const matchesType =
      selectedTypes.length === 0 ||
      (track.type && selectedTypes.includes(track.type));

    const matchesForm =
      selectedForms.length === 0 ||
      (track.form && selectedForms.includes(track.form));

    const matchesTags =
      selectedTags.length === 0 ||
      track.tags?.some((tag) => selectedTags.includes(tag));

    return matchesSearch && matchesBpm && matchesType && matchesForm && matchesTags;
  }).length / tracksPerPage);

  // Reset to first page when filters change
  useEffect(() => {
    setCurrentPage(1);
  }, [search, bpmRange, selectedTypes, selectedForms, selectedTags]);

  const clearAllFilters = () => {
    setSearch("");
    setBpmRange([0, 250]);
    setSelectedTypes([]);
    setSelectedForms([]);
    setSelectedTags([]);
    setCurrentPage(1);
  };

  useEffect(() => {
    setIsClient(true);
  }, []);

  // Get all unique tags and styles
  const allTags = Array.from(new Set(tracks.flatMap((track) => track.tags ?? [])));
  const allStyles = Array.from(
    new Set(
      tracks
        .map((track) => track.type)
        .filter((type): type is string => type !== undefined)
    )
  );

  // Get unique types, forms, and tags
  const uniqueTypes = Array.from(new Set(tracks.map(track => track.type).filter(Boolean) as string[]));
  const uniqueForms = Array.from(new Set(tracks.map(track => track.form).filter(Boolean) as string[]));
  const uniqueTags = Array.from(new Set(tracks.flatMap(track => track.tags || [])));

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

  if (!isClient) {
    return null; // or a loading state
  }

  return (
    <div className="container">
      {/* Sidebar */}
      <aside className="sidebar">
        <div style={{ marginBottom: '2rem' }}>
          <h2 style={{ marginBottom: '0.25rem' }}>Filter ({currentTracks.length}/{tracks.length})</h2>
          <button 
            onClick={clearAllFilters}
            style={{
              fontSize: '0.875rem',
              color: '#999',
              background: 'none',
              border: 'none',
              cursor: 'pointer',
              padding: 0,
              textDecoration: 'underline',
              display: 'block'
            }}
          >
            Clear all
          </button>
        </div>

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
          <label>Type</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {uniqueTypes
              .slice()
              .sort((a, b) => (a || '').localeCompare(b || ''))
              .map((type) => (
                <label key={type} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    checked={selectedTypes.includes(type)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedTypes([...selectedTypes, type]);
                      } else {
                        setSelectedTypes(selectedTypes.filter(t => t !== type));
                      }
                    }}
                  />
                  {type}
                </label>
              ))}
          </div>
        </div>

        {/* Forms */}
        <div style={{ marginBottom: '3rem' }}>
          <label>Form</label>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem' }}>
            {uniqueForms
              .slice()
              .sort((a, b) => (a || '').localeCompare(b || ''))
              .map(form => (
                <label key={form} style={{ fontSize: '0.875rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <input
                    type="checkbox"
                    checked={selectedForms.includes(form)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedForms([...selectedForms, form]);
                      } else {
                        setSelectedForms(selectedForms.filter(f => f !== form));
                      }
                    }}
                  />
                  {form}
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
              <th style={{ width: '45px' }}>BPM</th>
              <th style={{ width: '100px' }}>Type</th>
              <th style={{ width: '120px' }}>Tags</th>
              <th style={{ width: '150px' }}>Download</th>
            </tr>
          </thead>
          <tbody>
            {currentTracks.map((track) => (
              <tr key={track.id}>
                <td>
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '0.5rem', fontWeight: 600 }}>
                    {(track.files.mp3 || track.files.wav) && (
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
                          cursor: 'pointer',
                          position: 'relative',
                          transition: 'all 0.2s ease'
                        }}
                        onMouseOver={(e) => {
                          e.currentTarget.style.backgroundColor = '#2563eb';
                          e.currentTarget.style.borderRadius = '50%';
                        }}
                        onMouseOut={(e) => {
                          e.currentTarget.style.backgroundColor = 'transparent';
                        }}
                      >
                        {playingTrackId === track.id ? (
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="#2563eb"
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
                <td style={{ width: '45px' }}>{track.bpm ?? "-"}</td>
                <td style={{ fontSize: '0.65rem', width: '100px' }}>{track.type ?? "-"}</td>
                <td style={{ 
                  backgroundColor: '#1a1a1a',
                  width: '120px'
                }}>
                  {track.tags?.slice(0, 3).map((tag) => (
                    <span key={tag} className="tag" style={{ 
                      fontSize: '0.65rem',
                      background: 'none',
                      padding: '0 0.25rem',
                      color: '#999'
                    }}>
                      {tag}
                    </span>
                  ))}
                  {track.tags && track.tags.length > 3 && (
                    <span style={{ fontSize: '0.65rem', color: '#666', marginLeft: '0.25rem' }}>
                      ...
                    </span>
                  )}
                </td>
                <td style={{ width: '150px' }}>
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

        {/* Pagination Controls */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'center', 
          alignItems: 'center', 
          gap: '1rem',
          marginTop: '2rem',
          marginBottom: '1rem'
        }}>
          <button
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === 1 ? '#333' : '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer'
            }}
          >
            Previous
          </button>
          
          <span style={{ color: '#999' }}>
            Page {currentPage} of {totalPages}
          </span>
          
          <button
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            style={{
              padding: '0.5rem 1rem',
              backgroundColor: currentPage === totalPages ? '#333' : '#666',
              color: 'white',
              border: 'none',
              borderRadius: '4px',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer'
            }}
          >
            Next
          </button>
        </div>

        {playingTrackId && (
          <div style={{ marginTop: '1rem' }}>
            <audio
              controls
              autoPlay
              src={`/audio/${(() => {
                const t = tracks.find((t) => t.id === playingTrackId);
                return t?.files.mp3 || t?.files.wav;
              })()}`}
            >
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    </div>
  );
}