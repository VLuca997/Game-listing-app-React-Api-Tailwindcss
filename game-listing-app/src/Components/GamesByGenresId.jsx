import React, { useEffect } from 'react'
import '../App.css'

export default function GamesByGenresId({ gameList, selectedGenresName }) {
  useEffect(() => {
    console.log("GamesByGenresId: ", gameList)
  }, [])

  return (
    <div className='h-[fit-content] '>
      <h2 className='font-bold text-[30px] dark:text-white my-5'>{selectedGenresName }</h2>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 '>
        {gameList.map((item) => (
          <div className='bg-[#76a8f75e] p-3 rounded-lg hover:scale-105 transition-all duration-300 cursor-pointer ease-in-out'>
            <img src={item.background_image} className='w-full max-h-[200px] rounded-xl object-cover' />
            <div className=''>
              <h2 className='text-[20px] font-bold dark:text-white pt-2'>
                {item.name}
                <span className='rounded-md ml-3 text-[15px] p-1 bg-green-700 text-yellow-300 font-medium'>
                  {item.metacritic}
                </span>
              </h2>

              {/* accesso a genres */}
              <div className='text-gray-500 dark:text-gray-300'>
                Genres:{" "}
                {item.genres.map((genre) => (
                  <span key={genre.id} className='mr-2'>
                    {genre.name}
                  </span>
                ))}
              </div>

              {/* accesso a platforms */}
              <div className='text-gray-500 dark:text-gray-300'>
                Platforms:{" "}
                {item.platforms.map((platform) => (
                  <span key={platform.platform.id} className='mr-2'>
                    {platform.platform.name}
                  </span>
                ))}
              </div>

              <h2 className='text-gray-500 dark:text-gray-300'>{item.rating} --- {item.reviews_count} --- {item.suggestions_count}</h2>
              <h2>{item.name}</h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
