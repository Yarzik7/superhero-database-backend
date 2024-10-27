const { Schema, model } = require('mongoose');
const mongooseErrorHandler = require('../middlewares/mongooseErrorHandler');

const superheroSchema = new Schema(
  {
    nickname: { type: String, required: [true, 'Set nickname for superhero'] },
    real_name: { type: String, required: [true, 'Set real name for superhero'] },
    original_description: { type: String, required: [true, 'Add description for superhero'] },
    superpowers: { type: [String], required: [true, 'Add superpowers for superhero'] },
    catch_phrase: { type: String, required: [true, 'Add catch phrase for superhero'] },
  },
  { versionKey: false }
);

superheroSchema.post('save', mongooseErrorHandler);

const Superhero = model('superheroes', superheroSchema);

module.exports = Superhero;
