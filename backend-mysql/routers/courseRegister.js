import express from "express";

import {
  createCourse,
  deleteCourse,
  getCourseRegister,
  updateCourse,
} from "../tables/courseRegistered.js";

const courseRouter = express.Router();
courseRouter.get("/", getCourseRegister);
courseRouter.post("/", createCourse);
courseRouter.put("/:id", updateCourse);
courseRouter.delete("/:id", deleteCourse);
export default courseRouter;
