import { render, screen } from '@testing-library/react';
import { PokemonList } from '../../components/PokemonList';

describe('Test on PokemonList', () => { 


    test('should display default component', async () => {
        render(<PokemonList />)
    })
})