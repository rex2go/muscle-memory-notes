import { useMuscleMemoryNotes } from "../MuscleMemoryNotesProvider";

type MuscleMemoryNotesSettingsProps = {
    sync: () => void,
}

export const MuscleMemoryNotesSettings = ({ sync }: MuscleMemoryNotesSettingsProps) => {
    
  const {
    bpm,
    setBpm,
    isSoundEnabled,
    setIsSoundEnabled,
    noteCount,
    setNoteCount,
    isNoteRevealEnabled,
    setIsNoteRevealEnabled,
    clefs,
    setClefs,
  } = useMuscleMemoryNotes();

  return (
    <div className="flex place-content-center flex-col">
      <label className="flex gap-2 items-center">
            BPM
        <input type="range"
          min={5}
          max={200}
          onChange={(v) => setBpm(parseInt(v.target.value))}
          value={String(bpm)}/>
        {bpm}
      </label>

      <label className="flex gap-2 items-center">
            Note Count
        <input type="range"
          min={1}
          max={4}
          onChange={(v) => setNoteCount(parseInt(v.target.value))}
          value={String(noteCount)}/>
        {noteCount}
      </label>

      <label className="flex gap-2 items-center">
          Metronome
        <input type="checkbox"
          checked={isSoundEnabled}
          onChange={(v) => setIsSoundEnabled(v.target.checked)}/>
      </label>

      <label className="flex gap-2 items-center">
          Reveal Note
        <input type="checkbox"
          checked={isNoteRevealEnabled}
          onChange={(v) => setIsNoteRevealEnabled(v.target.checked)}/>
      </label>

      <label className="flex gap-2 items-center">
          Treble
        <input type="checkbox"
          checked={clefs.treble}
          onChange={(v) => setClefs((clefs) => ({
            ...clefs,
            treble: v.target.checked,
          }))}/>
      </label>

      <label className="flex gap-2 items-center">
          Bass
        <input type="checkbox"
          checked={clefs.bass}
          onChange={(v) => setClefs((clefs) => ({
            ...clefs,
            bass: v.target.checked,
          }))}/>
      </label>

      <button className="flex bg-gray-300 w-min py-0.5 px-4 rounded-xl mt-1" onClick={() => sync()}>Sync</button>
    </div>
  );
};