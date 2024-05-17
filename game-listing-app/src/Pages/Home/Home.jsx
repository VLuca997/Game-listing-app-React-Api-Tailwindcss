import React, { useEffect, useState } from 'react';
import GenreList from '../../Components/GenreList';
import Banner from '../../Components/Banner';
import TreadingGame from '../../Components/TreadingGame.jsx';
import GamesApi from '../../Api/GamesApi';
import GamesByGenresId from '../../Components/GamesByGenresId.jsx'; // GamesByGenresId.jsx

export default function Home() {
    const [allGameList, setAllGameList] = useState([]);
    const [gameListByGenres,setGameListByGenres] = useState([]) // GamesByGenresId.jsx

    useEffect(() => {
        getAllGamesList();
        getGameListByGenresId()
    }, []);

    const getAllGamesList = async () => {
        try {
            const response = await GamesApi.getAllGames();
            setAllGameList(response.data.results);
            setGameListByGenres(response.data.results);// GamesByGenresId.jsx
        } catch (error) {
            console.error('Error fetching all games list:', error);
        }
    };

    const getGameListByGenresId = (id) =>{
        GamesApi.getGameListByGenreId(4).then((response) => {
            console.log('porcodedddiiiooooo',response.data.results)
        })
    }

    return (
        <div className="grid grid-cols-4">
            <div className='hidden md:block'>
                <GenreList />
            </div>
            <div className='col-span-4 md:col-span-3'>
                {allGameList.length > 0 && gameListByGenres.length > 0 ? 
                    <div className='p-5'>
                        <Banner gameBanner={allGameList[0]} />
                        <TreadingGame gameList={allGameList} />
                        <GamesByGenresId gameList={gameListByGenres}/>
                    </div>
                 : null}
            </div>
        </div>
    );
}
