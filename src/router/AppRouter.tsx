import React from 'react'
import { Route, Routes } from 'react-router'
import { PokemonList } from '../components/PokemonList';
import { FavoritesPokemon } from '../views/FavoritesPokemon';

export const AppRouter = () => {
  return (     
    <Routes>
        <Route path='/' element={<PokemonList />}/>
        <Route path='/favorites' element={<FavoritesPokemon />}/>
    </Routes>
  )
}
