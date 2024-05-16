import React, { useEffect } from 'react';
import GlobalApi from './../Api/GlobalApi.jsx';



function GenreList() {
    useEffect(() =>{
         getGenreList();

    })
    const getGenreList = () =>{
        GlobalApi.getGenreList.then((response)=> {
                console.log(response.data.results)
        }) 
    }

  return (
    <div>GenreList</div>
  )
}

export default GenreList
