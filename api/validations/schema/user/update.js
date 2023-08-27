const Joi = require('joi');

const createSchema = Joi.object({
    userId: Joi.string()
        .alphanum()
        .required(),
    password:Joi.string()
        .alphanum()
        .min(3)
        .required(),
});
module.exports = createSchema;