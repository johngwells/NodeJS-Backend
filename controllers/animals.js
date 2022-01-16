const express = require('express');

const router = express.Router();

const pets = [];

router.get('/', (req, res) => {
  res.send(pets);
});

router.get('/:id', (req, res) => {
  const petId = +req.params.id;
  const filteredPet = pets.find(p => p.id === petId);

  const err = new Error('Pet id does not exist');
  if (!filteredPet) {
    return res.status(404).send(err.message);
  }

  console.log('filtered', filteredPet);

  res.json({
    id: petId,
    ...filteredPet
  });
});

router.post('/', (req, res) => {
  // console.log('receiving data...');
  // console.log('Body is ', req.body);
  pets.push(req.body);
  res.sendStatus(200);
});

module.exports = router;
