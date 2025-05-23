import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { SkillValidation } from "./skill.validation";
import { SkillControllers } from "./skill.controller";

const router = Router();

router.post(
  "/create-skill",
  validateRequest(SkillValidation.createSkillZodSchema),
  SkillControllers.createSkill
);

router.get(
  "/",
  SkillControllers.getAllSkills
);

router.get(
  "/:id",
  SkillControllers.getSingleSkill
);

router.patch(
  "/:id",
  validateRequest(SkillValidation.updateSkillZodSchema),
  SkillControllers.updateSkill
);

// hard delete
// router.delete(
//   "/:id",
//   SkillControllers.deleteSkill
// );

// soft delete
router.patch(
  "/soft-delete/:id",
  SkillControllers.softDeleteSkill
);

export const SkillRoutes = router;
