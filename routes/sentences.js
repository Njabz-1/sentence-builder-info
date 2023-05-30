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

module.exports = router;