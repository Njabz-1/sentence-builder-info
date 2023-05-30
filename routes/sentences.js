const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.get('/', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Sentences');
        res.json(result.recordset);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
});

router.post('/', async (req, res) => {
    try {
        const { sentence } = req.body; 

        const insertQuery = `INSERT INTO Sentences (sentence, creation_date) VALUES (@sentence, GETDATE())`;

        let preparedStatement = new sql.PreparedStatement();
        preparedStatement.input('sentence', sql.NVarChar);
        await preparedStatement.prepare(insertQuery);

        let insertResult = await preparedStatement.execute({ sentence: sentence });
        await preparedStatement.unprepare();

        res.json({ message: 'Sentence added successfully' });
    }
    catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
    }
});


module.exports = router;