"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const deleteUser = async (req, res) => {
    try {
        const { id } = req.params;
        const user = await prisma.user.findUnique({
            where: { id: id }
        });
        if (!user) {
            res.status(404).json({ error: "User not found" });
            return;
        }
        await prisma.user.delete({
            where: { id: id }
        });
        res.status(200).json({ message: "User deleted successfully" });
    }
    catch (error) {
        console.error("Error deleting user:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};
exports.deleteUser = deleteUser;
