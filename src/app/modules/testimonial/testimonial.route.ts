import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { TestimonialValidation } from "./testimonial.validation";
import { TestimonialControllers } from "./testimonial.controller";

const router = Router();

router.post(
  "/create-testimonial",
  validateRequest(TestimonialValidation.createTestimonialZodSchema),
  TestimonialControllers.createTestimonial
);

router.get(
  "/",
  TestimonialControllers.getAllTestimonials
);

router.get(
  "/:id",
  TestimonialControllers.getSingleTestimonial
);

router.patch(
  "/:id",
  validateRequest(TestimonialValidation.updateTestimonialZodSchema),
  TestimonialControllers.updateTestimonial
);

// hard delete
// router.delete(
//   "/:id",
//   TestimonialControllers.deleteTestimonial
// );

// soft delete
router.patch(
  "/soft-delete/:id",
  TestimonialControllers.softDeleteTestimonial
);

export const TestimonialRoutes = router;
