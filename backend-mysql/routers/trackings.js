import express from "express";
import {
  createTracking,
  deleteTracking,
  getTrackings,
  updateTracking,
} from "../tables/tracking.js";

const trakingRouter = express.Router();
trakingRouter.get("/", getTrackings);
trakingRouter.post("/", createTracking);
trakingRouter.put("/:id", updateTracking);
trakingRouter.delete("/:id", deleteTracking);
export default trakingRouter;
