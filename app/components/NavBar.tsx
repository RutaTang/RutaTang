import { useCallback, useContext, useEffect, useState } from "react";
import { Sun, Moon, Menu, X, Languages, ChevronDown, ChevronUp } from "lucide-react";
import Link from "next/link";

import { ThemeContext } from "./ThemeProvider";
import { FormattedMessage } from "react-intl";
import { useRouter, NextRouter } from "next/router";

const ThemeChangeBtn = () => {
  const { theme, setTheme } = useContext(ThemeContext);
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

const LanguageChangeBtnDesktop = () => {
  const router = useRouter();
  const routerPushWithLocale = useCallback(
    (locale: string) => {
      router.push(router.asPath, router.asPath, { locale });
    },
    [router]
  );
  return (
    <div className="dropdown justify-center">
      <label tabIndex={0} className="btn m-1">
        <Languages />
      </label>
      <ul
        tabIndex={0}
        className="dropdown-content menu p-2 bg-base-100 rounded-box w-52"
      >
        <li>
          <button onClick={() => routerPushWithLocale("en-US")}>English</button>
        </li>
        <li>
          <button onClick={() => routerPushWithLocale("zh-CN")}>中文</button>
        </li>
      </ul>
    </div>
  );
};

const LanguageChangeBtnMobile = () => {
  const router = useRouter();
  const routerPushWithLocale = useCallback(
    (locale: string) => {
      router.push(router.pathname, router.pathname, { locale });
    },
    [router]
  );
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="flex flex-col w-full bg-transparent active:text-inherit">
      <div className="flex" onClick={()=>{setShowMenu((sm)=>!sm)}}>
        <Languages />
        {showMenu ? <ChevronUp /> : <ChevronDown/> }
      </div>
      {showMenu && (
        <ul className="space-y-3 text-secondary">
          <li onClick={() => routerPushWithLocale("en-US")}>Enlish</li>
          <li onClick={() => routerPushWithLocale("zh-CN")}>中文</li>
        </ul>
      )}
    </div>
  );
};

const NavBar = () => {
  //data
  const menuItems = [
    {
      i18nID: "navbar.home",
      link: "/",
    },
    {
      i18nID: "navbar.blog",
      link: "/blog",
    },
    {
      i18nID: "navbar.apps",
      link: "/apps",
    },
    {
      i18nID: "navbar.open-source",
      link: "/open-source",
    },
    {
      i18nID: "navbar.music",
      link: "/music",
    },
  ];
  //hooks
  const [showMenu, setShowMenu] = useState(false);
  return (
    <div className="navbar bg-base-100 bg-opacity-30 px-[5%] py-6 fixed top-0 w-screen z-50">
      <div className="navbar-start">
        <Link href="/">
          <strong className="text-2xl font-black">RUTA</strong>
        </Link>
      </div>
      <div className="navbar-end ">
        {/* desktop: navbar-end */}
        <div className="flex items-center invisible md:visible">
          <ul className="menu menu-horizontal">
            {menuItems.map((item) => (
              <li key={item.i18nID}>
                <Link href={item.link}>
                  <span>
                    <FormattedMessage id={item.i18nID} />
                  </span>
                </Link>
              </li>
            ))}
          </ul>
          <div className="ml-3">
            <LanguageChangeBtnDesktop />
          </div>
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
                  <li className="flex items-center" key={item.i18nID}>
                    <Link href={item.link} className="w-full">
                      <div className="w-full flex justify-center">
                        <FormattedMessage id={item.i18nID} />
                      </div>
                    </Link>
                  </li>
                ))}
                <li className="flex items-center justify-center text-white">
                  <LanguageChangeBtnMobile />
                </li>
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
