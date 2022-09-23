import "../styles/globals.css";

import NavBar from "../components/NavBar";
import ThemeProvider from "../components/ThemeProvider";
import IntlWrapper from "../components/IntlWrapper";
import MusicPlayerProvider from "../components/MusicPlayerProvider";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <IntlWrapper>
        <MusicPlayerProvider>
          <NavBar />
          <Component {...pageProps} />
        </MusicPlayerProvider>
      </IntlWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
