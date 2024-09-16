'use server';

import { api } from '..';
import { Pokemon } from '../schemas/pokemon';

export async function getNamePokemonsAction(limit: number, offset: number) {
	const { data } = await api.get(`${process.env.BASE_URL}/pokemon?limit=${limit}&offset=${offset}`);
	const pokemons = data as { results: Pokemon[] };
	const names = pokemons.results.map(result => result.name);
	return names;
}