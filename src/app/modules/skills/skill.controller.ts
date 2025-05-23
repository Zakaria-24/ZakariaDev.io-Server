import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { SkillServices } from "./skill.service";


const createSkill = catchAsync(async (req: Request, res: Response) => {
  const result = await SkillServices.createSkillIntoDB( req.body );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Skill created successfully",
    data: result,
  });
});

const getAllSkills = catchAsync(async (req: Request, res: Response) => {
    const result = await SkillServices.getAllSkillsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Skills fetched successfully",
      data: result,
    });
  }
);

const getSingleSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.getSingleSkillFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill fetched successfully",
    data: result,
  });
});

const updateSkill = catchAsync(async (req: Request, res: Response) => {
    console.log(req.params.id);
    console.log(req.body);
  const { id } = req.params;
  const result = await SkillServices.updateSkillIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill updated successfully",
    data: result,
  });
});

// hard delete
// const deleteSkill = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await SkillServices.deleteSkillFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Skill deleted successfully",
//     data: result,
//   });
// });

const softDeleteSkill = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await SkillServices.softDeleteSkillFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Skill soft deleted successfully",
    data: result,
  });
});


export const SkillControllers = {
  createSkill,
  getAllSkills,
  getSingleSkill,
  updateSkill,
//   deleteSkill,
  softDeleteSkill,
};
