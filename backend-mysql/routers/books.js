import express from "express";
import {
  createBook,
  deleteBook,
  getBooks,
  updateBook,
} from "../tables/books.js";

const bookRouter = express.Router();
bookRouter.get("/", getBooks);
bookRouter.post("/", createBook);
bookRouter.put("/:id", updateBook);
bookRouter.delete("/:id", deleteBook);
export default bookRouter;
