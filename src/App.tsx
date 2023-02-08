import React from 'react';
import './App.css';
import { BrowserRouter } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { FavoriteProvider } from './context/FavoriteContext';
import { usePokemon } from './hooks/usePokemon';
import { AppRouter } from './router/AppRouter';

function App() {
  const {pokemons}= usePokemon();
  return (
    <FavoriteProvider value={{pokemons}}>    
      <BrowserRouter>
        <Navbar/>
        <AppRouter />
      </BrowserRouter>   
    </FavoriteProvider>    
  );
}

export default App;
