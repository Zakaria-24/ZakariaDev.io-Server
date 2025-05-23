import { Router } from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ArticleValidation } from "./article.validation";
import { ArticleControllers } from "./article.controller";

const router = Router();

router.post(
  "/create-article",
  validateRequest(ArticleValidation.createArticleZodSchema),
  ArticleControllers.createArticle
);

router.get(
  "/",
  ArticleControllers.getAllArticles
);

router.get(
  "/:id",
  ArticleControllers.getSingleArticle
);

router.patch(
  "/:id",
  validateRequest(ArticleValidation.updateArticleZodSchema),
  ArticleControllers.updateArticle
);

// hard delete
// router.delete(
//   "/:id",
//   ArticleControllers.deleteArticle
// );

// soft delete
router.patch(
  "/soft-delete/:id",
  ArticleControllers.softDeleteArticle
);

export const ArticleRoutes = router;
