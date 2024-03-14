import express from "express";
import cors from "cors";
const app = express();
import bookRouter from "./routers/books.js";
import trakingRouter from "./routers/trackings.js";
import studentsRouter from "./routers/studentsRegistere.js";
import courseRouter from "./routers/courseRegister.js";
import userRouter from "./routers/users.js";
import settingRouter from "./routers/settings.js";
app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.json("DB connected successfully via mysql");
});
// get all books
app.use("/books", bookRouter);
app.use("/trackings", trakingRouter);
app.use("/students", studentsRouter);
app.use("/courses", courseRouter);
app.use("/users", userRouter);
app.use("/settings", settingRouter);

app.listen(9000, () => {
  console.log("conntected 🚀 to backed http://localhost:9000");
});
