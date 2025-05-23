import { z } from "zod";

// createProjectZodSchema
const createSkillZodSchema = z.object({
  body: z.object({
    icon: z.string({
      required_error: "Name is required",
    })
  })
});
// updateProjectZodSchema
const updateSkillZodSchema = z.object({
  body: z.object({
    icon: z.string().optional(),
  })
});

export const SkillValidation = {
    createSkillZodSchema,
    updateSkillZodSchema,
};