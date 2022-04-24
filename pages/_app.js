import "../styles/globals.css";

import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import HighWrap from '../components/HighWrap';

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>
				<HighWrap>
					<Component {...pageProps} />
				</HighWrap>
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
