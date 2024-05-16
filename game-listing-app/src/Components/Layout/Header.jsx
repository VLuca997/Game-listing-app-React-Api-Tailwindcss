import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import { HiBookmark } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const {theme,setTheme} = useContext(ThemeContext)

    useEffect(()=> {
        console.log("theme" + theme)
    },[])
  return (
    <div className='mx-5 flex items-center'>

        <div className="dark:bg-slate-800">
            Logo
        </div>

        <div className="flex bg-slate-200  p-2 w-full items-center mx-5 my-3 rounded-full">
            <HiMagnifyingGlass />
            <input type="text" placeholder='Search Games...' className='bg-transparent outline-none ' />
        </div>
        <div>
            {theme == 'ligth'  ? 
                <FaMoon className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer'
                        onClick={()=>setTheme('dark')}
                /> 
                    :
                <IoSunnyOutline className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer'
                                onClick={()=>setTheme('ligth')}
                />
            }
        
        </div>

    </div>
  )
}
