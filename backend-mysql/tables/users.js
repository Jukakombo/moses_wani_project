import mysql from "mysql";
import jwt from "jsonwebtoken";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all books
export const getUsers = async (req, res) => {
  try {
    const q = "SELECT * FROM users";
    db.query(q, (error, data) => {
      if (error) {
        return res.json(error);
      }
      res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
//   create user Sign up

export const createUser = async (req, res) => {
  try {
    const q =
      "INSERT INTO users (`course`,`courseCode`,`department`,`level`, `name`,`lastName`,`email`,`password`,`mobile`,`status`) VALUES (?)";
    const values = [
      req.body.course,
      req.body.courseCode,
      req.body.department,
      req.body.level,
      req.body.name,
      req.body.lastName,
      req.body.email,
      req.body.password,
      req.body.mobile,
      req.body.status,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
// login in
export const verifyUser = (req, res, next) => {
  const token = req.cookies.token;
  if (!token) {
    return res.json({
      Message:
        "Access to Dashboard requires valid credentials.Please provide your email and password for authentication",
    });
  } else {
    jwt.verify(token, "Our-jsonwebtoken-secret-key", (err, decoded) => {
      if (err) {
        return res.json({
          Message: "Authentication failed",
        });
      } else {
        req.name = decoded.name;
        next();
      }
    });
  }
};

export const loginUserWithPasswordAndEmail = async (req, res) => {
  try {
    const q = "SELECT * FROM users WHERE email = ? AND password = ?";
    db.query(q, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json({ message: "Server Side Error" });
      }
      if (data.length > 0) {
        const name = data[0].name;
        const token = jwt.sign({ name }, "Our-jsonwebtoken-secret-key", {
          expiresIn: "1d",
        });

        res.cookie("token", token);

        return res.json({ Status: "success" });
      } else {
        return res.json({ Message: "No Record existed" });
      }
    });
  } catch (error) {
    return res.json({ Message: "Error" });
  }
};

// update user
export const updateUser = async (req, res) => {
  try {
    const courseId = req.params.id;
    const q =
      "UPDATE users SET `course` =?, `courseCode` =?, `department` =?, `level` =?, `email` =?, `password` =?, `mobile` =?, `status` =? WHERE id =?";
    const values = [
      req.body.course,
      req.body.courseCode,
      req.body.department,
      req.body.level,
      req.body.email,
      req.body.password,
      req.body.mobile,
      req.body.status,
    ];
    db.query(q, [...values, courseId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book has been successfully updated");
    });
  } catch (error) {
    res.json(error);
  }
};
//   delete user
export const deleteUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const q = "DELETE FROM users WHERE id =?";
    db.query(q, [userId], (err, data) => {
      if (err) return res.json(err);
      return res.json("User has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
