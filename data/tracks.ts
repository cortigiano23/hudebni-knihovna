    export type Track = {
    id: string;             // unikátní ID
    title: string;          // název skladby
    description: string;    // popis skladby
    bpm?: number;           // BPM skladby (volitelné)
    tags?: string[];        // tagy / nálady (např. ["relax", "ambient"])
    files: {                // objekt s dostupnými verzemi souborů ke stažení
        [format: string]: string;  // např. "mp3": "snih-na-dlanich.mp3"
    };
    };


    export const tracks: Track[] = [
  {
    id: "lost-in-zitomir",
    title: "Lost in Žitomir",
    description: "Hovno hovno hovno",
    bpm: 60,
    tags: ["relax", "piano", "klid"],
    files: {
      mp3: "lost-in-zitomir.mp3",
      wav: "lost-in-zitomir.wav",
    },
  },
  {
    id: "movin",
    title: "Movin 2025",
    description: "Movin, movin, movin",
    bpm: 45,
    tags: ["ambient", "meditace", "relax"],
    files: {
      mp3: "movin.mp3",
      wav: "movin.wav",
    },
  },
];