import React, { useEffect } from 'react';

export default function Banner({ gameBanner }) {
    useEffect(() => {
        console.log("banner ", gameBanner);
    }, [gameBanner]);


  return (
    <div className='flex justify-center mb-5'>

    <div className='relative'>
        <div className='absolute bottom-0 p-5 bg-gradient-to-t from-slate-900 to-transparent w-full '>
            <h2 className='text-[24px] text-white font-bold px-3 p-1 rounded-full mb-2'>{gameBanner.name}</h2>
            <button className=' bg-blue-700 text-white px-2 p-2 rounded-full'>Get now</button>
        </div>
        <img src={gameBanner.background_image} 
            className='md:h-[420px] w-full  rounded-xl dark:border-white dark:border'
            />
    </div>
            </div>
  )
}
