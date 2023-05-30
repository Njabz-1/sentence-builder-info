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

sql.connect(dbConfig, function (err) {
  if (err) console.error(err);
  console.log('Database connection established!');
});


app.get('/', (req, res) => {
  res.send('Hello World!');
});

const wordsRouter = require('./routes/words');
const sentencesRouter = require('./routes/sentences');

app.use('/words', wordsRouter);
app.use('/sentences', sentencesRouter);

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});