'use client';

import * as React from 'react';
import { Dialog, DialogContent, DialogFooter } from '@/components/ui/dialog';
import Image from 'next/image';
import { PokemonsResponse } from '@/api/actions/get-pokemons';
import { colors } from '../PokemonList/components/ListItem';
import { Card } from '@/components/ui/card';

type ModalProps = {
    isOpen: boolean, 
    onClose: () => void,
    pokemon: PokemonsResponse
}

export const PokemonModal = (props: ModalProps) => {
	const { isOpen, onClose, pokemon } = props;

	React.useEffect(() => {
		onClose();
	}, []);

	return (
		<Dialog open={isOpen} onOpenChange={onClose} >
			<DialogContent className={`${colors[pokemon.types[0].type.name] || colors.default} text-white p-0 border-none`}>
				<div>
					<h2 className="text-3xl font-bold capitalize mt-2 text-center py-4">{pokemon.name}</h2>
					<div className='flex justify-center items-center gap-10'>
						{pokemon?.types.map(({ type }) => (
							<Card
								key={type.name}
								className={'rounded-2xl font-extrabold text-white text-md capitalize bg-gray-100 bg-opacity-25 border-none text-center'}
							>
								<p className='px-8'>{type.name}</p>	
							</Card>
						))}		
					</div>
					<div>
						<Image
							src={pokemon.sprites.other['official-artwork'].front_default}
							alt={pokemon.name}
							width={250}
							height={250}
							className="p-4 animate-pulse mx-auto"
							quality={55}
							sizes="(100vw, 100vh)"
						/>
						
					</div>
				</div>
				<DialogFooter className="flex justify-center bg-white">
					<hr color='red' className='w-full' />
					
				</DialogFooter>
			</DialogContent>
		</Dialog>

	);
};