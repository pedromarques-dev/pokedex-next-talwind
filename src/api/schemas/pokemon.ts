import { z } from 'zod'

export const pokemonSchema = z.object({
    name: z.string(),
    url: z.string(),
})

export type Pokemon = z.infer<typeof pokemonSchema>