import { z } from "zod";

// createProjectZodSchema
const createTestimonialZodSchema = z.object({
  body: z.object({
    name: z.string({
      required_error: "Name is required",
    }),
    role: z.string({
      required_error: "Role is required",
    }),
    company: z.string({
      required_error: "Company is required",
    }),
    location: z.string({
      required_error: "Location is required",
    }),
    message: z.string({
      required_error: "Message is required",
    }),
    rating: z.number({
      required_error: "Rating is required",
    }),
  })
});
// updateProjectZodSchema
const updateTestimonialZodSchema = z.object({
  body: z.object({
    name: z.string().optional(),
    role: z.string().optional(),
    company: z.string().optional(),
    location: z.string().optional(),
    message: z.string().optional(),
    rating: z.string().optional(),
  })
});

export const TestimonialValidation = {
    createTestimonialZodSchema,
    updateTestimonialZodSchema,
};