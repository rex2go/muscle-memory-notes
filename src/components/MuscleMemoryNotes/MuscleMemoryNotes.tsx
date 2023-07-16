import metronomeSoundSrc from "../../assets/sounds/metronome-85688.mp3";
import { useMetronome } from "../../hooks/use-metronome";
import { Howl } from "howler";
import { useMuscleMemoryNotes } from "./MuscleMemoryNotesProvider";
import { MuscleMemoryNotesSettings } from "./MuscleMemoryNotesSettings";
import { MuscleMemoryNotesBeat } from "./MuscleMemoryNotesBeat";
import { MuscleMemoryNotesSheet } from "./MuscleMemoryNotesSheet";
import { MuscleMemoryNotesNoteReveal } from "./MuscleMemoryNotesNoteReveal";

const sound = new Howl({
  src: [metronomeSoundSrc],
  volume: 0.5,
});

const accentSound = new Howl({
  src: [metronomeSoundSrc],
  rate: 1.2,
});

export const MuscleMemoryNotes = () => {
  const {
    beatCount,
    bpm,
    isSoundEnabled,
    isNoteRevealEnabled,
  } = useMuscleMemoryNotes();

  const { beat, sync } = useMetronome({
    bpm,
    isSoundEnabled,
    sound,
    beatCount,
    accentSound,
  });

  return (
    <div className="flex place-content-center w-full h-full">
      <div className="flex flex-col px-10 justify-center -mt-10">

        <h1 className="font-fredoka text-2xl text-center pb-2">Muscle Memory Notes</h1>

        <MuscleMemoryNotesSheet beat={beat}/>

        {
          isNoteRevealEnabled &&
            <MuscleMemoryNotesNoteReveal beat={beat}/>
        }

        <MuscleMemoryNotesBeat beat={beat}/>

        <MuscleMemoryNotesSettings sync={sync}/>
      </div>
    </div>
  );
};