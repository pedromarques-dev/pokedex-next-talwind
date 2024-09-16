'use server';
import { Ability } from '../schemas/abiltiies';
import { getPokemonAction } from './get-pokemon';

export async function getAbilitiesPokemon (name: string) {
	const { abilities } = await getPokemonAction(name);

	const response = abilities.map(async (ability: Ability) => {
		const result = await fetch(ability.url);
		const json = await result.json();
		return json;
	});
	const responsePromise = await Promise.all(response);
	return responsePromise;
}