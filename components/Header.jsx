import { useState } from "react";
import { BsList } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

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
    <div className="fixed top-0 z-50 flex items-center justify-between w-screen px-10 py-5 bg-white bg-opacity-90">
      {/*Logo*/}
      {/*<img src="" alt="" />*/}
      <h1 className="text-xl font-bold md:font-black md:text-2xl">RUTA</h1>

      {/*Nav-desktop*/}
      <div className="hidden font-semibold text-black space-x-10 md:block">
        {links.map((e) => (
          <Link key={`d-${e.name}`} href={e.path}>
            {e.name}
          </Link>
        ))}
      </div>

      {/*Nav-mobile*/}
      <button className="md:hidden fixed right-10 top-6">
        {!isOpen && (
          <BsList
            className="text-xl text-black"
            onClick={() => {
              setIsOpen(true);
            }}
          />
        )}
      </button>
      <AnimatePresence>
        {isOpen && (
          <motion.nav
            initial={{ opacity: 0}}
            animate={{ opacity: 1}}
            exit={{ opacity: 0 }}
          >
            <div className="fixed top-0 left-0 flex flex-col items-center w-screen h-screen bg-white space-y-5">
              <AiOutlineClose
                className="self-end mt-6 mr-10 text-xl text-black"
                onClick={() => {
                  setIsOpen(false);
                }}
              />
              {LINKS.map((e) => {
                return (
                  <Link key={`m-${e.name}`} href={e.path}>
                    <a className="text-xl text-black">{e.name}</a>
                  </Link>
                );
              })}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
