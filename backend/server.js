const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(express.json());

const connection = mysql.createConnection({
  host: "jd_mysql_db",
  user: "root",
  password: "Jemmy.mysql",
  database: "Docker"
  });
  
connection.connect(function(err) {
  if (err) {
      console.log(err);
  } else {
      console.log("Connected to database");
  }
  });


app.post('/api/students', (req, res) => {
  const { name, email, number, description } = req.body;
  
  const sql = 'INSERT INTO students (name, email, number, description) VALUES (?, ?, ?, ?)';
  connection.query(sql, [name, email, number, description], (err, result) => {
    if (err) {
      console.error('Error executing SQL query:', err);
      res.status(500).json({ success: false, message: 'Internal Server Error' });
      return;
    }
    console.log('Student data inserted successfully');
    res.json({ success: true, message: 'Student data inserted successfully' });
  });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
