import Sidebar from "./sidebar"
import Image from "next/image"
import { useContext,createContext } from "react"
import hamburger from "../public/hamburger.png"
import search from "../public/search.png"
import notif from "../public/notification-bell.png"
import create from "../public/plus.png"
import profile from "../public/user.png"
import { GlobalContext } from "@/contexts/GlobalContext"
export const ShowContext = createContext();
function Navbar(){
  const {isShown,setIsShown} = useContext(GlobalContext)
    function handleClick(){
        setIsShown(prev => !prev)
    }
    return(
      <div className="flex ">
      <div className="w-screen h-14 top-0 sticky flex flex-row items-center justify-between z-10">
        <div className="flex flex-row items-center">
        <Image className={`w-5 sm:w-8 md:w-9  z-10 mx-4 relative cursor-pointer hover:scale-125`} onClick={handleClick} src={hamburger}></Image>
        <h1 className="text-md sm:text-xl md:text-2xl   text-slate-50">🎦NewTube</h1>
        </div>
        <div className="flex flex-row">
        <input className="px-3 py-1 w-20 focus:outline-none xl:w-[42rem] lg:w-96 md:w-80 sm:w-60 placeholder-gray-500 font-semibold rounded-l-2xl" placeholder="Search" autocomplete="off" type="text"></input>
        <Image className="w-8 rounded-r-2xl self-center cursor-pointer" src={search}></Image>
        </div>
        <div className="flex flex-row">
          <Image className="w-4 sm:w-6 md:w-8 cursor-pointer hover:scale-125 " src={notif}></Image>
          <Image className="w-4 sm:w-6 md:w-8 cursor-pointer hover:scale-125 ml-5" src={create}></Image>
          <Image className="w-4 sm:w-6 md:w-8 cursor-pointer hover:scale-125 mx-5" src={profile}></Image>
        </div>
    </div>
        <div className="">
          {isShown && <Sidebar/>}
        </div>
      </div>
  )
  }
  
  export default Navbar