import express from "express";

import {
  createStudent,
  getstudents,
  updateStudent,
  upload,
} from "../tables/studentRegistered.js";
import { deleteBook } from "../tables/books.js";

const studentsRouter = express.Router();

studentsRouter.get("/", getstudents);
studentsRouter.post("/", upload.single("file"), createStudent);
studentsRouter.put("/:id", updateStudent);
studentsRouter.delete("/:id", deleteBook);

export default studentsRouter;
