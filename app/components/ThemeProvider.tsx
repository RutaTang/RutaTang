import {
  createContext,
  FC,
  useEffect,
  useState,
} from "react";
import { useWindowSize } from "@react-hook/window-size";

interface ThemeContextProps {
  theme: string;
  setTheme: (theme: string) => void;
}
const ThemeContext = createContext({} as ThemeContextProps);

interface Props {
  children: React.ReactNode;
}
const ThemeProvider: FC<Props> = ({ children }) => {
  const [theme, _setTheme] = useState("");
  const [width, height] = useWindowSize();
  const [isLoadedRenderFromServer, setIsLoadedRenderFromServer] = useState(false); //used to prevent flash by waiting rendered from server
  const setTheme = (theme: string) => {
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    _setTheme(theme);
  };
  useEffect(()=>{
    setIsLoadedRenderFromServer(true)
  },[])
  useEffect(() => {
    const theme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")!
      : "dark";
    setTheme(theme);
  }, [width, height]);

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      {isLoadedRenderFromServer ? children : null}
    </ThemeContext.Provider>
  );
};
export default ThemeProvider;
export { ThemeContext };
