import Head from "next/head";
import Image from "next/image";
import { useEffect, useState } from "react";

import Footer from "../components/Footer";
import HeaderC from "../components/Header";

import {
  Amplify,
  API,
  graphqlOperation,
  Auth,
  withSSRContext,
} from "aws-amplify";
import * as queries from "../src/graphql/queries";
import awsExports from "../src/aws-exports";
import { getPublicFile } from "../src/utils/storage";
Amplify.configure({ ...awsExports });

async function getTechStacks() {
  return await API.graphql(graphqlOperation(queries.listTechStacks)).then(
    (res) => {
      let items = res.data.listTechStacks.items;
      // console.log(items);
      items = Promise.all(
        items.map(async (item) => {
          const newItem = { ...item };
          newItem.logoURL = (await getPublicFile(item.logo_s3_path));
          return newItem;
        })
      );
      return items;
    }
  );
}

function Home() {
  const [techStacks, setTechStacks] = useState(null);

  useEffect(() => {
    getTechStacks().then(setTechStacks);
  }, []);

  return (
    <div>
      <HeaderC />
      {/*Introduction*/}
      <div className="flex flex-wrap justify-center flex-col items-center w-[85vw] mx-auto md:mx-0 h-[95vh] space-y-16 md:flex-row md:justify-around md:relative">
        <div className="space-y-7 md:w-1/2 md:space-y-10">
          <p className="text-gray-500">
            Hi, I am
            <span className="text-blue-400 font-bold text-xl mx-2">
              Weizhi Tang
            </span>
            also call me
          </p>
          <h1 className="z-10 text-4xl bg-white text-black font-black md:text-6xl mix-blend-lighten">
            Ruta Tang
          </h1>
          {/* make text with video background */}
          <div className="relative h-80 md:h-56 w-full">
            <video
              className="absolute object-cover left-5 top-5 w-[90%] h-[90%]"
              autoPlay
              loop
              src="/videos/text_bg_dark_sea.mp4"
            ></video>
            <h2 className="mix-blend-lighten bg-white w-full h-full absolute text-2xl font-semibold text-slate-600 leading-10 md:leading-[3.5rem] md:text-3xl">
              A Frontend and Blockchain Developer | Web 3.0 | DAO | Data Analyst
              | Artificial Intelligence Learner | Finance and Quant Lover | Song
              Writer & Producer
            </h2>
          </div>
        </div>
        <div>
          <img
            onClick={() => {}}
            src="/svgs/rabbit.svg"
            className="h-40 md:h-52 cursor-pointer"
            alt=""
          />
        </div>
      </div>
      {/*About Me*/}
      <div className="w-[85vw] mx-auto">
        <h1 className="text-2xl font-bold">ABOUT ME</h1>
        <div className="flex flex-col mt-10 items-center md:flex-row  md:justify-between">
          <div className="flex-grow-0 flex-shrink-0 w-[200px] h-[200px] relative">
            <div className="w-full h-full border-4 border-sky-400 rounded-lg absolute"></div>
            <img
              className="absolute md:top-5 md:left-5"
              src="/images/profile.png"
              alt=""
            />
          </div>
          <div className="mt-10 md:mt-0 flex-initial md:w-8/12">
            <p className="text-gray-500 leading-10">
              {" "}
              &nbsp;&nbsp;&nbsp;&nbsp; I am now pursuing my Master's Degree on
              Data Science and Machine Learning at the National University of
              Singapore. I spend most of time on Machine Learning, Deep
              Learning, Software Development, Finance, and definitely
              Blockchain. If you are also interested in these kinds of topic,
              please give us a chance to have a talk and keep in touch. My
              contact info is listed at the bottom left of the web. Either
              Github or Wechat is ok. Just click it and contact me. I am waiting
              for your message!
            </p>
          </div>
        </div>
      </div>
      {/*Education Experience*/}
      <div className="w-[85vw] mx-auto mt-[15vh] md:mt-[30vh]">
        <h1 className="text-2xl font-bold">EDUCATION EXPERIENCE</h1>
        <div className="flex md:flex-row flex-col items-center md: justify-between mt-16">
          <div className="space-y-3 w-[200px] h-[200px] flex flex-col items-center order-2 md:order-1 mt-8 md:mt-0">
            <img className="w-[100px]" src="/images/brain.png" alt="" />
            <p className="text-xl text-black ">Machinea Learning</p>
            <p>( Master's Degree )</p>
            <p>2021/08 ~ 2022/08</p>
          </div>
          <div className="md:w-8/12 order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl text-black text-center md:text-left">
              National University of Singapore
            </h1>
            <p className="mt-5 text-center md:text-left">
              I am pursuing my Master' Degree on Data Science and Machine
              Learning here.
            </p>
          </div>
        </div>
        <div className="flex md:flex-row flex-col items-center md: justify-between mt-16">
          <div className="space-y-3 w-[200px] h-[200px] flex flex-col items-center order-2 md:order-1 mt-8 md:mt-0">
            <div className="flex flex-row justify-around">
              <img className="w-[80px]" src="/images/atomic.png" alt="" />
              <img className="w-[80px]" src="/images/emotion.png" alt="" />
            </div>
            <p className="text-xl text-black">Computer Science</p>
            <p className="text-xl text-black">Psychology</p>
            <p>( Bachelor's Degree )</p>
            <p>2018/08 ~ 2020/08</p>
          </div>
          <div className="md:w-8/12 order-1 md:order-2">
            <h1 className="text-2xl md:text-3xl text-black text-center md:text-left">
              University of Colorado At Boulder
            </h1>
            <p className="mt-5">
              I took my undergraduate program here. I was majoring in both
              Computer Science and Psychology. As you can see here, it might be
              weird that duration was only two years. The reason is that I took
              two academic year, totally six semesters, to accomplish my
              undergraduate program.
            </p>
          </div>
        </div>
      </div>
      {/*Tech Stack*/}
      <div className="w-[85vw] mx-auto mt-[15vh] md:mt-[30vh]">
        <h1 className="text-2xl font-bold">TECH STACK</h1>
        <div className="flex flex-row flex-wrap mt-10 gap-y-10 items-center justify-center md:justify-start">
          {techStacks?.map((el, idx) => (
            <div
              key={`ts-${idx}`}
              className="flex flex-col items-center w-[120px] h-[120px] gap-3"
            >
              <Image width="80px" height="80px" src={el.logoURL} alt="" />
              <p>{el.name}</p>
            </div>
          ))}
        </div>
      </div>
      {/*Footer*/}
      <Footer mt="10rem" />
    </div>
  );
}

export default Home;
