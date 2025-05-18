import React, { useState } from "react";
import { tracks, Track } from "../data/tracks";

export default function TracksPage() {
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <h1 className="text-3xl font-bold mb-6">Hudební katalog</h1>

      <table className="min-w-full bg-white shadow rounded-lg overflow-hidden">
        <thead className="bg-gray-200 text-left">
          <tr>
            <th className="py-3 px-4">Název</th>
            <th className="py-3 px-4">Popis</th>
            <th className="py-3 px-4">BPM</th>
            <th className="py-3 px-4">Tagy</th>
            <th className="py-3 px-4">Stáhnout</th>
          </tr>
        </thead>
        <tbody>
          {tracks.map((track: Track) => (
            <tr key={track.id} className="border-t hover:bg-gray-50">
              <td className="py-3 px-4 font-semibold">{track.title}</td>
              <td className="py-3 px-4 text-gray-700">{track.description}</td>
              <td className="py-3 px-4">{track.bpm ?? "-"}</td>
              <td className="py-3 px-4">
                {track.tags?.map((tag) => (
                  <span
                    key={tag}
                    className="inline-block bg-gray-300 text-gray-700 text-xs rounded-full px-2 py-0.5 mr-1"
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
                    title={`Stáhnout ${format.toUpperCase()}`}
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
    </main>
  );
}