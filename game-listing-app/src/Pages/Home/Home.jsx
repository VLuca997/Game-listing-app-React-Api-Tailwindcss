import React, { useEffect, useState } from 'react';
import GenreList from '../../Components/GenreList';
import Banner from '../../Components/Banner';
import TreadingGame from '../../Components/TreadingGame.jsx';
import GamesApi from '../../Api/GamesApi';
import GamesByGenresId from '../../Components/GamesByGenresId.jsx'; // GamesByGenresId.jsx

export default function Home() {
    const [allGameList, setAllGameList] = useState([]);
    const [gameListByGenres,setGameListByGenres] = useState([]) // GamesByGenresId.jsx
    const [selectedGenresName,setSelectedGenresName] = useState('Action')

    useEffect(() => {
        getAllGamesList();
        getGameListByGenresId();
        
    }, []);

    const getAllGamesList = async () => {
        try {
            const response = await GamesApi.getAllGames();
            setAllGameList(response.data.results);
            setGameListByGenres(response.data.results);// GamesByGenresId.jsx
        } catch (error) {
            console.error('Errore nel caricamento della Lista Giochi: ', error);
        }
    };

    const getGameListByGenresId = (id) =>{
        console.log("Id Genere: " , id)
        GamesApi.getGameListByGenreId(id).then((response) => {
            console.log('Lista giochi per Genere: ',response.data.results)
            setGameListByGenres(response.data.results)
        })
    }

    return (
        <div className="grid grid-cols-4 p-5">
            <div className='hidden md:block'>
                <GenreList genreId={(genreId)=> getGameListByGenresId(genreId) } selectedGenresName={(name)=>setSelectedGenresName(name)}/>
            </div>
            <div className='col-span-4 md:col-span-3'>
                {allGameList.length > 0 && gameListByGenres.length > 0 ? 
                    <div className='p-10'>
                        <Banner gameBanner={allGameList[0]} />
                        <TreadingGame gameList={allGameList} />
                        <GamesByGenresId gameList={gameListByGenres}
                        selectedGenresName={selectedGenresName}/>
                    </div>
                 : null}
            </div>
        </div>
    );
}
