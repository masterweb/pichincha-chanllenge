import React, { useEffect, useState, ChangeEvent } from 'react'
import { PokemonCard } from './PokemonCard';
import { Pokemon } from '../interfaces/pokemons';
import { usePokemon } from '../hooks/usePokemon';
import { CreatePokemon } from './CreatePokemon';
import { fetchAllPokemons } from '../helpers/fetchPokemons';

interface IProps {}

export const PokemonList:React.FC<IProps> = () => {

  // const {pokemons}= usePokemon();
  const [pokemons, setPokemons] = useState<Pokemon []>([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [search, setSearch] = useState("");
  const [showModal, setShowModal] = useState(false)

  const filteredPokemos = (): Pokemon[] => {
    if (search.length === 0)
      return pokemons.slice(currentPage, currentPage + 10);

    //Search Input with data
    let sr = search.toLocaleLowerCase()
    const filtered = pokemons.filter((poke) => {
      return poke.name.toLowerCase().includes(sr);
    });
    // return filtered;
    return filtered.slice(currentPage, currentPage + 10);
  };

  const onSearchChange = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setCurrentPage(0);
    setSearch(target.value);
  };

  useEffect(() => {
    fetchAllPokemons()
    .then(pokemons => {
      setPokemons(pokemons);
    })
  }, [])
   

  return (
    <React.Fragment>
      {
        showModal &&
        <CreatePokemon showModal={showModal} setShowModal={setShowModal} setPokemons={setPokemons}/>
      }
      
        <div className="container">
          <div className="cont-form">
            <input
              className="input-form m-5"
              type="text"
              placeholder="Type your pokemon"
              value={search}
              onChange={onSearchChange}
            />
            <button onClick={() => setShowModal(!showModal)}>Create Pokemon</button>
          </div>
          
          <div className="all-container">
            {
              filteredPokemos().map((pokemon, index) => (
                <PokemonCard 
                  key={index} 
                  id={pokemon.id}
                  name={pokemon.name}
                  image={pokemon.image}
                  attack={pokemon.attack}
                  defense={pokemon.defense}
                  hp={pokemon.hp} 
                  type={pokemon.type} 
                  idAuthor={pokemon.idAuthor}
                  setPokemons={setPokemons}
                />
              ))
            }
            
          </div>                  
        </div>

    </React.Fragment>   
        
  )
}
