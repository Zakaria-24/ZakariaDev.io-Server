import { Project } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createProjectIntoDB = async (payload: Project): Promise<Project> => {
  const result = await prisma.project.create({
    data: {
        ...payload,
    }
  });
  return result;
};

const getAllProjectsFromDB = async (): Promise<Project[]> => {
  const result = await prisma.project.findMany({
    where: {
        isDeleted: false,
    },
    orderBy: {
        createdAt: "desc",
    },
  });
  return result;
};

const getSingleProjectFromDB = async (id: string) => {
  const result = await prisma.project.findUniqueOrThrow({
    where: {
        id,
        isDeleted: false,
    },
  });
  return result;
};

const updateProjectIntoDB = async (
  id: string,
  payload: Partial<Project>
) => {
  const result = await prisma.project.update({
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

// const deleteProjectFromDB = async (id: string) => {
//   const result = await prisma.project.delete({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });
//   return result;
// };

const softDeleteProjectFromDB = async (id: string) => {
  const result = await prisma.project.update({
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


export const ProjectServices = {
    createProjectIntoDB,
    getAllProjectsFromDB,
    getSingleProjectFromDB,
    updateProjectIntoDB,
    // deleteProjectFromDB,
    softDeleteProjectFromDB,
};