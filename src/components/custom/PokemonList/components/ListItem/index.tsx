
'use client';
	
import { PokemonsResponse } from '@/api/actions/get-pokemons';
import { PokemonModal } from '@/components/custom/PokemonModal';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import Image from 'next/image';
import React from 'react';

type PokemonProps = {
    data: PokemonDetails
}

type PokemonDetails = PokemonsResponse;

export const colors: any = {
	fire: 'bg-gradient-to-t from-rose-700 via-red-500 to-red-800',
	water: 'bg-gradient-to-t from-cyan-600 via-blue-500 to-blue-800',
	grass: 'bg-gradient-to-t from-green-500 via-green-600 to-green-800',
	electric: 'bg-gradient-to-t from-yellow-400 via-yellow-500 to-yellow-700',
	ice: 'bg-gradient-to-t from-teal-500 via-teal-600 to-teal-800',
	fighting: 'bg-gradient-to-t from-orange-500 via-orange-600 to-orange-800 bg-opacity-40',
	poison: 'bg-gradient-to-t from-purple-500 via-purple-600 to-purple-800',
	ground: 'bg-gradient-to-t from-yellow-200 via-yellow-400 to-yellow-300',
	flying: 'bg-gradient-to-t from-blue-400 via-blue-400 to-blue-800',
	psychic: 'bg-gradient-to-t from-pink-400 via-pink-600 to-pink-800',
	bug: 'bg-gradient-to-t from-lime-500 via-lime-600 to-lime-800',
	rock: 'bg-gradient-to-t from-gray-400 via-gray-400 to-gray-500',
	ghost: 'bg-gradient-to-t from-purple-400 via-purple-600 to-purple-800',
	dragon: 'bg-gradient-to-t from-indigo-400 via-indigo-600 to-indigo-800',
	dark: 'bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800',
	steel: 'bg-gradient-to-t from-gray-400 via-gray-600 to-gray-800',
	fairy: 'bg-gradient-to-t from-pink-400 via-pink-600 to-pink-800',
	default: 'bg-gradient-to-t from-gray-500 via-gray-600 to-gray-800'
};

export const ListItem = ({data}: PokemonProps) => {
	const [isOpen, setIsOpen] = React.useState(false);
	console.log(isOpen, 'isOpen');	

	return (
		<>
			<Card className={`${colors[data.types[0].type.name] || colors.default} text-white border-none `} onClick={() => setIsOpen(true)}>
				<CardHeader className="flex justify-center items-center align-middle">
					<h2 className="text-3xl font-bold capitalize mt-2">{data.name}</h2>
				</CardHeader>
				<CardContent>
					<Image
						src={data.sprites.other['official-artwork'].front_default} 
						alt={data.name}
						width={300}
						height={300}
						className="p-4 hover:transform hover:scale-125 transition ease-in-out duration-400"
						quality={75}
						sizes="(100vw, 100vh)"
					/>
				</CardContent>

				<CardFooter className="flex justify-center gap-5">
					{data.types.map(({ type }) => (
						<span
							key={type.name}
							className={'inline-block bg-transparent rounded-sm px-3 py-1 font-extrabold text-white text-xl  mr-2 mb-2 capitalize'}
						>
							{type.name}
						</span>
					))}
				</CardFooter>
			</Card>
			<PokemonModal isOpen={isOpen} onClose={() => setIsOpen(false)} pokemon={data}/>
		</>
	);
};