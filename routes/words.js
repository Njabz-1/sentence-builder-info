const express = require('express');
const router = express.Router();
const sql = require('mssql');

router.get('/', async (req, res) => {
    try {
        const result = await sql.query('SELECT * FROM Words');
        res.json(result.recordset);
      } catch (err) {
        console.error(err);
        res.status(500).send('Server Error');
      }
  });
  
  router.get('/:type', async (req, res) => {
    try {
      const result = await sql.query(`SELECT * FROM Words WHERE word_type = '${req.params.type}'`);
      res.json(result.recordset);
    } catch (err) {
      console.error(err);
      res.status(500).send('Server Error');
    }
  });
  
  module.exports = router;