import 'dotenv/config';
import { z } from 'zod';

const envConfigSchema = z.object({
	BASE_URL: z.string()
}); 

const _env = envConfigSchema.safeParse(process.env);

if (_env.error) {
	console.error('Validation environment error: ', _env.error.format());

	throw new Error('Invalid enviroment variables');
}

export const env = _env.data;