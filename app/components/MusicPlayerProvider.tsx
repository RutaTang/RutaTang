import {
  createContext,
  ReactNode,
  useCallback,
  useEffect,
  useRef,
  useState,
} from "react";
import { Pause, Play } from "lucide-react";

interface MusicPlayerContextProps {
  setAudioSrc: (src: string) => void;
  play: () => void;
  pause: () => void;
}
const MusicPlayerContext = createContext({} as MusicPlayerContextProps);

const MusicPlayerProvider = ({ children }: { children: ReactNode }) => {
  const [audioSrc, _setAudioSrc] = useState("");
  const [isPaused, setIsPaused] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const play = useCallback(() => {
    audioRef.current?.play();
  }, [audioRef]);
  const pause = useCallback(() => {
    audioRef.current?.pause();
  }, [audioRef]);

  const setAudioSrc = (src: string) => {
    _setAudioSrc(src);
  };
  useEffect(() => {
    //intervally check if audio is paused
    setInterval(() => {
      if (audioRef.current) {
        setIsPaused(audioRef.current.paused);
      } else {
        setIsPaused(true);
      }
    }, 100);
  }, []);
  return (
    <MusicPlayerContext.Provider value={{ setAudioSrc, play, pause }}>
      <div
        className={`absolute bottom-6 right-[5%] w-16 h-16 flex justify-center items-center bg-primary rounded-full cursor-pointer text-white ${
          audioSrc ? "visible" : "invisible"
        }`}
        onClick={() => {
          if (isPaused) {
            play();
          } else {
            pause();
          }
        }}
      >
        <audio ref={audioRef} src={audioSrc} autoPlay hidden></audio>
        {isPaused ? <Play size={25} /> : <Pause size={25} />}
      </div>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export default MusicPlayerProvider;
export { MusicPlayerContext };
