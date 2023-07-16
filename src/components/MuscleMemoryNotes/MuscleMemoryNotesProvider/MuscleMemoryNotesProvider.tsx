import { createContext, Dispatch, ReactNode, SetStateAction, useContext, useMemo, useState } from "react";

export type MuscleMemoryNotesProviderProps = {
    children: ReactNode,
}

export type MuscleMemoryNotesContextType = {
    beatCount: number,
    context: any,
    setContext: Dispatch<SetStateAction<any>>,
    bpm: number,
    setBpm: Dispatch<SetStateAction<number>>,
    noteCount: number,
    setNoteCount: Dispatch<SetStateAction<number>>,
    isSoundEnabled: boolean,
    setIsSoundEnabled: Dispatch<SetStateAction<boolean>>,
    isNoteRevealEnabled: boolean,
    setIsNoteRevealEnabled: Dispatch<SetStateAction<boolean>>,
    clefs: {
        treble: boolean,
        bass: boolean,
    },
    setClefs: Dispatch<SetStateAction<{
        treble: boolean,
        bass: boolean,
    }>>,
    notes: Note[],
    setNotes: Dispatch<SetStateAction<Note[]>>,
    lastNote: Note | undefined,
    setLastNote: Dispatch<SetStateAction<Note | undefined>>,

}

const MuscleMemoryNotesContext = createContext<MuscleMemoryNotesContextType>({
} as MuscleMemoryNotesContextType);

export const MuscleMemoryNotesProvider = ({ children }: MuscleMemoryNotesProviderProps) => {

  const beatCount = 4;

  const [context, setContext] = useState<any>(null);

  const [bpm, setBpm] = useState(30);

  const [noteCount, setNoteCount] = useState(1);

  const [isSoundEnabled, setIsSoundEnabled] = useState(false);

  const [isNoteRevealEnabled, setIsNoteRevealEnabled] = useState(false);

  const [clefs, setClefs] = useState({
    treble: true,
    bass: false,
  });

  const [notes, setNotes] = useState<Note[]>([]);

  const [lastNote, setLastNote] = useState<Note>();

  const mmnContext: MuscleMemoryNotesContextType = useMemo(() => ({
    beatCount,
    context,
    setContext,
    bpm,
    setBpm,
    noteCount,
    setNoteCount,
    isSoundEnabled,
    setIsSoundEnabled,
    isNoteRevealEnabled,
    setIsNoteRevealEnabled,
    clefs,
    setClefs,
    notes,
    setNotes,
    lastNote,
    setLastNote,
  }), [
    beatCount, context, bpm, noteCount, isSoundEnabled, isNoteRevealEnabled, clefs, notes, lastNote,
  ]);

  return (
    <MuscleMemoryNotesContext.Provider value={mmnContext}>
      {
        children
      }
    </MuscleMemoryNotesContext.Provider>
  );
};

export const useMuscleMemoryNotes = () => useContext(MuscleMemoryNotesContext);