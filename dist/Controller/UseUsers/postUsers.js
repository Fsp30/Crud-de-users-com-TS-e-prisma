"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.postUser = void 0;
const client_1 = require("@prisma/client");
const schemas_1 = require("../schemas");
const prisma = new client_1.PrismaClient();
const postUser = async (req, res) => {
    try {
        const validatedData = schemas_1.UserSchema.parse(req.body);
        const user = await prisma.user.create({
            data: validatedData,
        });
        res.status(201).json(user);
    }
    catch (error) {
        if (error instanceof Error) {
            res.status(400).json({ error: error.message });
        }
    }
};
exports.postUser = postUser;
