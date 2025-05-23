import { Article } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createArticleIntoDB = async (payload: Article): Promise<Article> => {
  const result = await prisma.article.create({
    data: {
        ...payload,
    }
  });
  return result;
};

const getAllArticlesFromDB = async (): Promise<Article[]> => {
  const result = await prisma.article.findMany({
    where: {
        isDeleted: false,
    },
    orderBy: {
        createdAt: "desc",
    },
  });
  return result;
};

const getSingleArticleFromDB = async (id: string) => {
  const result = await prisma.article.findUniqueOrThrow({
    where: {
        id,
        isDeleted: false,
    },
  });
  return result;
};

const updateArticleIntoDB = async (
  id: string,
  payload: Partial<Article>
) => {
  const result = await prisma.article.update({
    where: {
      id,
      isDeleted: false,
    },
    data: {
        ...payload,
    },
  });
  return result;
};

// const deleteArticleFromDB = async (id: string) => {
//   const result = await prisma.Article.delete({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });
//   return result;
// };

const softDeleteArticleFromDB = async (id: string) => {
  const result = await prisma.article.update({
    where: {
      id,
      isDeleted: false,
    },
    data: {
      isDeleted: true,
    },
  });
  return result;
};


export const ArticleServices = {
    createArticleIntoDB,
    getAllArticlesFromDB,
    getSingleArticleFromDB,
    updateArticleIntoDB,
    // deleteArticleFromDB,
    softDeleteArticleFromDB,
};