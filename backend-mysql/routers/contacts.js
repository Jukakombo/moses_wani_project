import express from "express";
 
import { createContacts, deleteContact, getAllContacts } from "../tables/contact.js";

const contactRouter = express.Router();
contactRouter.get("/", getAllContacts);
contactRouter.post("/", createContacts);
contactRouter.delete("/:id", deleteContact); 
export default contactRouter;
