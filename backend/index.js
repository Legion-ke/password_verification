const express = require('express');
const bodyParser = require('body-parser');
const sqlite3 = require('sqlite3').verbose();
const { hashPassword, comparePassword } = require('./passwordUtils');

const app = express();
const port = 3000;

app.use(bodyParser.json());
app.use(express.static('public'));

// Create and initialize the database
let db = new sqlite3.Database('./passwords.db', (err) => {
  if (err) {
    console.error(err.message);
  }
  console.log('Connected to the passwords database.');
});

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS users (
    username TEXT PRIMARY KEY,
    password_hash TEXT NOT NULL
  )`);
});

app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const hashedPassword = await hashPassword(password);

  db.run('INSERT INTO users (username, password_hash) VALUES (?, ?)', [username, hashedPassword], (err) => {
    if (err) {
      res.status(400).send("User already exists or error occurred.");
    } else {
      res.send("User registered successfully.");
    }
  });
});

app.post('/change-password', async (req, res) => {
  const { username, newPassword } = req.body;

  db.get('SELECT password_hash FROM users WHERE username = ?', [username], async (err, row) => {
    if (err || !row) {
      res.status(400).send("User not found.");
      return;
    }

    const isReused = await comparePassword(newPassword, row.password_hash);
    if (isReused) {
      res.send("Password has been used before. Please choose a different password.");
    } else {
      const newHashedPassword = await hashPassword(newPassword);
      db.run('UPDATE users SET password_hash = ? WHERE username = ?', [newHashedPassword, username], (err) => {
        if (err) {
          res.status(500).send("Error updating password.");
        } else {
          res.send("Password changed successfully.");
        }
      });
    }
  });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
