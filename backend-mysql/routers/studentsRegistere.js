import express from "express";

import {
  createStudent,
  deleteStudent,
  getstudents,
  updateStudent,
  upload,
} from "../tables/studentRegistered.js"; 

const studentsRouter = express.Router();

studentsRouter.get("/", getstudents);
studentsRouter.post("/", upload.single("file"), createStudent);
studentsRouter.put("/:id", updateStudent);
studentsRouter.delete("/:id", deleteStudent);

export default studentsRouter;
