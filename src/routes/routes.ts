
import { Router } from "express"
import { getAllUsers } from "../Controller/UseUsers/getUsers";
import { deleteUser } from "../Controller/UseUsers/deleteUsers";
import { updateUser } from "../Controller/UseUsers/updateUsers";
import { postUser } from "../Controller/UseUsers/postUsers";

const router = Router()

router.post('/users',postUser)
router.get("/users", getAllUsers);
router.delete("/users/:id", deleteUser);
router.put("/users/:id", updateUser);

export default router;

