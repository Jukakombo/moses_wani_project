import express from "express";
import cors from "cors";
import jwt from "jsonwebtoken";
import cookieParser from "cookie-parser";
const app = express();
import bookRouter from "./routers/books.js";
import trakingRouter from "./routers/trackings.js";
import studentsRouter from "./routers/studentsRegistere.js";
import courseRouter from "./routers/courseRegister.js";
import userRouter from "./routers/users.js";
import settingRouter from "./routers/settings.js";
import attendanceRouter from "./routers/attendances.js";
import lecturerLoginRouter from "./routers/lecturerLogin.js";
import lecturerSignUp from "./routers/LecturerSignUp.js";
import mysql from "mysql";
import getUserRouter from "./routers/getUser.js";

app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    origin: ["http://localhost:5173"],
    methods: ["POST", "GET"],
    credentials: true,
  })
);
//connecting to db
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});
app.get("/home", (req, res) => {
  res.json("Connected successfully to mysql DB");
});

app.use("/", getUserRouter);
// get all books
app.use("/books", bookRouter);
app.use("/trackings", trakingRouter);
app.use("/students", studentsRouter);
app.use("/courses", courseRouter);
app.use("/users", userRouter);
app.use("/settings", settingRouter);
app.use("/attendances", attendanceRouter);
app.use("/login", lecturerLoginRouter);
app.use("/signup", lecturerSignUp);

app.listen(9000, () => {
  console.log("conntected 🚀 to database http://localhost:9000");
});
