import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { ProjectServices } from "./project.service";


const createProject = catchAsync(async (req: Request, res: Response) => {
  const result = await ProjectServices.createProjectIntoDB( req.body );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Project created successfully",
    data: result,
  });
});

const getAllProjects = catchAsync(async (req: Request, res: Response) => {
    const result = await ProjectServices.getAllProjectsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Projects fetched successfully",
      data: result,
    });
  }
);

const getSingleProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.getSingleProjectFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project fetched successfully",
    data: result,
  });
});

const updateProject = catchAsync(async (req: Request, res: Response) => {
    console.log(req.params.id);
    console.log(req.body);
  const { id } = req.params;
  const result = await ProjectServices.updateProjectIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project updated successfully",
    data: result,
  });
});

// hard delete
// const deleteProject = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await ProjectServices.deleteProjectFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Project deleted successfully",
//     data: result,
//   });
// });

const softDeleteProject = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await ProjectServices.softDeleteProjectFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Project soft deleted successfully",
    data: result,
  });
});


export const ProjectControllers = {
  createProject,
  getAllProjects,
  getSingleProject,
  updateProject,
//   deleteProject,
  softDeleteProject,
};
