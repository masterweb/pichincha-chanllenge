import React, { useEffect, useState } from 'react'
import { useGlocalPokemon } from '../context/FavoriteContext';
import { Pokemon } from '../interfaces/pokemons';
import { delelePokemonById, fetchAllPokemons, fetchPokemon } from '../helpers/fetchPokemons';
import { IStateForm } from '../interfaces/stateForm';

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
        <button className='btn-min' aria-label="delete-btn" onClick={() =>deletePokemon(id)}>Delete</button>
      </div>
    </React.Fragment>
    
  )
}
