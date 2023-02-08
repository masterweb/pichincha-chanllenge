import React, {useEffect, useState} from 'react'
import { useGlocalPokemon } from '../context/FavoriteContext';
import { PokemonCard } from '../components/PokemonCard';
import { Pokemon } from '../interfaces/pokemons';

export const FavoritesPokemon = () => {
    const [favoritesPoke, setFavoritesPoke] = useState<Pokemon []>([]);

    useEffect(() => {
        const favorites = localStorage.getItem('favorites');
        if(favorites !== null){
            setFavoritesPoke(JSON.parse(favorites));
        }

    },[]);

    return (
        <React.Fragment>
            <div className="container">
               
                <div className="all-container">
                    {
                    // favoritesPoke?.map((pokemon, index) => (
                    //     <PokemonCard key={index} id={favoritesPoke[index].id} name={favoritesPoke[index].name} image={favoritesPoke[index].image} />
                    // ))
                    }
                    
                </div>
            </div>            
        </React.Fragment>
    )
}
