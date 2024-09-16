
'use server';

import { Pokemon } from '../schemas/pokemon';
import { getPokemonAction } from './get-pokemon';

export interface PokemonsResponse {
    name: string;
    types: {
        type: {
            name: string
        }
    }[];
    sprites: {
        other: {
            'official-artwork' : {
                front_default: string
            }
        }
    }

}

export async function getPokemonsAction(limit?: number, offset?: number): Promise<PokemonsResponse[]> {
	const response = await fetch(`${process.env.BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
	const data = await response.json();
	const pokemonNames = data.results.map((pokemon: Pokemon) => pokemon.name);
	const pokemonsPromises =  pokemonNames.map((name: string) => {
		return getPokemonAction(name);
	});
	const pokemons = await Promise.all(pokemonsPromises);
	return pokemons;
}