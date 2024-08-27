import * as z from 'zod';
const ProductZod = z.object({
    name:z.string().min(5).max(250),
    price:z.string().min(1),
    quantity:z.string().min(1),
    description:z.string().min(10).max(250),
    image:z.any().optional(),
    images:z.any().optional(),
    category_id:z.any(),
})
export default ProductZod;  