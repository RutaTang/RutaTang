import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";

const LINKS = [
  { path: "/", name: "HOME" },
  { path: "/blog", name: "BLOG" },
  { path: "/project", name: "PROJECT" },
  { path: "/work-experience", name: "WORK EXPERIENCE" },
  { path: "/contact-me", name: "CONTACT ME" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [links] = useState(LINKS);
  return (
    <div className="flex justify-between items-center px-10 py-5 w-screen fixed top-0 bg-white bg-opacity-90 z-50">
      {/*Logo*/}
      {/*<img src="" alt="" />*/}
      <h1 className="font-bold md:font-black text-xl md:text-2xl">RUTA</h1>
      {/*Nav-desktop*/}
      <div className="text-black font-semibold space-x-10 hidden md:block">
        {links.map((e) => (
          <Link href={e.path}>{e.name}</Link>
        ))}
      </div>

      {/*Nav-mobile*/}
      <button className="md:hidden">
        {!isOpen && (
          <BsList
            className="text-black text-xl"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
        <div className="flex flex-col">
          <AiOutlineClose
            className="self-end mr-10 mt-5 text-xl"
            onClick={() => {
              setIsOpen(false);
            }}
          />
          <div className="flex flex-col space-y-10 mt-5">
            {links.map((link) => (
              <Link href={link.path}>{link.name}</Link>
            ))}
          </div>
        </div>
      </button>
    </div>
  );
};

export default Header;
