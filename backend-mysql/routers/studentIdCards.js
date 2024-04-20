import express from "express";
import {
  createStudentIdCard,
  deleteStudentIdCard,
  getStudentIdCards,
  updateStudentIdCard,
  upload,
} from "../tables/studentIds.js";

const studentIdCards = express.Router();

studentIdCards.get("/", getStudentIdCards);
studentIdCards.post("/", upload.single("file"), createStudentIdCard);
studentIdCards.put("/:id", updateStudentIdCard);
studentIdCards.delete("/:id", deleteStudentIdCard);

export default studentIdCards;
