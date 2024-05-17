import React, { useEffect, useState, useContext } from 'react'
import { ThemeContext } from '../../Context/ThemeContext';
import { HiBookmark } from "react-icons/hi";
import { HiMagnifyingGlass } from "react-icons/hi2";
import { FaMoon } from "react-icons/fa";
import { IoSunnyOutline } from "react-icons/io5";
import { DiGithubBadge } from "react-icons/di";
export default function Header() {
    const [toggle, setToggle] = useState(false);
    const {theme,setTheme} = useContext(ThemeContext)

    useEffect(()=> {
    },[])
  return (
    <div className='mx-5 flex items-center'>
        <a href="https://github.com/VLuca997?tab=repositories">
            <div className="dark:text-white ">
                <DiGithubBadge size="50px" />
            </div>
        </a>

        <div className="flex bg-slate-200  p-2 w-full items-center mx-5 my-3 rounded-full">
            <HiMagnifyingGlass />
            <input type="text" placeholder='Search Games...' className='bg-transparent outline-none ' />
        </div>
        <div>
            {theme == 'light'  ? 
                <FaMoon className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer'
                        onClick={()=>{setTheme('dark');localStorage.setItem('theme','dark')}}
                /> 
                    :
                <IoSunnyOutline className='text-[35px] bg-slate-200 text-black rounded-full p-1 cursor-pointer'
                                onClick={()=>{setTheme('light');localStorage.setItem('theme','light')}}
                />
            }
        
        </div>

    </div>
  )
}
