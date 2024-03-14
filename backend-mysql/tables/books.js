import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all books
export const getBooks = async (req, res) => {
  try {
    const q = "SELECT * FROM books";
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
export const createBook = async (req, res) => {
  try {
    const q = "INSERT INTO books (`title`,`desc`,`price`,`cover`) VALUES (?)";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
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

export const updateBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const q =
      "UPDATE books SET `title` =?, `desc` =?, `price` =?, `cover` =? WHERE id =?";
    const values = [
      req.body.title,
      req.body.desc,
      req.body.price,
      req.body.cover,
    ];
    db.query(q, [...values, bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book has been successfully updated");
    });
  } catch (error) {
    res.json(error);
  }
};
//   delete book
export const deleteBook = async (req, res) => {
  try {
    const bookId = req.params.id;
    const q = "DELETE FROM books WHERE id =?";
    db.query(q, [bookId], (err, data) => {
      if (err) return res.json(err);
      return res.json("Book has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
