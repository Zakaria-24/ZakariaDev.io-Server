import { Router } from "express";
import { UserController } from "./user.controller";
import auth from "../../middlewares/auth";
import { UserRole } from "@prisma/client";
import validateRequest from "../../middlewares/validateRequest";
import { UserValidation } from "./user.validation";

const router = Router();

router.get(
  "/",
  auth(UserRole.ADMIN),
  UserController.getAllUsers
);

router.patch(
  "/:id",
  auth(UserRole.ADMIN),
  validateRequest(UserValidation.updateUserZodSchema),
  UserController.updateUser
);

export const UserRoutes = router;
