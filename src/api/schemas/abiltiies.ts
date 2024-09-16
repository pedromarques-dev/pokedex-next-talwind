import { z } from 'zod'

export const abilitySchema = z.object({
    name: z.string(),
    url: z.string()
})

export type Ability = z.infer<typeof abilitySchema>