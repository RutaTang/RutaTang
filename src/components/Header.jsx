import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsList} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {useSpring,animated,config, useSpringRef, useChain} from '@react-spring/web'


const LINKS = [
  {path:"/",name:"HOME"},
  {path:"/blog",name:"BLOG"},
  {path:"/project",name:"PROJECT"},
  {path:"/work-experience",name:"WORK EXPERIENCE"},
  {path:"/contact-me",name:"CONTACT ME"},
]

const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false)
  const [links, _] = useState(LINKS)
  const menuOpacitySprintRef = useSpringRef()
  const menuOpacitySpring = useSpring({ref:menuOpacitySprintRef,to:{opacity: isOpen ? 1 : 0, display:isOpen ? "block" : "none",}})
  const trailSpringRef = useSpringRef()
  const trailSpring = links.map((el,idx,arr)=>{
    return useSpring({
      ref:trailSpringRef,
      to:{
        opacity: isOpen ? 1 : 0,
      },
      delay: isOpen ? idx*50: (arr.length-idx)*20,
    })
  }) 
  useChain(isOpen ? [menuOpacitySprintRef,trailSpringRef] : [trailSpringRef,menuOpacitySprintRef],isOpen? [0,0]: [0,0.25])
  return(
    <div className="flex justify-between items-center px-10 mt-5">
      {/*Logo*/}
      {/*<img src="" alt="" />*/}
      <h1 className='font-bold md:font-black text-xl md:text-2xl'>RUTA</h1>
      {/*Nav-desktop*/}
      <div className="text-black font-semibold space-x-10 hidden md:block">
        {links.map(e=>
          <Link to={e.path} key={"nav"+e.name}>{e.name}</Link>
        )}
      </div>
      {/*Nav-mobile*/}
      <button className='md:hidden'>
        {!isOpen && <BsList className="text-black text-xl" onClick={()=>{setIsOpen(true)}}/>}
        <animated.div style={menuOpacitySpring} className="w-screen h-screen absolute left-0 top-0 bg-white z-10">
          <div className='flex flex-col'>
            <AiOutlineClose className="self-end mr-10 mt-5 text-xl" onClick={()=>{setIsOpen(false)}}/>
            <div className='flex flex-col space-y-10 mt-5'>
              {
              trailSpring.map((style, index) => (
                <animated.div key={index} style={style}>
                  <Link to={links[index].path}>{links[index].name}</Link>
                </animated.div>
              ))
              }
            </div>
          </div>
        </animated.div>
      </button>
    </div>
  )
}


export default Header;
