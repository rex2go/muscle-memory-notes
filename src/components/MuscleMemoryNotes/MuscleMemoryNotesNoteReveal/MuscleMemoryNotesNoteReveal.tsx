import { useMuscleMemoryNotes } from "../MuscleMemoryNotesProvider";

type MuscleMemoryNotesNoteRevealProps = {
    beat: number,
}

export const MuscleMemoryNotesNoteReveal = ({ beat }: MuscleMemoryNotesNoteRevealProps) => {

  const { notes, lastNote } = useMuscleMemoryNotes();

  return (
    <div className="w-full h-2 pl-10 pr-5 pb-6 -mt-6 flex">
      {
        notes.map((note, index) =>
          <span key={note.id} className="w-1/4 pl-0.5">
            { index + 2 <= beat ? note.note : (beat === 1 && index === 3 ? lastNote?.note ?? "x" : "x")}
          </span>
        )
      }
    </div>
  );
};