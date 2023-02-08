import React, { useEffect, useState } from 'react'
import { useGlocalPokemon } from '../context/FavoriteContext';
import { Pokemon } from '../interfaces/pokemons';
import { delelePokemonById, fetchAllPokemons } from '../helpers/fetchPokemons';

interface IProps {
    key?: number;
    id: number;    
    hp: number;
    attack: number
    deffense: number; 
    setPokemons : React.Dispatch<React.SetStateAction<any>>;   
}

export const PokemonDesc:React.FC<IProps> = ({id, hp, attack, deffense, setPokemons }) => {
  const { pokemons } = useGlocalPokemon();
  const [favoritesPoke, setFavoritesPoke] = useState<Pokemon []>([]);

  useEffect(() => {
    const favorites = localStorage.getItem('favorites');
    if(favorites !== null){
      setFavoritesPoke(JSON.parse(favorites));
    }

  },[]);

  // const addFavorites = (id: number) => {
  //   const readValue = localStorage.getItem('favorites');

  //   if(readValue === null){
  //     const favPokemons = pokemons.filter(poke => poke.id === id);
  //     console.log(favPokemons);
  //     localStorage.setItem('favorites', JSON.stringify(favPokemons));
  //   }else{
  //     const storagePoke = JSON.parse(readValue);
  //     const favPokemons = pokemons.filter(poke => poke.id === id);
  //     let objPoke:MyObj = { id: favPokemons[0].id, img: favPokemons[0].image, name: favPokemons[0].name }
  //     storagePoke.push(objPoke);
  //     localStorage.setItem('favorites', JSON.stringify(storagePoke));
  //   }
    
  // }

  const deletePokemon = (id:number):void => {
    delelePokemonById(id)
    .then(response => {
      console.log('Pokemon borrado');
      fetchAllPokemons().then(pokemons => setPokemons(pokemons))
    })
    
  }

  return (
    <React.Fragment>
      <div className="modal-update">
        <h4>Update pokemon</h4>
      </div>
      <div className='desc'>
        <h3>Stat</h3>
        <p>
          <b>
            HP: {hp}
          </b>
        </p>
        <p>
          <b>
            Deffense: {deffense}
          </b>
        </p>
        <p>
          <b>
            Attack: {attack}
          </b>
        </p>
        <button aria-label="delete-btn" onClick={() =>deletePokemon(id)}>Delete Pokemon</button>
      </div>
    </React.Fragment>
    
  )
}
