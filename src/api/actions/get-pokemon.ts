
'use server';

import { api } from '..';

export async function getPokemonAction(name: string) {
	const { data } = await api.get(`${process.env.BASE_URL}/pokemon/${name}?`);
	return data;
}
