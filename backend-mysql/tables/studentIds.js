import mysql from "mysql";
import multer from "multer";

// Database connection
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

db.connect((err) => {
  if (err) {
    console.error("Failed to connect to the database:", err);
  } else {
    console.log("Connected to the database");
  }
});

// handling image upload with mysql express
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    return cb(null, "./public/images");
  },
  filename: function (req, file, cb) {
    return cb(null, `${Date.now()}_${file.originalname}`);
  },
});

export const upload = multer({ storage });

// Function to fetch all student ID cards
export const getStudentIdCards = async (req, res) => {
  try {
    const query = "SELECT * FROM studentids";
    db.query(query, (error, data) => {
      if (error) {
        return res.status(500).json({
          error: `Failed to fetch student ID cards: ${error.message}`,
        });
      }
      res.json(data);
    });
  } catch (err) {
    res.status(500).json({ error: `Internal server error: ${err.message}` });
  }
};

// Function to create a new student ID card
export const createStudentIdCard = async (req, res) => {
  try {
    const q =
      "INSERT INTO studentIds (`studentName`, `schoolCenter`, `classYear`, `indexNumber`, `nationality`, `validTill`, `profilePhoto`, `nationalNumber`) VALUES (?)";
    const values = [
      req.body.studentName,
      req.body.schoolCenter,
      req.body.classYear,
      req.body.indexNumber,
      req.body.nationality,
      req.body.validTill,
      req.file.filename,
      req.body.nationalNumber,
    ];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
export const updateStudentIdCard = async (req, res) => {
  try {
    const studentId = req.params.id;

    // Check if required fields are present in the request body
    const requiredFields = [
      'studentName',
      'schoolCenter',
      'classYear',
      'indexNumber',
      'nationality',
      'validTill',
      'nationalNumber',
    ];
    for (const field of requiredFields) {
      if (!req.body[field]) {
        return res.status(400).json({
          error: `${field} is required for updating student ID card`,
        });
      }
    }

    // SQL query to update the student ID card
    const query =
      "UPDATE studentids SET `studentName`=?, `schoolCenter`=?, `classYear`=?, `indexNumber`=?, `nationality`=?, `validTill`=?, `nationalNumber`=? " +
      (req.file ? ", `fileName`=? " : "") +
      "WHERE id =?";

    // Extract values from the request body
    const {
      studentName,
      schoolCenter,
      classYear,
      indexNumber,
      nationality,
      validTill,
      nationalNumber,
    } = req.body;

    // Values to be updated
    let values = [
      studentName,
      schoolCenter,
      classYear,
      indexNumber,
      nationality,
      validTill,
      nationalNumber,
    ];

    // Check if a file was uploaded with the update request
    if (req.file) {
      values.push(req.file.filename);
    }

    // Push studentId at the end
    values.push(studentId);

    // Execute the SQL query
    db.query(query, values, (err, data) => {
      if (err) {
        return res.status(500).json({
          error: `Failed to update student ID card: ${err.message}`,
        });
      }
      if (data.affectedRows === 0) {
        return res.status(404).json({
          error: `Student ID card with ID ${studentId} not found`,
        });
      }
      res.json({ message: "Student ID card updated successfully" });
    });
  } catch (error) {
    res.status(500).json({
      error: `Internal server error: ${error.message}`,
    });
  }
};


// Function to delete a student ID card
export const deleteStudentIdCard = async (req, res) => {
  const studentId = req.params.id;
  const query = "DELETE FROM studentids WHERE id = ?";
  db.query(query, [studentId], (err, data) => {
    if (err) {
      return res
        .status(500)
        .json({ error: `Failed to delete student ID card: ${err.message}` });
    }
    res.json({ message: "Student ID card deleted successfully" });
  });
};
