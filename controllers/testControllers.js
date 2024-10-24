const { getAllSuperheroesService } = require('../services/superheroServices');
const controllerWrapper = require('../utils/controllerWrapper');

const testControllers = controllerWrapper(async (req, res) => {
  const superheroes = await getAllSuperheroesService();
  console.log('Superheroes in controller: ', superheroes);
  res.status(200).json({ response: 'Hi and to you!)', yourReq: req.body, superheroes });
});

module.exports = { testControllers };
