import { Request, Response } from "express";
import catchAsync from "../../../utils/catchAsync";
import sendResponse from "../../../utils/sendResponse";
import httpStatus from "http-status";
import { TestimonialServices } from "./testimonial.service";


const createTestimonial = catchAsync(async (req: Request, res: Response) => {
  const result = await TestimonialServices.createTestimonialIntoDB( req.body );
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: "Testimonial created successfully",
    data: result,
  });
});

const getAllTestimonials = catchAsync(async (req: Request, res: Response) => {
    const result = await TestimonialServices.getAllTestimonialsFromDB();
    sendResponse(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: "Testimonials fetched successfully",
      data: result,
    });
  }
);

const getSingleTestimonial = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TestimonialServices.getSingleTestimonialFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Testimonial fetched successfully",
    data: result,
  });
});

const updateTestimonial = catchAsync(async (req: Request, res: Response) => {
    console.log(req.params.id);
    console.log(req.body);
  const { id } = req.params;
  const result = await TestimonialServices.updateTestimonialIntoDB(
    id,
    req.body
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Testimonial updated successfully",
    data: result,
  });
});

// hard delete
// const deleteTestimonial = catchAsync(async (req: Request, res: Response) => {
//   const { id } = req.params;
//   const result = await TestimonialServices.deleteTestimonialFromDB(id);
//   sendResponse(res, {
//     statusCode: httpStatus.OK,
//     success: true,
//     message: "Testimonial deleted successfully",
//     data: result,
//   });
// });

const softDeleteTestimonial = catchAsync(async (req: Request, res: Response) => {
  const { id } = req.params;
  const result = await TestimonialServices.softDeleteTestimonialFromDB(id);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: "Testimonial soft deleted successfully",
    data: result,
  });
});


export const TestimonialControllers = {
  createTestimonial,
  getAllTestimonials,
  getSingleTestimonial,
  updateTestimonial,
//   deleteTestimonial,
  softDeleteTestimonial,
};
