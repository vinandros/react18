// https://pokeapi.co/api/v2/pokemon/
import axios from 'axios'
import Pokemon from '../models/Pokemon'
// type Pokemon = {
//     name: string;
//     url: string;
// };
  
type GetPokemonResponse = {
    results: Pokemon[]
    previous: number | null
    next: string | null
    count: number
};



async function getPokemonsService() {
    let result: GetPokemonResponse = {
        results: [],
        previous: null,
        next: null,
        count: 0
    };
    try {
        const { data , status } = await axios.get(
            `${process.env.REACT_APP_API_POKE_BASE_URL}`,
            {
                headers: {
                  'Access-Control-Allow-Origin': '*',
                  'Content-Type': 'application/json',
                },
            },
        );
        if (status === 200) {
            result = data;
            const pokemonsData = await Promise.all(data.results.map(async (elem:any) => {
                return getPokemon(elem.name)
            }));
            if (pokemonsData) {
                result.results = pokemonsData;
            }
            
        }
    } catch (error) {
        console.log(error)
    }
    return result;
}

async function getPokemon(id: number|string): Promise<Pokemon> {
    let result: Pokemon = new Pokemon();
    try {
        const { data , status } = await axios.get(
            `${process.env.REACT_APP_API_POKE_BASE_URL}/${id}`,
            {
              headers: {
                'Access-Control-Allow-Origin': '*',
                'Content-Type': 'application/json',
              },
            },
        );
        if (status === 200) {
            result = new Pokemon(data.id, data.name, data.sprites.other.dream_world.front_default, `${process.env.REACT_APP_API_POKE_BASE_URL}/${data.id}`)
        }
    } catch (error) {
        console.log(error)
    }
    return result
}

export {
    getPokemonsService,
    
}

export type { Pokemon, GetPokemonResponse}