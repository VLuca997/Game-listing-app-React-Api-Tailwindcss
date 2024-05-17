import React, { useEffect, useState } from 'react';
import GenreList from '../../Components/GenreList';
import Banner from '../../Components/Banner';
import TreadingGame from '../../Components/TreadingGame.jsx';
import GamesApi from '../../Api/GamesApi';

export default function Home() {
    const [allGameList, setAllGameList] = useState([]);

    useEffect(() => {
        getAllGamesList();
    }, []);

    const getAllGamesList = async () => {
        try {
            const response = await GamesApi.getAllGames();
            setAllGameList(response.data.results);
        } catch (error) {
            console.error('Error fetching all games list:', error);
        }
    };

    return (
        <div className="grid grid-cols-4">
            <div className='hidden md:block'>
                <GenreList />
            </div>
            <div className='col-span-4 md:col-span-3'>
                {allGameList.length > 0 ? (
                    <div className='p-5'>
                        <Banner gameBanner={allGameList[0]} />
                        <TreadingGame gameList={allGameList} />
                    </div>
                ) : null}
            </div>
        </div>
    );
}
