import { NoteStruct } from "vexflow";

export const getRandomNote = (clef: "treble" | "bass", duration: string, count = 1): NoteStruct => {
  const notes = [
    "c", "d", "e", "f", "g", "a", "b",
  ];

  const range = {
    "treble": ["4", "5"],
    "bass": ["4", "5"],
  };

  const keys = [];

  for(let i = 0; i < count; i++) {
    const note = notes[Math.floor(Math.random() * notes.length)];
    const pitch = range[clef][Math.floor(Math.random() * range[clef].length)];

    keys.push(`${note}/${pitch}`);
  }

  return {
    keys,
    duration: duration,
  };
};