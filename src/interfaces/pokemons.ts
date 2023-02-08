export interface PokemonResponse {
    attack: number;
    defense: number;
    hp: number;
    id: number;
    idAuthor: number;
    image: string;
    name: string;
    type: string
}

export interface DetailPokemonResponse {
    name: string;
    url: string;
    height: number;
    weight: number;  
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    stats: Stats[]
      
}

export interface MiniPokemon {
    name: string;
    url: string;
    weight: number;
    height: number;
    hp: number;
    attack: number;
    defense: number;
    speed: number;
    stats: Stats[]
}

export interface Pokemon{
    attack: number;
    defense: number;
    hp: number;
    id: number;
    idAuthor: number;
    image: string;
    name: string;
    type: string
}

interface Stats {
    base_stat: number;
    effort: number;
}