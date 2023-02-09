import { render, screen, fireEvent, cleanup} from "@testing-library/react";
import { PokemonCard } from "../../components/PokemonCard";


describe('Test on PokemonCard component', () => {

    test('Should fetch pokemon list', async () => {         
        
        
        render(
            <PokemonCard 
                id={1} 
                name={'ABRASUR'} 
                image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}
                attack={79}
                defense={61}
                hp={55}
                type={'Grass'}
                idAuthor={50}
                setPokemons={() => {}}
            />
        )   
        
        // screen.debug();
        expect(screen.getByText('ABRASUR')).toBeTruthy(); 
        expect(screen.getAllByLabelText('button-more')).toBeTruthy();   
    })

    test('Should display more details for pokemons and button for update', async () => {  
        
        render(
            <PokemonCard 
                id={1} 
                name={'ABRASUR'} 
                image={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/2.png'}
                attack={79}
                defense={61}
                hp={55}
                type={'Grass'}
                idAuthor={50}
                setPokemons={() => {}}
            />
        )   
        
        
        expect(screen.getAllByLabelText('button-more')).toBeTruthy(); 
        
        const showMore = screen.getByRole('button');
        fireEvent.click(showMore);
        // screen.debug();

        expect(screen.getAllByLabelText('delete-btn')).toBeTruthy();
        const button = screen.getByText('Delete');
    })
})