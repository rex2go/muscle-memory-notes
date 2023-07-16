import { useMuscleMemoryNotes } from "../MuscleMemoryNotesProvider";
import { useEffect, useRef } from "react";
import { Formatter, Renderer, Stave, StaveNote, Voice } from "vexflow";
import { getRandomNote } from "../../../helper/util";
import { v4 as uuidv4 } from "uuid";
import { muscleMemoryNoteSheetStyles as styles } from "./MuscleMemoryNoteSheet.styles";

type MuscleMemoryNotesSheetProps = {
  beat: number,
}

export const MuscleMemoryNotesSheet = ({ beat }: MuscleMemoryNotesSheetProps) => {

  const ref = useRef<HTMLDivElement>(null);

  const {
    context,
    setContext,
    beatCount,
    notes,
    setNotes,
    setLastNote,
    noteCount,
    clefs,
  } = useMuscleMemoryNotes();

  useEffect(() => {
    if(ref.current) {
      if(!context) {
        const renderer = new Renderer(ref.current, Renderer.Backends.SVG);

        renderer.resize(401, 120);

        setContext(renderer.getContext());
      } else {

        drawNotes();

        return () => {
          context.clear();
        };
      }
    }
  }, [
    ref, context, noteCount,
  ]);

  useEffect(() => {
    if (beat === 1) {
      if (context) {
        context.clear();
        drawNotes();
      }
    }
  }, [beat]);

  const drawNotes = () => {
    const stave = new Stave(0, 0, 400);

    const enabledClefs =
            Object.keys(Object.fromEntries(Object.entries(clefs).filter(([_, enabled]) => enabled)));

    if(enabledClefs.length === 0) return;

    const clef = enabledClefs[Math.floor(Math.random() * enabledClefs.length)] as "treble" | "bass";

    stave.addClef(clef);

    const voice = new Voice({
      num_beats: beatCount,
      beat_value: 4,
    });

    setLastNote(notes[notes.length - 1]);
    setNotes([]);

    for(let i = 0; i < beatCount; i++) {
      const noteStruct = getRandomNote(clef, "q", noteCount);

      setNotes((notes) => [...notes, {
        note: noteStruct.keys!.map((k) => k.split("/")[0]).join(","),
        id: uuidv4(),
      }]);

      voice.addTickable(new StaveNote(noteStruct));
    }

    new Formatter().joinVoices([voice]).format([voice], 350);

    voice.draw(context, stave);

    stave.setContext(context).draw();

    return () => {
      context.clear();
    };
  };

  return (
    <div ref={ref} css={styles.root}></div>
  );
};
