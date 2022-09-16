import { useContext, useState } from "react";
import Image from "next/image";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { ThemeContext } from "../components/ThemeProvider";

enum Tab {
  Interests,
  Education,
  Concat,
}
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [tab, setTab] = useState(Tab.Interests);
  return (
    <div
      style={{
        backgroundImage:
          theme === "light"
            ? "url('/Moon-Light.svg')"
            : "url('/Moon-Dark.svg')",
      }}
      className="min-h-screen min-w-screen pt-24"
    >
      <div className="w-full mt-[10%]">
        <h1 className="text-center text-6xl font-black gradient">
          Welcome to Ruta&apos;s Web
        </h1>
        <div className="w-full flex-col mt-10 space-y-10">
          <div className="w-[80%] mx-auto text-left md:h-[20vh] h-[40vh]">
            {tab === Tab.Interests && (
              /* Interests content */
              <div className="text-center">
                <span className="text-2xl">
                  I am a Full &apos;Interests&apos; (not only stack) Developer
                  across a number of fields, including{" "}
                  <strong>Data Science</strong>, <strong>Web Dev</strong>,{" "}
                  <strong>Native App Dev</strong>,{" "}
                  <strong>Cloud Computing</strong>,
                  <strong> Blockchain Dev</strong>,{" "}
                  <strong>Audio Programming</strong>,{" "}
                  <strong>Cognitive Science</strong>,{" "}
                  <strong>Psychology</strong>,<strong> Finance</strong>, and{" "}
                  <strong>Economics</strong>. I am still in the progress of
                  digging into them and learning and exploring more fields.
                </span>
              </div>
            )}
            {tab === Tab.Education && (
              /*Education content*/
              <div className="flex justify-center items-center space-x-10">
                <div>
                  <Image height={120} width={120} src="/CUB.png" alt="" />
                </div>
                <div>
                  <Image
                    height={120}
                    width={95}
                    className="w-[6.5rem]"
                    src="/NUS.png"
                    alt=""
                  />
                </div>
              </div>
            )}
            {tab === Tab.Concat && (
              /*Concat content*/
              <div className="flex justify-center items-center space-x-10 flex-wrap h-full">
                <a
                  href="https://github.com/RutaTang"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Github size={40} />
                </a>
                <a
                  href="https://www.linkedin.com/in/weizhi-tang-3a5137191/"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Linkedin size={40} />
                </a>
                <a
                  href="https://twitter.com/TangRuta"
                  target="_blank"
                  rel="noreferrer"
                >
                  <Twitter size={40} />
                </a>
                <a href="mailto:rutatangpersonal@gmail.com">
                  <Mail size={40} />
                </a>
              </div>
            )}
          </div>
          <div className="tabs space-x-5 justify-center">
            <a
              onClick={() => setTab(Tab.Interests)}
              className={
                tab === Tab.Interests ? "tab tab-bordered tab-active" : "tab"
              }
            >
              Interests
            </a>
            <a
              onClick={() => setTab(Tab.Education)}
              className={
                tab === Tab.Education ? "tab tab-bordered tab-active" : "tab"
              }
            >
              Education
            </a>
            <a
              onClick={() => setTab(Tab.Concat)}
              className={
                tab === Tab.Concat ? "tab tab-bordered tab-active" : "tab"
              }
            >
              Concat
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
