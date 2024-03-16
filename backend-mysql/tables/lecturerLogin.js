import mysql from "mysql";
import jwt from "jsonwebtoken";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//  sign up
export const createSignUp = async (req, res) => {
  try {
    const q = "INSERT INTO signup (`name`,`email`,`password`) VALUES (?)";
    const values = [req.body.name, req.body.email, req.body.password];
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
      Message: "We need token please provide it . Login now",
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
// app.get("/", verifyUser, (req, res) => {
//   return res.json({
//     Status: "success",
//     name: req.name,
//   });
// });

export const loginProf = async (req, res) => {
  try {
    const q = "SELECT * FROM signup WHERE email = ? AND password = ?";
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
