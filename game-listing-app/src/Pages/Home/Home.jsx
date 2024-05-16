import React from 'react'
import GenreList from '../../Components/GenreList'

export default function Home() {
    return <>
    <div className="grid grid-cols-4">

        <div className='bg-red-600 h-full hidden md:block'>
            <GenreList/>
        </div>
        <div className='col-span-4 md:col-span-3 bg-blue-400'>Catalogo Giochi:</div>
    </div>
    </>

}
