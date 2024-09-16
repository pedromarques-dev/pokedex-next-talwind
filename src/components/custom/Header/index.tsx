import * as React from 'react';
import Image from 'next/image';
import Logo from '../../../../public/images/logo.png';
import Pokemons from '../../../../public/images/pokemons-header.png';

export const Header = () => {
	return (
		<div className="w-dvw flex justify-between items-center bg-indigo-600 fixed max-h-30">
			<Image 
				className="mx-20"
				src={Logo}
				alt="Logo"
				width={250}
			/>
			<Image 
				src={Pokemons}
				alt="Logo"
				width={250}
				className="mx-20"
			/>
		</div>
	);
};