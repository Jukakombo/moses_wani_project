import express from "express";

import {
  createAttendance,
  deleteAttendance,
  getAttendances,
  updateAttendance,
} from "../tables/attendance.js";

const attendanceRouter = express.Router();
attendanceRouter.get("/", getAttendances);
attendanceRouter.post("/", createAttendance);
attendanceRouter.put("/:id", updateAttendance);
attendanceRouter.delete("/:id", deleteAttendance);
export default attendanceRouter;
