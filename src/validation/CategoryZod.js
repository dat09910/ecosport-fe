import * as z from 'zod';

const CategoryZod = z.object({
  name: z.string().min(3).max(100),
  description: z.string().min(5).max(1000).optional(),
  image: z
    .any()
    .optional(),
});

export default CategoryZod;