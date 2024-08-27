import * as z from 'zod';

const VoucherZod = z.object({
  code: z.string().min(3).max(100),
  description: z.string().min(5).max(1000).optional(),
  discount_percentage: z.string().min(1).max(100),
  start_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid start date format",
  }),
  end_date: z.string().refine((date) => !isNaN(Date.parse(date)), {
    message: "Invalid end date format",
  }),
});

export default VoucherZod;
