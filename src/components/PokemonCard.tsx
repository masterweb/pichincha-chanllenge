import React, { useState, useEffect } from 'react';
import { PokemonDesc } from './PokemonDesc';

interface IProps {
    key?: number;
    id: number;
    name: string;
    image: string;
    attack: number;
    defense: number;
    hp: number;
    type: string;    
    idAuthor: number;
    setPokemons : React.Dispatch<React.SetStateAction<any>>;
    
}

export const PokemonCard:React.FC<IProps> = ({ id, name, image, attack, defense, hp, type, idAuthor, setPokemons }) => {

  const [show, setShow] = useState(false)
  
    
  return (
    <React.Fragment>
      <div className="thumb-container grass">
        <div className="number">
          <small>#0{id}</small>
        </div>
        <img src={image} alt={name} />
        <div className="detail-cont">
          <h3>{name.toUpperCase()}</h3>
          <small>Type: Grass</small>
          <button className='poke-info' onClick={() => setShow(!show)} aria-label="button-more">
            {show ? 'Show less' : 'Show more'}
          </button>
          
          {
            show && 
              (
                <PokemonDesc
                  id={id}
                  hp={hp} 
                  attack={attack}
                  deffense={defense}
                  setPokemons={setPokemons} 
                />
              )              
            
          }
        </div>
      </div>
    </React.Fragment>
  )
}
