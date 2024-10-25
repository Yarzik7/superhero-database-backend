const {
  getAllSuperheroesService,
  getSuperheroByIdService,
  createSuperheroesService,
  updateSuperheroByIdService,
  deleteSuperheroByIdService,
} = require('../services/superheroServices');
const controllerWrapper = require('../utils/controllerWrapper');

const getAllSuperheroesController = controllerWrapper(async (_, res) => {
  console.log('getAllSuperheroesController');
  res.json(await getAllSuperheroesService());
});

const getSuperheroByIdController = controllerWrapper(async (req, res) => {
  const { superheroId } = req.params;
  res.json(await getSuperheroByIdService(superheroId));
});

const createSuperheroController = controllerWrapper(async (req, res) => {
  res.status(201).json(await createSuperheroesService(req.body));
});

const updateSuperheroByIdController = controllerWrapper(async (req, res) => {
  const { superheroId } = req.params;
  res.json(await updateSuperheroByIdService(superheroId, req.body));
});

const deleteSuperheroByIdController = controllerWrapper(async (req, res) => {
  const { superheroId } = req.params;
  res.json(await deleteSuperheroByIdService(superheroId));
});

module.exports = {
  getAllSuperheroesController,
  getSuperheroByIdController,
  createSuperheroController,
  updateSuperheroByIdController,
  deleteSuperheroByIdController,
};
