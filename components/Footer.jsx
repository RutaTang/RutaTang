import { AiFillGithub, AiOutlineCopyrightCircle } from "react-icons/ai";
import { SiGmail } from "react-icons/si";

const Footer = (props) => {
  const mt = props.mt || "0px";
  return (
    <div
      style={{ marginTop: mt }}
      className="flex dark:bg-black flex-col md:flex-row justify-around bg-white shadow shadow-gray-300 dark:shadow-slate-50 items-center h-20 md:h-16"
    >
      <p className="md:flex items-center opacity-0 hidden">
        <AiOutlineCopyrightCircle/>
        <span>2022 Ruta</span>
      </p>
      <div className="flex space-x-5 mt-5 md:mt-0">
        <AiFillGithub className="text-3xl dark:text-slate-300" />
        <SiGmail className="text-3xl dark:text-slate-300" />
      </div>
      <p className="flex items-center mt-1 md:mt-0">
        <AiOutlineCopyrightCircle className="dark:text-slate-300"/>
        <span className="dark:text-slate-300">2022 Ruta</span>
      </p>
    </div>
  );
};

export default Footer;
