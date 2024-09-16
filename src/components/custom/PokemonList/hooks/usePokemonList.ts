'use client';
import { getPokemonsAction, PokemonsResponse } from '@/api/actions/get-pokemons';
import * as React from 'react';

type PokemonDetails = PokemonsResponse;
export const usePokemonList = () => {
	const [newPokemons, setNewPokemons] = React.useState<PokemonDetails[]>([]);
	const [isLoading, setIsLoading] = React.useState(false);

	const getPokemons = async (page: number, offset: number) => {
		setIsLoading(true);
		const pokemons = await getPokemonsAction(page, offset);
		setNewPokemons((data) => [...data, ...pokemons]);
		setIsLoading(false);
	};

	return {
		newPokemons,
		getPokemons,
		isLoading
	};
};