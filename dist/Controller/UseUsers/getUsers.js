"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllUsers = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient;
const getAllUsers = async (req, res) => {
    try {
        const { name, email, age } = req.query;
        const where = {};
        if (name)
            where.name = { contains: name };
        if (email)
            where.email = { contains: email };
        if (age)
            where.age = parseInt(age);
        const users = await prisma.user.findMany({
            where,
        });
        res.json(users);
    }
    catch (error) {
        console.error("Error fetching users:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.getAllUsers = getAllUsers;
