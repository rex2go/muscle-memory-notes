import { useEffect, useState } from "react";
import { Howl } from "howler";

type UseMetronomeProps = {
    bpm: number,
    isSoundEnabled: boolean,
    soundVolume?: number,
    sound?: Howl,
    accentSound?: Howl,
    onBeat?: (beat: number) => void,
    beatCount?: number,
}

export const useMetronome = ({ bpm, isSoundEnabled, onBeat, accentSound, sound, beatCount = 4 }: UseMetronomeProps) => {

  const [beat, setBeat] = useState<number>(0);

  const [lastBeat, setLastBeat] = useState<number>(-1);

  useEffect(() => {
    const delay = 60 / bpm * 1000;

    const intervalId = setInterval(() => {
      const now = Date.now();

      const updatedBeat = beat < beatCount ? beat + 1 : 1;

      if(lastBeat === -1) {
        handleBeat(updatedBeat);

        setBeat(updatedBeat);
        setLastBeat(now);

        return;
      }

      if(lastBeat < now - delay) {
        handleBeat(updatedBeat);

        setBeat(updatedBeat);
        setLastBeat(lastBeat + delay);
      }
    }, 10);

    return () => {
      clearInterval(intervalId);
    };
  }, [
    bpm, beat, lastBeat,
  ]);

  const handleBeat = (beat: number) => {
    if(sound && isSoundEnabled) {
      if (beat === 1 && accentSound) {
        accentSound.play();
      } else {
        sound.play();
      }
    }

    onBeat && onBeat(beat);
  };

  const sync = () => {
    setLastBeat(Date.now());
    setBeat(1);
  };

  return {
    beat,
    sync,
  };
};