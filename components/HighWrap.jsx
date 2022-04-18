import { useTheme } from "@nextui-org/react";
import Head from 'next/head';

const HighWrap = (props) => {
  const { isDark, type } = useTheme();
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/svgs/r.svg" />
      </Head>
      <style jsx global>{`
        :root {
          background-color: ${isDark ? "black" : "white"};
        }
      `}</style>
      {props.children}
    </>
  );
};

export default HighWrap;
