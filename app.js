require('dotenv').config();

const express = require('express');
const sql = require('mssql');

const app = express();
app.use(express.json());
const port = process.env.PORT || 3000;

// Database configuration
const dbConfig = {
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  server: process.env.DB_SERVER,
  database: process.env.DB_NAME,
  options: {
    encrypt: true,
    enableArithAbort: true
  }
};

const sqlConnectPromise = new Promise((resolve, reject) => {
  sql.connect(dbConfig, function (err) {
    if (err) reject(err);
    console.log('Database connection established!');
    resolve();
  });
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

const wordsRouter = require('./routes/words');
const sentencesRouter = require('./routes/sentences');

app.use('/words', wordsRouter);
app.use('/sentences', sentencesRouter);

const serverPromise = new Promise((resolve, reject) => {
  const server = app.listen(port, () => {
    console.log(`Server listening at http://localhost:${port}`);
    resolve(server);
  });
  server.on('error', reject);
});

async function closeDatabaseConnection() {
  await sql.close();
}

module.exports = { serverPromise, sqlConnectPromise, closeDatabaseConnection };