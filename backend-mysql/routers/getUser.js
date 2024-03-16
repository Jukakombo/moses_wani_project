import express from "express";
import { verifyUser } from "../tables/lecturerLogin.js";

const getUserRouter = express.Router();

getUserRouter.get("/", verifyUser, (req, res) => {
  return res.json({
    Status: "success",
    name: req.name,
  });
});

export default getUserRouter;
