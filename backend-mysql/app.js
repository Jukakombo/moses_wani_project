import express from "express";
import cors from "cors";
const app = express();
import mysql from "mysql";
app.use(express.json());
app.use(cors());
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});
app.get("/", (req, res) => {
  res.json("Hello World!");
});
app.get("/books", (req, res) => {
  const q = "SELECT * FROM books";
  db.query(q, (err, data) => {
    if (err) return res.json(err);
    res.json(data);
  });
});
// create a book

app.post("/books", (req, res) => {
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
});
// delete book
app.delete("/books/:id", (req, res) => {
  const bookId = req.params.id;

  const q = "DELETE FROM books WHERE id =?";

  db.query(q, [bookId], (err, data) => {
    if (err) return res.json(err);
    return res.json("Book has been successfully deleted");
  });
});
// update book

app.put("/books/:id", (req, res) => {
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
});
app.listen(5000, () => {
  console.log("conntected 🚀 to backed http://localhost:5000");
});
