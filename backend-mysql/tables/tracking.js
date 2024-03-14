import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all books
export const getTrackings = async (req, res) => {
  try {
    const q = "SELECT * FROM trackings";
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
export const createTracking = async (req, res) => {
  try {
    const q =
      "INSERT INTO trackings (`CourseCode`,`Issue`,`Description`,`status`) VALUES (?)";
    const values = [
      req.body.CourseCode,
      req.body.Issue,
      req.body.Description,
      req.body.Status,
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

export const updateTracking = async (req, res) => {
  try {
    const trackingId = req.params.id;
    const q =
      "UPDATE trackings SET `CourseCode`=?,`Issue`=?,`Description`=?,`status`=? WHERE id=?";
    const values = [
      req.body.CourseCode,
      req.body.Issue,
      req.body.Description,
      req.body.Status,
    ];
    db.query(q, [...values, trackingId], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
//   delete book
export const deleteTracking = async (req, res) => {
  try {
    const trackingId = req.params.id;
    const q = "DELETE FROM trackings WHERE id =?";
    db.query(q, [trackingId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
