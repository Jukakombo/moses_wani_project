import mysql from "mysql";
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
export const loginProf = async (req, res) => {
  try {
    const q = "SELECT * FROM signup WHERE email = ? AND password = ?"; 
    db.query(q, [req.body.email, req.body.password], (err, data) => {
      if (err) {
        return res.json("Error");
      }
      if (data.length > 0) {
        return res.json("success");
      } else {
        return res.json("Fail");
      }
    });
  } catch (error) {
    return res.json("Error");
  }
};
