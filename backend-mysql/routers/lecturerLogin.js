import express from "express";
import { loginProf, verifyUser } from "../tables/lecturerLogin.js";

const lecturerLoginRouter = express.Router();

lecturerLoginRouter.post("/", loginProf);

export default lecturerLoginRouter;
