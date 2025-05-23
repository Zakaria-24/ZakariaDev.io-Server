import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { ArticleServices } from "./article.service";


const createArticle = catchAsync(async (req: Request, res: Response) => {
  const result = await ArticleServices.createArticleIntoDB( req.body );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Article created successfully",
    data: result,
  });
});

const getAllArticles = catchAsync(async (req: Request, res: Response) => {
    const result = await ArticleServices.getAllArticlesFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Articles fetched successfully",
      data: result,
    });
  }
);

const getSingleArticle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ArticleServices.getSingleArticleFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Article fetched successfully",
    data: result,
  });
});

const updateArticle = catchAsync(async (req: Request, res: Response) => {
    console.log(req.params.id);
    console.log(req.body);
  const { id } = req.params;
  const result = await ArticleServices.updateArticleIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Article updated successfully",
    data: result,
  });
});

// hard delete
// const deleteArticle = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await ArticleServices.deleteArticleFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Article deleted successfully",
//     data: result,
//   });
// });

const softDeleteArticle = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ArticleServices.softDeleteArticleFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Article soft deleted successfully",
    data: result,
  });
});


export const ArticleControllers = {
  createArticle,
  getAllArticles,
  getSingleArticle,
  updateArticle,
//   deleteArticle,
  softDeleteArticle,
};
