import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient

export const getAllUsers = async (req: Request, res: Response): Promise<void> => {
    try {
        const { name, email, age } = req.query;

        const where: any = {};

        if (name) where.name = { contains: name as string };
        if (email) where.email = { contains: email as string };
        if (age) where.age = parseInt(age as string);

        const users = await prisma.user.findMany({
            where,
        });

        res.json(users);
    } catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};