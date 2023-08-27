const Joi = require('joi');

const createSchema = Joi.object({
    username: Joi.string()
        .alphanum()
        .min(3)
        .max(30)
        .required(),
   password:Joi.string()
       .alphanum()
       .min(3)
       .required(),
    email: Joi.string()
        .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } })
        .required(),
});
module.exports = createSchema;