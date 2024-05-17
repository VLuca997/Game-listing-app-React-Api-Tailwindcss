import React, { useEffect } from 'react';

export default function TreadingGame({ gameList }) {
    useEffect(() => {
        console.log("game List ", gameList);
    }, [gameList]);

    return (
        <div className='md:block hidden'>
            <h2 className='font-bold text-[30px] dark:text-white py-3'>GIOCHI DEL MOMENTO: </h2>
            <div className='md:grid md:grid-cols-3 lg:grid-cols-4 gap-4'>
                {gameList.map((item, index) => index < 4 && (
                    <div key={item.id} className='rounded-lg bg-[#76a8f75e] border-2 border-black dark:border-white 
                    group hover:scale-105 transition-all duration-300 ease-in-out cursor-pointer'>
                        <img src={item.background_image} className='h-[270px] rounded-t-lg object-cover ' />
                        <h2 className='dark:text-white text-[20px] font-bold p-2'>{item.name}</h2>
                    </div>
                ))}
            </div>
        </div>
    );
}
