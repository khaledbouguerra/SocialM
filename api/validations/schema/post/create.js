const Joi = require('joi');

const createSchema = Joi.object({
    userId: Joi.string()
        .alphanum()
        .required(),
    desc:Joi.string(),
    img: Joi.string()
});
module.exports = createSchema;