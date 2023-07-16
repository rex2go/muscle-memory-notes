import { useMuscleMemoryNotes } from "../MuscleMemoryNotesProvider";

type MuscleMemoryNotesBeatProps = {
    beat: number,
}

export const MuscleMemoryNotesBeat = ({ beat }: MuscleMemoryNotesBeatProps) => {

  const { beatCount, lastNote, bpm } = useMuscleMemoryNotes();

  const delay = 60 / bpm;

  return (
    <div className="w-full h-2 pl-10 pr-5 pb-10">
      <div className="relative w-full rounded-lg overflow-hidden bg-gray-200">
        <div className="h-2 rounded-lg overflow-hidden w-0">

          <div key={lastNote?.id} className={"h-full bg-blue-100 animate-widthFill absolute"}
            style={{
              animationDuration: `${delay * 4}s`,
            }}></div>

          <div className="absolute w-full h-full flex justify-between">
            {
              Array.from(Array(beatCount).keys()).map((localBeat) =>
                <div key={localBeat} className="w-1/4 h-full flex">
                  <div className={`w-3 h-full ${localBeat + 1 === beat ? "bg-blue-500" : "bg-blue-300"}`}></div>
                </div>
              )
            }
          </div>
        </div>
      </div>
    </div>
  );
};