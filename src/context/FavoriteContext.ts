import React, { useContext } from 'react';
import { Pokemon } from '../interfaces/pokemons';

type Favorites = {
    pokemons: Pokemon[]
}

export const FavoriteContext = React.createContext<Favorites>({
    pokemons: []
})

export const FavoriteProvider = FavoriteContext.Provider;
export const useGlocalPokemon = () => useContext(FavoriteContext);

