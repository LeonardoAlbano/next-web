import * as z from 'zod'

export const projectFormSchema = z.object({
  title: z.string().min(2, {
    message: 'Title must be at least 2 characters.',
  }),
  description: z.string().min(10, {
    message: 'Description must be at least 10 characters.',
  }),
  projectUrl: z.string().url({
    message: 'Please enter a valid URL.',
  }),
  languages: z.array(z.string()).min(1, {
    message: 'Please select at least one language.',
  }),
  categories: z.array(z.string()).min(1, {
    message: 'Please select at least one category.',
  }),
  subcategories: z.array(z.string()).min(1, {
    message: 'Please select at least one subcategory.',
  }),
  technicalDetails: z.string(),
  statistics: z.string(),
  documentation: z.string(),
  images: z.array(z.string()),
})

export type ProjectFormValues = z.infer<typeof projectFormSchema>
