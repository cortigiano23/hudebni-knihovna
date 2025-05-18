'use client';

import { useState } from "react";
import { tracks } from "@/data/tracks";

export default function TracksTable() {
  const [search, setSearch] = useState("");
  const [playingTrackId, setPlayingTrackId] = useState<string | null>(null);
  const [bpmRange, setBpmRange] = useState<[number, number]>([0, 200]);
  const [selectedTags, setSelectedTags] = useState<string[]>([]);

  // 🧠 získáme všechny tagy ze všech skladeb
  const allTags = Array.from(new Set(tracks.flatMap((track) => track.tags ?? [])));

  // 🎯 filtrujeme skladby podle search + bpm + tagů
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

    return matchesSearch && matchesBpm && matchesTags;
  });

  const toggleTag = (tag: string) => {
    setSelectedTags((prev) =>
      prev.includes(tag) ? prev.filter((t) => t !== tag) : [...prev, tag]
    );
  };

  return (
    <div className="flex flex-col md:flex-row gap-8">
      {/* SIDEBAR FILTRY */}
      <aside className="md:w-1/4">
        <h2 className="font-bold mb-12">Filter</h2>

        {/* BPM Range */}
        <div className="mb-12">
          <label className="block font-semibold mb-1">bpm</label>
          <div className="flex items-center gap-2">
            <input
              type="number"
              min={0}
              max={bpmRange[1]}
              value={bpmRange[0]}
              onChange={(e) =>
                setBpmRange([+e.target.value, bpmRange[1]])
              }
              className="w-16 border px-1 py-0.5 rounded text-sm"
            />
            <span>–</span>
            <input
              type="number"
              min={bpmRange[0]}
              max={300}
              value={bpmRange[1]}
              onChange={(e) =>
                setBpmRange([bpmRange[0], +e.target.value])
              }
              className="w-16 border px-1 py-0.5 rounded text-sm"
            />
          </div>
        </div>

        {/* TAGY */}
        <div className="mb-4">
          <label className="block font-semibold mb-1">Tags</label>
 <div className="flex flex-col gap-1">
  {allTags
    .slice()
    .sort((a, b) => a.localeCompare(b))
    .map((tag) => (
      <label key={tag} className="text-sm flex items-center gap-2">
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

      {/* TABULKA */}
      <div className="md:w-3/4">
        <input
  type="text"
  placeholder="Search tracks..."
  value={search}
  onChange={(e) => setSearch(e.target.value)}
  className="mb-6 w-full bg-black text-white border-0 border-b-4 border-white px-2 py-2 focus:outline-none placeholder-white font-boldgi"
/>

        <table className="w-full border-separate border-spacing-y-2 border-spacing-x-0">
          <thead>
            <tr>
              <th className="text-left py-2 px-4 border-b border-gray-300">Title</th>
              <th className="text-left py-2 px-4 border-b border-gray-300">Description</th>
              <th className="text-left py-2 px-4 border-b border-gray-300">Length</th>
              <th className="text-left py-2 px-4 border-b border-gray-300">BPM</th>
              <th className="text-left py-2 px-4 border-b border-gray-300">Style</th>
              <th className="text-left py-2 px-4 border-b border-gray-300">Tags</th>
              <th className="text-left py-2 px-4 border-b border-gray-300">Download</th>
            </tr>
          </thead>
          <tbody>
            {filteredTracks.map((track) => (
              <tr key={track.id} className="border-b border-gray-300">
                <td className="py-3 px-4 font-semibold flex items-center gap-2">
                  {track.files.mp3 && (
                    <button
                      onClick={() =>
                        setPlayingTrackId(playingTrackId === track.id ? null : track.id)
                      }
                      aria-label={playingTrackId === track.id ? "Stop" : "Play"}
                      className="flex items-center justify-center w-6 h-6"
                    >
                      {playingTrackId === track.id ? (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="white"
                          viewBox="0 0 24 24"
                          width="20"
                          height="20"
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
                        >
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      )}
                    </button>
                  )}
                  {track.title}
                </td>
                <td className="py-3 px-4">{track.description}</td>
                <td className="py-3 px-4">{track.length ?? "-"}</td>
                <td className="py-3 px-4">{track.bpm ?? "-"}</td>
                <td className="py-3 px-4">{track.style ?? "-"}</td>
                <td className="py-3 px-4">
                  {track.tags?.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block bg-gray-200 text-gray-700 text-xs px-2 py-1 mr-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </td>
                <td className="py-3 px-4 flex gap-2">
                  {Object.entries(track.files).map(([format, filename]) => (
                    <a
                      key={format}
                      href={`/audio/${filename}`}
                      download={filename}
                      title={`Download ${format.toUpperCase()}`}
                      className="bg-blue-600 text-white rounded px-3 py-1 hover:bg-blue-700 text-sm"
                    >
                      {format.toUpperCase()}
                    </a>
                  ))}
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        {playingTrackId && (
          <div className="mt-4">
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