import React, { useEffect, useState } from 'react';
import GamesApi from '../Api/GamesApi';

function GenreList({genreId, selectedGenresName}) {
    const [genreList, setGenreList] = useState([]);
    const [activeIndex, setActiveIndex] = useState(0);

    useEffect(() => {
        getGenreList();
    }, []);

    const getGenreList = async () => {
        try {
            const response = await GamesApi.getGenreList();
            setGenreList(response.data.results);
        } catch (error) {
            console.error('Errore di caricamento per la Lista dei Generi:', error);
        }
    };

    return (
        <>
           <div className=''>
            <h2 className='text-[30px] font-bold dark:text-white'>Genre</h2>
                {genreList.map((item, index) => (
                    <div
                        key={item.id}
                        onClick={() => {
                            setActiveIndex(index);genreId(item.id);selectedGenresName(item.name);
                        }}
                        className={`flex gap-2 items-center mb-2 cursor-pointer p-2 rounded-lg group
                            hover:bg-gray-300 dark:hover:bg-gray-700 border shadow shadow-slate-700 border-gray-300 dark:border-gray-700 
                            ${activeIndex === index ? 'bg-gray-300 dark:bg-gray-600' : null}`}
                    >
                        <img
                            src={item.image_background}
                            className={`w-[40px] h-[40px] object-cover rounded-lg 
                            ease-out transition-all duration-300
                            ${activeIndex === index ? 'scale-125' : null}`}
                        />
                        <h3
                            className={`dark:text-white text-[18px] px-2
                            ${activeIndex === index ? 'font-bold' : null}`}
                        >
                            {item.name}
                        </h3>
                    </div>
                ))}
           </div>
        </>
    );
}

export default GenreList;
