// init_db.js
const sqlite3 = require('sqlite3').verbose();

let db = new sqlite3.Database('./passwords.db');

db.serialize(() => {
  db.run(`CREATE TABLE IF NOT EXISTS user_passwords (
    user_id INTEGER NOT NULL,
    password_hash TEXT NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (user_id, password_hash)
  )`);
});

db.close();
