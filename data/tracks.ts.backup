export type Track = {
  id: string;             
  title: string;          
  description: string;    
  bpm?: number;           
  tags?: string[];        
  length?: string;        // ⬅️ délka skladby
  style?: string;         // ⬅️ hudební styl
  files: {                
    [format: string]: string;  
  };
};

export const tracks: Track[] = [
  {
    id: "lost-in-zitomir",
    title: "Lost in Žitomir",
    description: "Hovno hovno hovno",
    bpm: 60,
    length: "2:37",
    style: "Piano",
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
    length: "3:12",
    style: "Ambient",
    tags: ["ambient", "meditace", "relax"],
    files: {
      mp3: "movin.mp3",
      wav: "movin.wav",
    },
  },
];