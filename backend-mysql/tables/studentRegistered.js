import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all books
export const getstudents = async (req, res) => {
  try {
    const q = "SELECT * FROM studentsRegistered";
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
//   create tracking
export const createStudent = async (req, res) => {
  try {
    const q =
      "INSERT INTO studentsRegistered (`RegNumber`,`Title`,`FirstName`,`LastName`,`OtherName`,`DateOfBirth`,`Gender`,`MaritalStatus`,`Nationality`,`StateOfOrigin`,`LGA`,`TownOfOrigin`,`Address`,`Email`,`Mobile`,`GuardianName`,`GuardianNumber`,`GuardianAddress`,`Faculty`,`Department`,`Level`,`Onleave`,`Onsuspension`,`Expelled`,`Hostel`,`OffCampus`,`MentorName`,`MentorNumber`,`MentorDepartment`,`Passport`,`Total`) VALUES (?)";
    const values = [
      req.body.RegNumber,
      req.body.Title,
      req.body.FirstName,
      req.body.LastName,
      req.body.OtherName,
      req.body.DateOfBirth,
      req.body.Gender,
      req.body.MaritalStatus,
      req.body.Nationality,
      req.body.StateOfOrigin,
      req.body.LGA,
      req.body.TownOfOrigin,
      req.body.Address,
      req.body.Email,
      req.body.Mobile,
      req.body.GuardianName,
      req.body.GuardianNumber,
      req.body.GuardianAddress,
      req.body.Faculty,
      req.body.Department,
      req.body.Level,
      req.body.Onleave,
      req.body.Onsuspension,
      req.body.Expelled,
      req.body.Hostel,
      req.body.OffCampus,
      req.body.MentorName,
      req.body.MentorNumber,
      req.body.MentorDepartment,
      req.body.Passport,
      req.body.Total,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
// update tracking

export const updateStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const q =
      "UPDATE studentsRegistered SET `RegNumber`=?,`Title`=?,`FirstName`=?,`LastName`=?,`OtherName`=?,`DateOfBirth`=?,`Gender`=?,`MaritalStatus`=?,`Nationality`=?,`StateOfOrigin`=?,`LGA`=?,`TownOfOrigin`=?,`Address`=?,`Email`=?,`Mobile`=?,`GuardianName`=?,`GuardianNumber`=?,`GuardianAddress`=?,`Faculty`=?,`Department`=?,`Level`=?,`Onleave`=?,`Onsuspension`=?,`Expelled`=?,`Hostel`=?,`OffCampus`=?,`MentorName`=?,`MentorNumber`=?,`MentorDepartment`=?,`Passport`=?,`Total`=? WHERE id=?";
    const values = [
      req.body.RegNumber,
      req.body.Title,
      req.body.FirstName,
      req.body.LastName,
      req.body.OtherName,
      req.body.DateOfBirth,
      req.body.Gender,
      req.body.MaritalStatus,
      req.body.Nationality,
      req.body.StateOfOrigin,
      req.body.LGA,
      req.body.TownOfOrigin,
      req.body.Address,
      req.body.Email,
      req.body.Mobile,
      req.body.GuardianName,
      req.body.GuardianNumber,
      req.body.GuardianAddress,
      req.body.Faculty,
      req.body.Department,
      req.body.Level,
      req.body.Onleave,
      req.body.Onsuspension,
      req.body.Expelled,
      req.body.Hostel,
      req.body.OffCampus,
      req.body.MentorName,
      req.body.MentorNumber,
      req.body.MentorDepartment,
      req.body.Passport,
      req.body.Total,
    ];
    db.query(q, [...values, studentId], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
//   delete book
export const deleteStudent = async (req, res) => {
  try {
    const studentId = req.params.id;
    const q = "DELETE FROM studentsRegistered WHERE id =?";
    db.query(q, [studentId], (err, data) => {
      if (err) return res.json(err);
      return res.json("student has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
