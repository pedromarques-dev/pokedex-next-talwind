'use client';

import { getPokemonAction } from '@/api/actions/get-pokemon';
import { PokemonsResponse } from '@/api/actions/get-pokemons';
import { colors } from '@/components/custom/PokemonList/components/ListItem';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React from 'react';

export default function PokemonDetails() {
	const { name } = useParams<{ name: string }>();
	const [pokemon, setPokemon] = React.useState<PokemonsResponse>();

	React.useEffect(() => {
		const getPokemon = async () => {
			const response = await getPokemonAction(name);
			setPokemon(response);
		};
		getPokemon();
	}, []);

	return (
		<main className="pt-10">
			{
				pokemon && (
					<Card className={`${colors[pokemon.types[0].type.name] || colors.default} text-white border-none w-1/2 mx-auto`}>
						<CardContent className="p-10">
							<Image
								src={pokemon.sprites.other['official-artwork'].front_default}
								alt={pokemon.name}
								width={250}
								height={250}
								className="p-4 animate-pulse mx-auto"
								quality={55}
								sizes="(100vw, 100vh)"
							/>
							<div className="flex justify-center gap-5 pt-10">
								{pokemon?.types.map(({ type }) => (
									<span
										key={type.name}
										className={'inline-block bg-transparent rounded-sm px-3 py-1 font-extrabold text-white text-xl mr-2 mb-2 capitalize'}
									>
										{type.name}
									</span>
								))}
							</div>
						</CardContent>

						<CardFooter>
                           
						</CardFooter>
					</Card>
				)
			}
		</main>
	);
}