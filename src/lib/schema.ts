import * as z from 'zod'

export const projectFormSchema = z.object({
  title: z.string().min(2, {
    message: 'O título deve ter pelo menos 2 caracteres.',
  }),
  description: z.string().min(10, {
    message: 'A descrição deve ter pelo menos 10 caracteres.',
  }),
  projectUrl: z.string().url({
    message: 'Por favor, insira uma URL válida.',
  }),
  languages: z.array(z.string()).min(1, {
    message: 'Por favor, selecione pelo menos um idioma.',
  }),
  categories: z.array(z.string()).min(1, {
    message: 'Por favor, selecione pelo menos uma categoria.',
  }),
  subcategories: z.array(z.string()).min(1, {
    message: 'Por favor, selecione pelo menos uma subcategoria.',
  }),
  technicalDetails: z.string(),
  statistics: z.string(),
  documentation: z.string(),
  images: z.array(z.string()),
})

export type ProjectFormValues = z.infer<typeof projectFormSchema>
