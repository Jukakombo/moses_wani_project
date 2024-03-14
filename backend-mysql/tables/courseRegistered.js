import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all courses
export const getCourseRegister = async (req, res) => {
  try {
    const q = "SELECT * FROM coursesRegistered";
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
//   create course
export const createCourse = async (req, res) => {
  try {
    const q =
      "INSERT INTO coursesRegistered (`RegNo`,`FirstName`,`LastName`,`Course1`,`Course2`,`Course3`,`Course4`,`Course5`,`Course6`,`Course7`,`Course8`,`Course9`,`Course10`) VALUES (?)";
    const values = [
      req.body.RegNo,
      req.body.FirstName,
      req.body.LastName,
      req.body.Course1,
      req.body.Course2,
      req.body.Course3,
      req.body.Course4,
      req.body.Course15,
      req.body.Course16,
      req.body.Course7,
      req.body.Course8,
      req.body.Course9,
      req.body.Course10,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
// update course

export const updateCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const q =
      "UPDATE coursesRegistered SET `RegNo` =?, `FirstName` =?, `LastName` =?, `Course1` =?,`Course2` =?,`Course3` =?,`Course4` =?,`Course5` =?,`Course6` =?,`Course7` =?, `Course8` =?,`Course9` =?,`Course10` =? WHERE id =?";
    const values = [
      req.body.RegNo,
      req.body.FirstName,
      req.body.LastName,
      req.body.Course1,
      req.body.Course2,
      req.body.Course3,
      req.body.Course4,
      req.body.Course15,
      req.body.Course16,
      req.body.Course7,
      req.body.Course8,
      req.body.Course9,
      req.body.Course10,
    ];
    db.query(q, [...values, courseId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book has been successfully updated");
    });
  } catch (error) {
    res.json(error);
  }
};
//   delete book
export const deleteCourse = async (req, res) => {
  try {
    const courseId = req.params.id;
    const q = "DELETE FROM coursesRegistered WHERE id =?";
    db.query(q, [courseId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Course has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
