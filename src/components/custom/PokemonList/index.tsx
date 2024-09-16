import * as React from 'react';
import List from './components/List';
import { ShowMoreList } from './components/ShowMoreList';
import { getPokemonsAction } from '@/api/actions/get-pokemons';

export default async function PokemonList (){
	const pokemonsInitials = await getPokemonsAction(9, 0);

	return (
		<div >
			<List pokemons={pokemonsInitials}/>
			<ShowMoreList />
		</div>
	);
}