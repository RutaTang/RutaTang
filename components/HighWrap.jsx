import { useTheme } from "@nextui-org/react";

const HighWrap = (props) => {
  const { isDark, type } = useTheme();
  return (
    <>
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
