import { useContext, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";

import { ThemeContext } from "./ThemeProvider";

const ThemeChangeBtn = () => {
  const {theme,setTheme} = useContext(ThemeContext);
  return (
    <>
      {theme !== "" ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            if (theme === "dark") {
              setTheme("light");
            } else if (theme === "light") {
              setTheme("dark");
            }
          }}
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      ) : (
        <div className="btn opacity-0 disabled">
          <Moon />
        </div>
      )}
    </>
  );
};

const NavBar = () => {
  //data
  const menuItems = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Blog",
      link: "/blog",
    },
    {
      name: "About",
      link: "/about",
    },
    {
      name: "Apps",
      link: "/apps",
    },
    {
      name: "Open Source",
      link: "/open-source",
    },
  ];
  //hooks
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar bg-base-100 bg-opacity-30 px-[5%] py-6 fixed top-0 w-screen z-50">
      <div className="navbar-start">
        <a className="text-3xl font-black">RUTA</a>
      </div>
      <div className="navbar-end ">
        {/* desktop: navbar-end */}
        <div className="flex items-center invisible md:visible">
          <ul className="menu menu-horizontal">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="ml-5">
            <ThemeChangeBtn />
          </div>
        </div>
        {/*mobile: navbar-end*/}
        <div className="visible md:invisible">
          {!showMenu ? (
            <Menu
              onClick={() => {
                setShowMenu(true);
              }}
              className="cursor-pointer"
            />
          ) : (
            <div className="bg-base-100 w-screen h-screen absolute left-0 top-0">
              <X
                onClick={() => setShowMenu(false)}
                className="mr-8 ml-auto mt-[8%] cursor-pointer"
              />
              <ul className="menu mt-3 ">
                {menuItems.map((item) => (
                  <li className="flex items-center" key={item.name}>
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
                <li className="mt-10 mx-[25%]">
                  <ThemeChangeBtn />
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;
