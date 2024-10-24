const Joi = require('joi');

const createSuperheroValidationSchema = Joi.object({
  nickname: Joi.string().required(),
  real_name: Joi.string().required(),
  original_description: Joi.string().required(),
  superpowers: Joi.array().items(Joi.string()).required(),
  catch_phrase: Joi.string().required(),
  //   images: Joi.array().items(Joi.string().uri()).required(),
});

module.exports = { createSuperheroValidationSchema };
