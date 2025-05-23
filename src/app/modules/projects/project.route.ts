import { Router } from "express";
import { ProjectControllers } from "./project.controller";
import validateRequest from "../../middlewares/validateRequest";
import { ProjectValidation } from "./project.validation";

const router = Router();

router.post(
  "/create-project",
  validateRequest(ProjectValidation.createProjectZodSchema),
  ProjectControllers.createProject
);

router.get(
  "/",
  ProjectControllers.getAllProjects
);

router.get(
  "/:id",
  ProjectControllers.getSingleProject
);

router.patch(
  "/:id",
  validateRequest(ProjectValidation.updateProjectZodSchema),
  ProjectControllers.updateProject
);

// hard delete
// router.delete(
//   "/:projectId",
//   ProjectControllers.deleteProject
// );

// soft delete
router.patch(
  "/soft-delete/:id",
  ProjectControllers.softDeleteProject
);

export const ProjectRoutes = router;
