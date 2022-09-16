import "../styles/globals.css";
import type { AppProps } from "next/app";

import NavBar from "../components/NavBar";
import ThemeProvider from "../components/ThemeProvider";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <NavBar />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
