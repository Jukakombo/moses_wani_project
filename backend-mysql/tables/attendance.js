import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all books
export const getAttendances = async (req, res) => {
  try {
    const q = "SELECT * FROM attendances";
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
export const createAttendance = async (req, res) => {
  try {
    const q =
      "INSERT INTO attendances (`studentName`,`rollNumber`,`status`,`timestamps`,`professorName`,`subject`) VALUES (?)";
    const values = [
      req.body.studentName,
      req.body.rollNumber,
      req.body.status,
      req.body.timestamps,
      req.body.professorName,
      req.body.subject,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
// update attendances

export const updateAttendance = async (req, res) => {
  try {
    const bookId = req.params.id;
    const q =
      "UPDATE attendances SET `studentName` = ?, `rollNumber` = ?, `status` = ?, `timestamps` = ?, `professorName` = ?, `subject` = ? WHERE id = ?";
    const values = [
      req.body.studentName,
      req.body.rollNumber,
      req.body.status,
      req.body.timestamps,
      req.body.professorName,
      req.body.subject,
    ];
    db.query(q, [...values, bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Attendance has been successfully updated");
    });
  } catch (error) {
    res.json(error);
  }
};

//   delete book
export const deleteAttendance = async (req, res) => {
  try {
    const attendanceID = req.params.id;
    const q = "DELETE FROM attendances WHERE id =?";
    db.query(q, [attendanceID], (err, data) => {
      if (err) return res.json(err);
      return res.json("Attendance has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
