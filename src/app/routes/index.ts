import express from "express";
import { AuthRoutes } from "../modules/auth/auth.route";
import { ProjectRoutes } from "../modules/projects/project.route";
import { TestimonialRoutes } from "../modules/testimonial/testimonial.route";
import { ArticleRoutes } from "../modules/articles/article.route";
import { SkillRoutes } from "../modules/skills/skill.route";

const router = express.Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: AuthRoutes,
  },
  {
    path: "/projects",
    route: ProjectRoutes,
  },
  {
    path: "/articles",
    route: ArticleRoutes,
  },
  {
    path: "/testimonials",
    route: TestimonialRoutes,
  },
  {
    path: "/skills",
    route: SkillRoutes,
  },
  // {
  //   path: "/achievements",
  //   route: AchievementRoutes,
  // },
  // {
  //   path: "/experiences",
  //   route: ExperienceRoutes,
  // },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
