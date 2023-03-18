import Image from "next/image"
import hamburger from "../public/hamburger.png"
import search from "../public/search.png"
import notif from "../public/notification-bell.png"
import create from "../public/plus.png"
import profile from "../public/user.png"
function Navbar(){
    return(
  
      <div className="w-screen h-14 sticky top-0 flex flex-row items-center justify-between bg-">
        <div className="flex flex-row items-center">
        <Image className="w-8 mx-4 cursor-pointer hover:scale-125" src={hamburger}></Image>
        <h1 className="text-2xl text-slate-50">▶️ChutTube</h1>
        </div>
        <div className="flex flex-row">
        <input className="px-3 py-1 w-24 focus:outline-none lg:w-96 md:w-64 sm:40 placeholder-gray-500 font-semibold rounded-l-2xl" placeholder="Search" autocomplete="off" type="text"></input>
        <Image className="w-8 rounded-r-2xl self-center cursor-pointer" src={search}></Image>
        </div>
        <div className="flex flex-row">
          <Image className="w-8 cursor-pointer hover:scale-125 " src={notif}></Image>
          <Image className="w-8 cursor-pointer hover:scale-125 ml-5" src={create}></Image>
          <Image className="w-8 cursor-pointer hover:scale-125 mx-5" src={profile}></Image>
        </div>
    </div>
  )
  }
  export default Navbar