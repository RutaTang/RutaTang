import { useContext } from "react";
import Image from "next/image";
import { ThemeContext } from "../components/ThemeProvider";
import { FormattedMessage } from "react-intl";

const NotFound = () => {
  const { theme } = useContext(ThemeContext);
  return (
    <div className="h-screen w-screen flex justify-center items-center">
      {/*Background*/}
      <div className="w-screen h-screen -z-50 absolute top-0">
        <Image
          src={theme === "light" ? "/Moon-Light.svg" : "/Moon-Dark.svg"}
          layout="fill"
          objectFit="cover"
        />
      </div>
      {/*Content*/}
      <div className="text-center">
        <h1 className="text-6xl font-black">404</h1>
        <h1 className="text-5xl font-black">...</h1>
        <h1 className="text-5xl font-black mt-5">
          <FormattedMessage id="404" />
        </h1>
      </div>
    </div>
  );
};
export default NotFound;
