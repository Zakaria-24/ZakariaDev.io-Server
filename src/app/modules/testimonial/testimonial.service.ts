import { Testimonial } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createTestimonialIntoDB = async (payload: Testimonial): Promise<Testimonial> => {
  const result = await prisma.testimonial.create({
    data: {
        ...payload,
    }
  });
  return result;
};

const getAllTestimonialsFromDB = async (): Promise<Testimonial[]> => {
  const result = await prisma.testimonial.findMany({
    where: {
        isDeleted: false,
    },
    orderBy: {
        createdAt: "desc",
    },
  });
  return result;
};

const getSingleTestimonialFromDB = async (id: string) => {
  const result = await prisma.testimonial.findUniqueOrThrow({
    where: {
        id,
        isDeleted: false,
    },
  });
  return result;
};

const updateTestimonialIntoDB = async (
  id: string,
  payload: Partial<Testimonial>
) => {
  const result = await prisma.testimonial.update({
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

// const deleteTestimonialFromDB = async (id: string) => {
//   const result = await prisma.testimonial.delete({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });
//   return result;
// };

const softDeleteTestimonialFromDB = async (id: string) => {
  const result = await prisma.testimonial.update({
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


export const TestimonialServices = {
    createTestimonialIntoDB,
    getAllTestimonialsFromDB,
    getSingleTestimonialFromDB,
    updateTestimonialIntoDB,
    // deleteTestimonialFromDB,
    softDeleteTestimonialFromDB,
};