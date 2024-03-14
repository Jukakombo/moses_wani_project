import mysql from "mysql";
const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "admin",
  database: "test",
});

//   fetch all Settings
export const getSettings = async (req, res) => {
  try {
    const q = "SELECT * FROM settings";
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
//   create Setting
export const createSetting = async (req, res) => {
  try {
    const q =
      "INSERT INTO settings (`siteLogo`,`siteName`,`pageBack`) VALUES (?)";
    const values = [req.body.siteLogo, req.body.siteName, req.body.pageBack];
    db.query(q, [values], (err, data) => {
      if (err) return res.json(err);
      return res.json(data);
    });
  } catch (error) {
    res.json(error);
  }
};
// update Setting

export const updateSetting = async (req, res) => {
  try {
    const settingId = req.params.id;
    const q =
      "UPDATE settings SET `siteLogo` =?, `siteName` =?, `pageBack` =?  WHERE id =?";
      const values = [req.body.siteLogo, req.body.siteName, req.body.pageBack];

    db.query(q, [...values, settingId], (err, data) => {
      if (err) return res.json(err);
      return res.json("SettingId has been successfully updated");
    });
  } catch (error) {
    res.json(error);
  }
};
//   delete setting
export const deleteSetting = async (req, res) => {
  try {
    const settingId = req.params.id;
    const q = "DELETE FROM settings WHERE id =?";
    db.query(q, [settingId], (err) => {
      if (err) return res.json(err);
      return res.json("SettingId has been successfully deleted");
    });
  } catch (error) {
    res.json(error);
  }
};
