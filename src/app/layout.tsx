import * as React from 'react';
import type { Metadata } from 'next';
import './globals.css';
import { Header } from '@/components/custom/Header';

export const metadata: Metadata = {
	title: 'Pokedex App',
	description: 'Uma pokedex feita com nextjs e tailwindcss',
	authors: [{
		name: 'Pedro Marques',
		url: 'https://github.com/pedromarques-dev'
	}],
};

export default function RootLayout({
	children,
}: Readonly<{
  children: React.ReactNode
}>) {
	return (
		<html lang="pt-BR">
			<body suppressHydrationWarning={true}>
				<Header />
				<div className="content bg-[url('/images/fundo-body.png')] bg-no-repeat bg-center bg-cover min-h-lvh">
					{children}
				</div>
			</body>
		</html>
	);
}
