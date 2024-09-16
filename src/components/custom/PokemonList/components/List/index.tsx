'use client';

import * as React from 'react';
import { PokemonsResponse } from '@/api/actions/get-pokemons';
import { ListItem } from '../ListItem';
export default function List ({pokemons}: {pokemons: PokemonsResponse[], spacing?: number}) {


	return (
		<div>
			<ul className={'flex flex-1 justify-center items-center w-dvw flex-wrap px-32 pt-24 gap-24 border-none'}  >
                
				{
					pokemons && pokemons.map((pokemon, index) => (
						<ListItem key={index} data={pokemon} />
					))
				}
			</ul>
            
		</div>
	);
}