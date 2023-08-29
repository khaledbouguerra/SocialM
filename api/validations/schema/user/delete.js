const Joi = require('joi');

const deleteSchema = Joi.object({
  userId: Joi.string().alphanum().required(),
});
module.exports = deleteSchema;
