// convert-csv-to-tracks.js

const fs = require('fs');
const path = require('path');

const csvFile = path.join(__dirname, 'tracks.csv');
const outputFile = path.join(__dirname, 'tracks.ts');

const csvData = fs.readFileSync(csvFile, 'utf-8');

function parseCSV(data) {
  const lines = data.trim().split('\n');
  const headers = lines[0].split(';').map(h => h.trim());

  const tracks = lines.slice(1).map(line => {
    const values = line.split(';').map(v => v.trim().replace(/\r$/, ''));
    const track = {};
    headers.forEach((header, i) => {
      track[header] = values[i];
    });
    return track;
  });
  return tracks;
}

const parsedTracks = parseCSV(csvData);
console.log('Parsed CSV data:', parsedTracks);

const tracks = parsedTracks.map(track => {
  // zpracuj tagy do pole
  const tags = track.tags ? track.tags.split(',').map(t => t.trim()) : [];
  return {
    id: track.id,
    title: track.title,
    description: track.description,
    bpm: track.bpm ? Number(track.bpm) : undefined,
    length: track.length,
    type: track.type || track.style, // try both type and style fields
    form: track.form,
    tags,
    files: {
      mp3: track.mp3 || undefined,
      wav: track.wav || undefined,
    },
  };
});

const tsContent = `export type Track = {
  id: string;
  title: string;
  description: string;
  bpm?: number;
  length?: string;
  type?: string;
  form?: string;
  tags?: string[];
  files: { [format: string]: string };
};

export const tracks: Track[] = ${JSON.stringify(tracks, null, 2)};`;

fs.writeFileSync(outputFile, tsContent, 'utf-8');

console.log('tracks.ts updated!');