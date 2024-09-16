'use client';

import React from 'react';
import { Button } from '@/components/ui/button';

type ButtonProps = {
    onClick: () => void;
    isVisible: boolean
}
export const ShowMoreButton = ({ onClick, isVisible }: ButtonProps) => {
	const [showMoreButton, setShowMoreButton] = React.useState(true);
    
	return (
		<>
			{
				showMoreButton && (
					<div className='text-center py-5'>
						<Button
							className='my-5 px-16 py-8 bg-sky-800 text-white font-bold text-lg hover:bg-blue-100 hover:text-sky-800 transition ease-in-out duration-200'
							onClick={() => {
								setShowMoreButton(isVisible);
								onClick();
							}}
						>
                            Carregar mais
						</Button>
					</div>
				)
			}
		</>
	);
};