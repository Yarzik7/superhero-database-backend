const HttpError = require('../utils/HttpError');
const Superhero = require('../models/superheroModel');
const mongoose = require('mongoose');

const getAllSuperheroesService = async () => {
  const res = await Superhero.find();
  return res;
};

const getSuperheroByIdService = async superheroId => {
  if (!mongoose.Types.ObjectId.isValid(superheroId)) {
    throw new HttpError(400, 'Invalid superhero ID');
  }

  const superhero = await Superhero.findById(superheroId);

  if (!superhero) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  return superhero;
};

const createSuperheroesService = async body => {
  const createResult = await Superhero.create(body);
  const createdSuperhero = createResult.toObject();
  delete createdSuperhero.__v;
  return createdSuperhero;
};

const updateSuperheroByIdService = async (superheroId, body) => {
  if (!mongoose.Types.ObjectId.isValid(superheroId)) {
    throw new HttpError(400, 'Invalid superhero ID');
  }

  const updatedSuperhero = await Superhero.findByIdAndUpdate(superheroId, body, { new: true });

  if (!updatedSuperhero) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  return updatedSuperhero;
};

const deleteSuperheroByIdService = async superheroId => {
  if (!mongoose.Types.ObjectId.isValid(superheroId)) {
    throw new HttpError(400, 'Invalid superhero ID');
  }

  const deletedSuperhero = await Superhero.findByIdAndDelete(superheroId);

  if (!deletedSuperhero) {
    throw new HttpError(404, 'This superhero does not exist');
  }

  return deletedSuperhero;
};

module.exports = {
  getAllSuperheroesService,
  getSuperheroByIdService,
  createSuperheroesService,
  updateSuperheroByIdService,
  deleteSuperheroByIdService,
};
