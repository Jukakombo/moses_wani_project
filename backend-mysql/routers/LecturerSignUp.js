import express from "express";
import { createSignUp } from "../tables/lecturerLogin.js";

const lecturerSignUp = express.Router();

lecturerSignUp.post("/", createSignUp);

export default lecturerSignUp;
