import { z } from "zod";


// createProjectZodSchema
const createProjectZodSchema = z.object({
  body: z.object({
    title: z.string({
      required_error: "Title is required",
    }),
    category: z.string({
        required_error: "Category is required"
    }),
    description: z.string({
      required_error: "Description is required",
    }),
    image: z.string({
      required_error: "Image is required",
    }),
    link: z.string({
      required_error: "Link is required",
    }),
  })
});
// updateProjectZodSchema
const updateProjectZodSchema = z.object({
  body: z.object({
    title: z.string().optional(),
    category: z.string().optional(),
    description: z.string().optional(),
    image: z.string().optional(),
    link: z.string().optional(),
  })
});

export const ProjectValidation = {
  createProjectZodSchema,
  updateProjectZodSchema,
};