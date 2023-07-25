import { z } from 'zod'

export const schema = z.object({
    name: z.string().min(1, "Jméno je povinné"),
    email: z.string().email("Špatný formát emailu"),
    address: z.string().min(1, "Adresa je povinná"),
})


export type FormSchemaType = z.infer<typeof schema>;


