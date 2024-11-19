import { PrismaClient } from "@prisma/client";
import { Request, Response } from "express";

const prisma = new PrismaClient();

export const updateUser = async (req: Request, res: Response): Promise<void> => {
    try {
        const { id } = req.params;
        const { name, email, age } = req.body;
        const user = await prisma.user.findUnique({
            where: { id: id }
        });

        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }

        const updatedData: any = {
            name: name ?? user.name, 
            email: email ?? user.email, 
            age: age !== undefined ? age : user.age, 
        };

        const updatedUser = await prisma.user.update({
            where: { id: id },
            data: updatedData
        });

        res.status(200).json(updatedUser);
    } catch (error) {
        console.error("Error updating user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
