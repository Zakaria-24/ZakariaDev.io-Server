import { Skill } from "@prisma/client";
import prisma from "../../../shared/prisma";


const createSkillIntoDB = async (payload: Skill): Promise<Skill> => {
  const result = await prisma.skill.create({
    data: {
        ...payload,
    }
  });
  return result;
};

const getAllSkillsFromDB = async (): Promise<Skill[]> => {
  const result = await prisma.skill.findMany({
    where: {
        isDeleted: false,
    },
    orderBy: {
        createdAt: "desc",
    },
  });
  return result;
};

const getSingleSkillFromDB = async (id: string) => {
  const result = await prisma.skill.findUniqueOrThrow({
    where: {
        id,
        isDeleted: false,
    },
  });
  return result;
};

const updateSkillIntoDB = async (
  id: string,
  payload: Partial<Skill>
) => {
  const result = await prisma.skill.update({
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

// const deleteSkillFromDB = async (id: string) => {
//   const result = await prisma.Skill.delete({
//     where: {
//       id,
//       isDeleted: false,
//     },
//   });
//   return result;
// };

const softDeleteSkillFromDB = async (id: string) => {
  const result = await prisma.skill.update({
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


export const SkillServices = {
    createSkillIntoDB,
    getAllSkillsFromDB,
    getSingleSkillFromDB,
    updateSkillIntoDB,
    // deleteSkillFromDB,
    softDeleteSkillFromDB,
};