import express from "express";
import { loginUserWithPasswordAndEmail, verifyUser } from "../tables/users.js";

const loginUser = express.Router();

loginUser.post("/", loginUserWithPasswordAndEmail);

export default loginUser;
