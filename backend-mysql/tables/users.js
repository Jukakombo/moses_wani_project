import mysql from "mysql";
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
//   create book
export const createUser = async (req, res) => {
  try {
    const q =
      "INSERT INTO users (`course`,`courseCode`,`department`,`level`,`email`,`password`,`mobile`,`status`) VALUES (?)";
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
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
// update book

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
