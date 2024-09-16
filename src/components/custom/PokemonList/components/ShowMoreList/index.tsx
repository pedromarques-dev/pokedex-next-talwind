'use client';

import * as React from 'react';
import { usePokemonList } from '../../hooks/usePokemonList';
import List from '../List';
import { ShowMoreButton } from '../ShowMoreButton';


export const ShowMoreList = () => {
	const { getPokemons, newPokemons} = usePokemonList();

	const buttonShowCondition = () => {
		while(newPokemons.length >= 9) {
			return (
				<>
					<List pokemons={newPokemons} spacing={1} />     
					<ShowMoreButton isVisible={true} onClick={() => getPokemons(9, newPokemons.length + 9)} />
				</>
			);
		}
	};

	return (
		<>
			<ShowMoreButton isVisible={false} onClick={() => getPokemons(9, 9)} />
			{buttonShowCondition()}
		</>

	);
};