const express = require('express');

const router = express.Router();

const pets = [];

router.get('/animals', (req, res) => {
  res.send(pets);
});

router.post('/animals', (req, res) => {
  console.log('receiving data...');
  console.log('Body is ', req.body);
  pets.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
