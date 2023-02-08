import { useEffect, useState } from 'react';
import { Pokemon } from '../interfaces/pokemons';
import { fetchAllPokemons } from '../helpers/fetchPokemons';

export const usePokemon = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [pokemons, setPokemons] = useState<Pokemon []>([]);

    useEffect(() => {
      fetchAllPokemons()
      .then(pokemons => {
        setIsLoading(false);
        setPokemons(pokemons);
      })
    }, [])
    


    return {
        isLoading,
        pokemons
    }
}
