import { useContext } from "react";
import Image from "next/image";
import hamburger from "../public/hamburger.png"
import { GlobalContext } from "@/contexts/GlobalContext";
function Sidebar(){
    const {isShown,setIsShown} = useContext(GlobalContext)
    function handleClick(){
        setIsShown(prev => !prev)
    }
    console.log(isShown)
    return(
        <>
        <div id="style-5" className="overflow-x-hidden overflow-y-scroll z-20 top-0 w-40 md:w-52 sm:w-44 slide fixed bg-neutral-800 h-screen">
        <Image className="w-5 sm:w-8 md:w-9 mx-4 my-2 cursor-pointer hover:scale-125" onClick={handleClick} src={hamburger}></Image>
        <div className="p-6 pt-1">
            <h1 className="text-sm md:text-md lg:text-lg  text-slate-50 cursor-pointer mb-8">🏠 Home</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🍆 Subscriptions</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🔥 Trending</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">👍🏿 Liked Videos</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🕒 Watch Later</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🎵 Music</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">📚 Learning</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🎬 Movies</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🎮 Gaming</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">📰 News</h1>
            <h1 className="text-sm md:text-md lg:text-lg text-slate-50 cursor-pointer mb-8">🏆 Sports</h1>
        </div>
        </div>
        </>
    )
}
export default Sidebar;