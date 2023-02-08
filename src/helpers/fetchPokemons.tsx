import axios from 'axios';
import { Pokemon, MiniPokemon, PokemonResponse, DetailPokemonResponse } from '../interfaces/pokemons';


export const API_URL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon';
axios.defaults.baseURL = 'https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/pkm-msa-evaluation/pokemon';

export const fetchAllPokemons = async ():Promise<Pokemon[]> => {

    const idAuthor = 50;
    const resp = await axios.get(`/?idAuthor=${idAuthor}`);
    const pokeList = resp.data;

    return (pokeList);
  
}

export const fetchPokemon = async (id: number) => {
    const respMini = await axios.get(`/${id}`);
    return respMini.data;
}

export const delelePokemonById = async (id:number) => {
    const resp = await axios.delete(`/${id}`);
    return resp;
}

export const createNewPokemon = async (pokemonState:any) => {
    const resp = await axios.post(`/pokemon`,pokemonState);
    return resp;
}
