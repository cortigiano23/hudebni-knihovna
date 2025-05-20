export type Track = {
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

export const tracks: Track[] = [
  {
    "id": "1",
    "title": "Lost in Žitomir",
    "description": "Piano song with strings",
    "bpm": 80,
    "length": "3:30",
    "type": "sondtrack",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "atmospheric"
    ],
    "files": {
      "mp3": "lost-in-zitomir.mp3",
      "wav": "lost-in-zitomir.wav"
    }
  },
  {
    "id": "2",
    "title": "Movin",
    "description": "Instrumental atmosphere",
    "bpm": 90,
    "length": "4:58",
    "type": "sondtrack",
    "form": "instrumental",
    "tags": [
      "background music"
    ],
    "files": {
      "mp3": "movin.mp3"
    }
  },
  {
    "id": "3",
    "title": "Expectations",
    "description": "U-Prag song",
    "bpm": 150,
    "length": "",
    "type": "electronic",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "evolving",
      "piano",
      "strings"
    ],
    "files": {
      "mp3": "Expectations.mp3"
    }
  },
  {
    "id": "4",
    "title": "Happy to Have You Back",
    "description": "Modern dance",
    "bpm": 120,
    "length": "",
    "type": "complete song",
    "form": "voice",
    "tags": [
      "voice",
      "dance",
      "kick"
    ],
    "files": {
      "mp3": "Happy-to-Have-You-Back.mp3",
      "wav": "02_Happy-to-Have-You-Back.wav"
    }
  },
  {
    "id": "5",
    "title": "Infinite",
    "description": "Deep atmo",
    "bpm": 90,
    "length": "5:36",
    "type": "soundtrack",
    "form": "instrumental",
    "tags": [
      "dark",
      "emotional"
    ],
    "files": {
      "mp3": "Infinite.mp3"
    }
  },
  {
    "id": "6",
    "title": "Symphony for Ourselves",
    "description": "Strings",
    "bpm": 120,
    "length": "6:36",
    "type": "soundtrack",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "strings"
    ],
    "files": {
      "mp3": "Symphony-for-Ourselves.mp3"
    }
  },
  {
    "id": "7",
    "title": "Motionless",
    "description": "Instrumental strings",
    "bpm": 120,
    "length": "7:36",
    "type": "soundtrack",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "strings"
    ],
    "files": {
      "mp3": "Motionless.mp3"
    }
  },
  {
    "id": "8",
    "title": "Moravia",
    "description": "Alternative electro",
    "bpm": 130,
    "length": "8:36",
    "type": "dance",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "electronic",
      "dance",
      "piano"
    ],
    "files": {
      "mp3": "Moravia.mp3"
    }
  },
  {
    "id": "9",
    "title": "Every Single Soul",
    "description": "Hit with voice",
    "bpm": 165,
    "length": "9:36",
    "type": "dnb",
    "form": "voice",
    "tags": [
      "voice",
      "piano",
      "hit"
    ],
    "files": {
      "mp3": "every-single-soul.mp3"
    }
  },
  {
    "id": "10",
    "title": "Seconds of Life",
    "description": "Hit with voice",
    "bpm": 120,
    "length": "10:36",
    "type": "complete song",
    "form": "voice",
    "tags": [
      "voice",
      "piano",
      ""
    ],
    "files": {
      "mp3": "seconds-of-life.mp3"
    }
  },
  {
    "id": "11",
    "title": "Sokol",
    "description": "Czech rap",
    "bpm": 120,
    "length": "11:36",
    "type": "complete song",
    "form": "voice",
    "tags": [
      "rap",
      "česky",
      "voice"
    ],
    "files": {
      "mp3": "sokol.mp3"
    }
  },
  {
    "id": "12",
    "title": "Prelude",
    "description": "Atmosphere",
    "bpm": 110,
    "length": "12:36",
    "type": "soundtrack",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "piano",
      "emotional"
    ],
    "files": {
      "mp3": "prelude.mp3"
    }
  },
  {
    "id": "13",
    "title": "Icebreaker",
    "description": "Dance nabger",
    "bpm": 120,
    "length": "13:36",
    "type": "dance",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "dance",
      "beat"
    ],
    "files": {
      "mp3": "icebreaker.mp3"
    }
  },
  {
    "id": "14",
    "title": "Perspective",
    "description": "Straightforward",
    "bpm": 160,
    "length": "14:36",
    "type": "complete song",
    "form": "voice",
    "tags": [
      "guitar",
      "voice",
      "massive"
    ],
    "files": {
      "mp3": "perspective.mp3"
    }
  },
  {
    "id": "15",
    "title": "Guily Pleasure",
    "description": "Instrumental strings",
    "bpm": 120,
    "length": "15:36",
    "type": "soundtrack",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "strings",
      "soundtrack",
      "film"
    ],
    "files": {
      "mp3": "guilty-pleasure.mp3"
    }
  },
  {
    "id": "16",
    "title": "If Only",
    "description": "Dance instrumental",
    "bpm": 130,
    "length": "16:36",
    "type": "breakbeat",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "dance",
      ""
    ],
    "files": {
      "mp3": "if-only.mp3"
    }
  },
  {
    "id": "17",
    "title": "All Good Things",
    "description": "Slow cool song",
    "bpm": 120,
    "length": "17:36",
    "type": "complete song",
    "form": "voice",
    "tags": [
      "voice",
      "atmospheric"
    ],
    "files": {
      "mp3": "all-good-things.mp3"
    }
  },
  {
    "id": "18",
    "title": "Kra",
    "description": "Czech rap",
    "bpm": 120,
    "length": "18:36",
    "type": "complete song",
    "form": "voice",
    "tags": [
      "rap",
      "česky",
      "voice"
    ],
    "files": {
      "mp3": "kra.mp3"
    }
  },
  {
    "id": "19",
    "title": "Summer Funk",
    "description": "Summer feel",
    "bpm": 140,
    "length": "2:31",
    "type": "funky",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "guitar",
      "positive",
      "cool"
    ],
    "files": {
      "mp3": "summer-funk.mp3"
    }
  },
  {
    "id": "20",
    "title": "XXX",
    "description": "Test 1",
    "bpm": 70,
    "length": "4:56",
    "type": "dnb",
    "form": "instrumental",
    "tags": [
      "instrumental",
      "jingle"
    ],
    "files": {
      "mp3": "xxx.mp3"
    }
  },
  {
    "id": "21",
    "title": "XX1",
    "description": "Test 2",
    "bpm": 50,
    "length": "4:45",
    "type": "dnb",
    "form": "instrumental",
    "tags": [
      "short"
    ],
    "files": {
      "mp3": "xx1.mp3"
    }
  },
  {
    "id": "22",
    "title": "XX2",
    "description": "Test 3",
    "bpm": 190,
    "length": "3:25",
    "type": "dnb",
    "form": "instrumental",
    "tags": [
      "background music"
    ],
    "files": {
      "mp3": "xx2.mp3"
    }
  }
];