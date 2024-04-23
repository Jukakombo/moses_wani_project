import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});
//   fetch all contacts
export const getAllContacts = async (req, res) => {
  try {
    const q = "SELECT * FROM contacts";
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

// creating a contact
export const createContacts = async (req, res) => {
  try {
    const q =
      "INSERT INTO contacts (`firstName`,`lastName`,`email`,`phone`,`subject`,`message`) VALUES (?)";
    const values = [
      req.body.firstName,
      req.body.lastName,
      req.body.email,
      req.body.phone,
      req.body.subject,
      req.body.message,
    ];

    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};

// delete contact
export const deleteContact = async (req, res) => {
  try {
    const contactId = req.params.id;
    const q = "DELETE FROM contacts WHERE id =?";
    db.query(q, [contactId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Contact successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
