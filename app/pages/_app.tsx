import "../styles/globals.css";

import NavBar from "../components/NavBar";
import ThemeProvider from "../components/ThemeProvider";
import IntlWrapper from "../components/IntlWrapper";

import type { AppProps } from "next/app";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <IntlWrapper>
        <NavBar />
        <Component {...pageProps} />
      </IntlWrapper>
    </ThemeProvider>
  );
}

export default MyApp;
