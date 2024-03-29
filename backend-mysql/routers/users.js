import express from "express";

import {
  createUser,
  deleteUser,
  getUsers, 
  updateUser, 
} from "../tables/users.js";

const userRouter = express.Router();
userRouter.get("/", getUsers);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
export default userRouter;
