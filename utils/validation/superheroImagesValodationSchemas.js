const Joi = require('joi');

const createSuperheroImagesValidationSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  original_description: Joi.string().required(),
  superpowers: Joi.array().items(Joi.string()).required(),
  catch_phrase: Joi.string().required(),
});

const deleteSuperheroImagesValidationSchema = Joi.object({
  nickname: Joi.string(),
  real_name: Joi.string(),
  original_description: Joi.string(),
  superpowers: Joi.array().items(Joi.string()),
  catch_phrase: Joi.string(),
});

module.exports = { createSuperheroImagesValidationSchema, deleteSuperheroImagesValidationSchema };
