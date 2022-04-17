import "../styles/globals.css";

import { NextUIProvider, createTheme } from "@nextui-org/react";
import { ThemeProvider } from "next-themes";

import awsExports from "../src/aws-exports";
import { Amplify, API, Auth } from "aws-amplify";
Amplify.configure(awsExports);

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class">
      <NextUIProvider>
        <Component {...pageProps} />
      </NextUIProvider>
    </ThemeProvider>
  );
}

export default MyApp;
