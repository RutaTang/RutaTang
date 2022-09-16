import { useEffect, useMemo, useState } from "react";
import { Sun, Moon, Menu, X } from "lucide-react";
import { useWindowSize } from "@react-hook/window-size";

const ThemeChange = () => {
  const [theme, setTheme] = useState("");
  const [width, height] = useWindowSize();
  useEffect(() => {
    const theme = localStorage.getItem("theme")
      ? localStorage.getItem("theme")!
      : "dark";
    localStorage.setItem("theme", theme);
    document.documentElement.dataset.theme = theme;
    setTheme(theme);
  }, [width, height]);

  return (
    <>
      {theme !== "" ? (
        <button
          className="btn btn-primary"
          onClick={() => {
            let theme = localStorage.getItem("theme") ?? "";
            if (theme === "dark") {
              localStorage.setItem("theme", "light");
              document.documentElement.dataset.theme = "light";
              setTheme("light");
            } else if (theme === "light") {
              localStorage.setItem("theme", "dark");
              document.documentElement.dataset.theme = "dark";
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
    <div className="navbar bg-base-100 px-[5%] py-6">
      <div className="navbar-start">
        <a className="text-3xl font-black">RUTA</a>
      </div>
      <div className="navbar-end ">
        {/* desktop: navbar-end */}
        <div className="flex items-center invisible md:visible">
          <ul className="menu menu-horizontal">
            {menuItems.map((item) => (
              <li>
                <a href={item.link}>{item.name}</a>
              </li>
            ))}
          </ul>
          <div className="ml-5">
            <ThemeChange />
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
                  <li className="flex items-center">
                    <a href={item.link}>{item.name}</a>
                  </li>
                ))}
                <li className="mt-10 mx-[25%]">
                  <ThemeChange />
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
