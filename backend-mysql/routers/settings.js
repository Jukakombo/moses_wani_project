import express from "express";

import { createSetting, deleteSetting, getSettings, updateSetting } from "../tables/settings.js";

const settingRouter = express.Router();
settingRouter.get("/", getSettings);
settingRouter.post("/", createSetting);
settingRouter.put("/:id", updateSetting);
settingRouter.delete("/:id", deleteSetting);
export default settingRouter;
