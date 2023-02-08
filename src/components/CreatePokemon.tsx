import React, { useState } from 'react'
import { IStateForm } from '../interfaces/stateForm';
import axios from 'axios';
import { fetchAllPokemons, createNewPokemon } from '../helpers/fetchPokemons';

interface iProps {
    showModal : boolean;
    setShowModal : React.Dispatch<React.SetStateAction<any>>;
    setPokemons : React.Dispatch<React.SetStateAction<any>>;
}

export const CreatePokemon:React.FC<iProps> = ({ showModal, setShowModal, setPokemons }) => {

    const [ state, setState ] = useState<IStateForm>({
        name: '',
        image: '',
        attack: '',
        defense: '',
        hp: '',
        type: '',
        idAuthor: 50
    });
    const [ showCreated, setShowCreated ] = useState(false)

    const handleChange = (event:React.ChangeEvent<HTMLInputElement>):void => {
        setState({            
            ...state,
            [event.target.name]: event.target.value            
        });
    }

    const createPokemon = (event:React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        console.log(state)
        axios.post('https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon/', state)
        .then((response) => {
            resetForm();
            setShowCreated(true);
            fetchAllPokemons().then(pokemons => setPokemons(pokemons))
        })
        .catch((error) => {
            console.log(error)
        })
        
    }

    const resetForm = () => {
        setState({            
            name: '',
            image: '',
            attack: '',
            defense: '',
            hp: '',
            type: '',
            idAuthor: 50        
        });
    }

    
  return (
    <React.Fragment>
        <div id="myModal" className="modal modal-display">
            <div className="modal-content">
            <span className="close" onClick={() => setShowModal(!showModal)}>&times;</span>
            <p>Create New Pokemon</p>
            <form className="form-content" onSubmit={createPokemon}>
                <div className="form-rf">
                    <div className="form-c">
                        <label htmlFor="">Name</label>
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="name" 
                            value={state.name}
                            placeholder='Pokemon name' 
                            required
                        />

                    </div>
                    <div className="form-c">
                        <label htmlFor="">Image</label>
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="image" 
                            value={state.image}
                            placeholder='Pokemon image' 
                            required
                        />
                        
                    </div>
                </div>
                <div className="form-rf">
                    <div className="form-c">
                        <label htmlFor="">Attack</label>
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="attack" 
                            value={state.attack}
                            placeholder='Attack' 
                            required
                        />
                    </div>
                    <div className="form-c">
                        <label htmlFor="">Defense</label>
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="defense" 
                            value={state.defense}
                            placeholder='Defense' 
                            required
                        />
                    </div>
                </div>
                <div className="form-rf">
                    <div className="form-c">
                        <label htmlFor="">Hp</label>
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="hp" 
                            value={state.hp}
                            placeholder='Hp' 
                            required
                        />
                    </div>
                    <div className="form-c">
                        <label htmlFor="">Type</label>                        
                        <input 
                            onChange={handleChange}
                            type="text" 
                            name="type" 
                            value={state.type}
                            placeholder='Pokemon Type' 
                            required
                        />
                    </div>
                </div>
                <button>Create Pokemon</button>                
            </form>
            {
                showCreated && 
                <div className="coment">
                    Pokemon creado exitosamente
                </div>
            }
            
            </div>
        </div>
    </React.Fragment>
  )
}
