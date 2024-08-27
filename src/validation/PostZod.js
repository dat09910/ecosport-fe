import * as z from 'zod';

const PostZod = z.object({
    group_id: z.string(),
    name: z.string().min(5, "Tên phải có ít nhất 5 ký tự").max(250, "Tên không được quá 250 ký tự"),
    body: z.string().min(10, "Nội dung phải có ít nhất 10 ký tự").max(250, "Nội dung không được quá 250 ký tự"),
    path: z.instanceof(File).optional()
});
export default PostZod; 