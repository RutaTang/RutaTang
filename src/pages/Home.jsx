import Header from '../components/Header'
import Footer from '../components/Footer'
import {useSpring,animated,config} from '@react-spring/web'


const STACK_ICONS_BASE = "/stack_icons/"
const STACK_ICONS_TYPE = ".png"
const STACK_ICONS = [
  {name:"React.js",path:`${STACK_ICONS_BASE}reactjs${STACK_ICONS_TYPE}`},
  {name:"Html 5",path:`${STACK_ICONS_BASE}html5${STACK_ICONS_TYPE}`},
  {name:"CSS 5",path:`${STACK_ICONS_BASE}css3${STACK_ICONS_TYPE}`},
  {name:"JavaScript",path:`${STACK_ICONS_BASE}javascript${STACK_ICONS_TYPE}`},
  {name:"Deno",path:`${STACK_ICONS_BASE}deno${STACK_ICONS_TYPE}`},
  {name:"Python",path:`${STACK_ICONS_BASE}python${STACK_ICONS_TYPE}`},
  {name:"TypeScript",path:`${STACK_ICONS_BASE}typescript${STACK_ICONS_TYPE}`},
  {name:"Babel",path:`${STACK_ICONS_BASE}babel${STACK_ICONS_TYPE}`},
  {name:"Lua",path:`${STACK_ICONS_BASE}lua${STACK_ICONS_TYPE}`},
  {name:"Rust",path:`${STACK_ICONS_BASE}rust${STACK_ICONS_TYPE}`},
  {name:"Vite",path:`${STACK_ICONS_BASE}vite${STACK_ICONS_TYPE}`},
  {name:"Prettier",path:`${STACK_ICONS_BASE}prettier${STACK_ICONS_TYPE}`},
  {name:"NeoVim",path:`${STACK_ICONS_BASE}neovim${STACK_ICONS_TYPE}`},
  {name:"Tailwind CSS",path:`${STACK_ICONS_BASE}tailwind-css${STACK_ICONS_TYPE}`},
  {name:"Post CSS",path:`${STACK_ICONS_BASE}postcss${STACK_ICONS_TYPE}`},
  {name:"Solidity",path:`${STACK_ICONS_BASE}solidity${STACK_ICONS_TYPE}`},
  {name:"Pytorch",path:`${STACK_ICONS_BASE}pytorch${STACK_ICONS_TYPE}`},
]

function Home() {
  const logoRabbitStyle = useSpring({to:{opacity:1,transform:'scale(1)'},from:{opacity:0,transform:'scale(0.3)'},delay:300,config:{...config.wobbly}})
  return (
    <div>
      <Header/>
      {/*Introduction*/}       
      <div className="flex flex-wrap justify-center flex-col items-center w-[85vw] mx-auto md:mx-0 h-[95vh] space-y-16 md:flex-row md:justify-around md:relative">
        <div className='space-y-7 md:w-1/2 md:space-y-10'>
          <p className='text-gray-500'>Hi, I am <span className='text-blue-400 font-bold text-xl'>Weizhi Tang </span>also call me</p>
          <h1 className='text-4xl font-black md:text-6xl'>Ruta Tang</h1>
          <h2 className='text-2xl font-semibold text-slate-600 leading-10 md:leading-[3.5rem] md:text-3xl'>A Software and Blockchain Developer | Data 
            Analyzer | Artificial Intelligence Learner | 
            Finance and Quant Lover | Song Writer</h2>
        </div>
        <div>
          <animated.div style={logoRabbitStyle}>
            <img src="/svgs/rabbit.svg" className='h-40 md:h-52' alt="" />
          </animated.div>
        </div>
      </div>
      {/*About Me*/}
      <div className='w-[85vw] mx-auto'>
        <h1 className='text-2xl font-bold'>ABOUT ME</h1>
        <div className='flex flex-col mt-10 items-center md:flex-row  md:justify-between'>
          <div className='flex-grow-0 flex-shrink-0 w-[200px] h-[200px] relative'>
            <div className='w-full h-full border-4 border-sky-400 rounded-lg absolute'></div>
            <img className='absolute md:top-5 md:left-5'  src="/images/profile.png" alt="" />
          </div>
          <div className='mt-10 md:mt-0 flex-initial md:w-8/12'>
            <p className='text-gray-500 leading-10'> &nbsp;&nbsp;&nbsp;&nbsp; I am now pursuing my Master's Degree on Data Science and Machine Learning at the National University of Singapore. I spend most of time on Machine Learning, Deep Learning, Software Development, Finance, and definitely Blockchain. If you are also interested in these kinds of topic, please give us a chance to have a talk and keep in touch. My contact info is listed at the bottom left of the web. Either Github or Wechat is ok. Just click it and contact me. I am waiting for your message!</p>  
          </div>
        </div>
      </div>
      {/*Education Experience*/}
      <div className='w-[85vw] mx-auto mt-[15vh] md:mt-[30vh]'>
        <h1 className='text-2xl font-bold'>EDUCATION EXPERIENCE</h1>
        <div className='flex md:flex-row flex-col items-center md: justify-between mt-16'>
          <div className='space-y-3 w-[200px] h-[200px] flex flex-col items-center order-2 md:order-1 mt-8 md:mt-0'>
            <img className='w-[100px]' src="/images/brain.png" alt="" />
            <p className='text-xl text-black '>Machinea Learning</p>
            <p>( Master's Degree )</p>
            <p>2021/08 ~ 2022/08</p>
          </div>
          <div className='md:w-8/12 order-1 md:order-2'>
            <h1 className='text-2xl md:text-3xl text-black text-center md:text-left'>National University of Singapore</h1>
            <p className='mt-5 text-center md:text-left'>I am pursuing my Master' Degree on Data Science and Machine Learning here.</p>
          </div>
        </div>
        <div className='flex md:flex-row flex-col items-center md: justify-between mt-16'>
          <div className='space-y-3 w-[200px] h-[200px] flex flex-col items-center order-2 md:order-1 mt-8 md:mt-0'>
            <div className='flex flex-row justify-around'>
              <img className='w-[80px]' src="/images/atomic.png" alt="" />
              <img className='w-[80px]' src="/images/emotion.png" alt="" />
            </div>
            <p className='text-xl text-black'>Computer Science</p>
            <p className='text-xl text-black'>Psychology</p>
            <p>( Bachelor's Degree )</p>
            <p>2018/08 ~ 2020/08</p>
          </div>
          <div className='md:w-8/12 order-1 md:order-2'>
            <h1 className='text-2xl md:text-3xl text-black text-center md:text-left'>University of Colorado At Boulder</h1>
            <p className='mt-5'>I took my undergraduate program here. I was majoring in both Computer Science and Psychology. As you can see here, it might be weird that duration was only two years. The reason is that I took two academic year, totally six semesters, to accomplish my undergraduate program.</p>
          </div>
        </div>
      </div>
      {/*Tech Stack*/}
      <div className='w-[85vw] mx-auto mt-[15vh] md:mt-[30vh]'>
        <h1 className='text-2xl font-bold'>TECH STACK</h1>
        <div className='flex flex-row flex-wrap mt-10 gap-y-10 items-center justify-center md:justify-start'>
          {STACK_ICONS.map(el =>
            <div key={el.name} className='flex flex-col items-center w-[120px] h-[120px] gap-3'>
              <img className='w-[80px] h-[80px]' src={el.path} alt="" />
              <p>{el.name}</p>
            </div>
          )}
        </div>
      </div>
      {/*Footer*/}
      <Footer mt="10rem"/>
    </div>
  )
}

export default Home;
