import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";
import { UserSchema } from '../schemas'


const prisma = new PrismaClient();

export const postUser = async (req: Request, res: Response) => {
  try {
    const validatedData = UserSchema.parse(req.body);
    const user = await prisma.user.create({
      data: validatedData,
    });

    res.status(201).json(user);
  } catch (error) {
    if (error instanceof Error) {
      res.status(400).json({ error: error.message });
    }
  }
};
