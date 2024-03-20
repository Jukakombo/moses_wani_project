import express from "express";
import { createSignUp, getAllLecturers } from "../tables/lecturerLogin.js";

const lecturerSignUp = express.Router();

lecturerSignUp.post("/", createSignUp);
lecturerSignUp.get("/", getAllLecturers);

export default lecturerSignUp;
