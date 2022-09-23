import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Head from "next/head";
import { Linkedin, Github, Twitter, Mail } from "lucide-react";
import { motion } from "framer-motion";
import { FormattedMessage, useIntl } from "react-intl";

import { ThemeContext } from "../components/ThemeProvider";

enum Tab {
  Interests,
  Education,
  Concat,
}
const Home = () => {
  const { theme } = useContext(ThemeContext);
  const [tab, setTab] = useState(Tab.Interests);
  const intl = useIntl();
  return (
    <div className="h-screen w-screen">
      {/*SEO Title and Description*/}
      <Head>
        <title>{intl.formatMessage({ id: "seo.index.title" })}</title>
        <meta
          name="description"
          content={intl.formatMessage({ id: "seo.index.description" })}
          key="desc"
        />
      </Head>
      {/*Background*/}
      <motion.div
        className="w-screen h-screen -z-50 absolute top-0"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.8 }}
        transition={{
          duration: 2,
        }}
      >
        <Image
          src={theme === "light" ? "/Moon-Light.svg" : "/Moon-Dark.svg"}
          layout="fill"
          objectFit="cover"
          alt="Background"
        />
      </motion.div>
      {/*Content*/}
      <div className="w-screen relative top-[16%] md:top-[25%]">
        <h1 className="text-center text-6xl font-black gradient">
          <FormattedMessage
            id="greeting"
            defaultMessage="Welcom to Ruta's Web"
          />
        </h1>
        <div className="w-full mt-10 space-y-10">
          <div className="w-[80%] mx-auto text-left md:h-[20vh] h-[40vh] overflow-scroll bg-transparent">
            {tab === Tab.Interests && (
              /* Interests content */
              <div className="text-center text-2xl">
                <FormattedMessage id="interests" />
              </div>
            )}
            {tab === Tab.Education && (
              /*Education content*/
              <div className="flex justify-center items-center space-x-10 h-full">
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
              <FormattedMessage
                id="tab.interests"
                defaultMessage={`Interests`}
              />
            </a>
            <a
              onClick={() => setTab(Tab.Education)}
              className={
                tab === Tab.Education ? "tab tab-bordered tab-active" : "tab"
              }
            >
              <FormattedMessage
                id="tab.education"
                defaultMessage={`Interests`}
              />
            </a>
            <a
              onClick={() => setTab(Tab.Concat)}
              className={
                tab === Tab.Concat ? "tab tab-bordered tab-active" : "tab"
              }
            >
              <FormattedMessage id="tab.contact" defaultMessage={`Contact`} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
