import { useContext } from "react";
import { ThemeContext } from "../components/ThemeProvider";
const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div
      style={{
        backgroundImage:
          theme === "light"
            ? "url('/Moon-Light.svg')"
            : "url('/Moon-Dark.svg')",
      }}
      className="min-h-screen min-w-screen pt-24 flex justify-center items-center"
    >
      <div className="-mt-[10%] text-center">
        <h1 className="text-6xl font-black">404</h1>
        <h1 className="text-5xl font-black">...</h1>
        <h1 className="text-5xl font-black mt-5">Find Your Own Way</h1>
      </div>
    </div>
  );
};
export default NotFound;
