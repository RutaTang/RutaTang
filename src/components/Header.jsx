import {useState} from 'react'
import {Link} from 'react-router-dom'
import {BsList} from 'react-icons/bs'
import {AiOutlineClose} from 'react-icons/ai'
import {useSpring,animated} from '@react-spring/web'

const Links = ()=>{
  return(
    <>
      <Link to="/">HOME</Link>
      <Link to="/blog">BLOG</Link>
      <Link to="/project">PROJECT</Link>
      <Link to="/work-experience">WORK EXPERIENCE</Link>
      <Link to="/contact-me">CONTACT ME</Link>
      </>
  )
}

const Header = ()=> {
  const [isOpen, setIsOpen] = useState(false)
  const menuOpacitySpring = useSpring({opacity: isOpen ? 1 : 0})
  return(
    <div className="flex justify-between items-center mx-5 mt-5">
      {/*Logo*/}
      <img src="" alt="" />
      {/*Nav-desktop*/}
      <div className="text-black font-semibold space-x-10 hidden md:block">
        <Links />
      </div>
      {/*Nav-mobile*/}
      <button className='md:hidden'>
        {!isOpen && <BsList className="text-black" onClick={()=>{setIsOpen(true)}}/>}
        {/*Menu*/}
        { isOpen &&
          <animated.div style={menuOpacitySpring} className="w-screen h-screen absolute left-0 top-0 bg-white">
            <div className='flex flex-col'>
              <AiOutlineClose className="self-end mr-5 mt-5" onClick={()=>{setIsOpen(false)}}/>
              <div className='flex flex-col space-y-10 mt-5'>
                <Links />
              </div>
            </div>
          </animated.div>
        }
      </button>
    </div>
  )
}


export default Header;
