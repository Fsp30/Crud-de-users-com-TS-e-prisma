"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const getUsers_1 = require("../Controller/UseUsers/getUsers");
const deleteUsers_1 = require("../Controller/UseUsers/deleteUsers");
const updateUsers_1 = require("../Controller/UseUsers/updateUsers");
const postUsers_1 = require("../Controller/UseUsers/postUsers");
const router = (0, express_1.Router)();
router.post('/users', postUsers_1.postUser);
router.get("/users", getUsers_1.getAllUsers);
router.delete("/users/:id", deleteUsers_1.deleteUser);
router.put("/users/:id", updateUsers_1.updateUser);
exports.default = router;