const User = require('../../../src/entities/user');
const response = require('../../../utils/response');
const bcrypt = require('bcrypt');

const create =
  ({ userDb, createValidation }) =>
  async (params) => {
    try {
      console.log('params ', params);
      const validateSchema = await createValidation(params);

      if (!validateSchema.isValid) {
        return response.validationError({ message: validateSchema.message });
      }
      // generate new password
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(params.password, salt);

      // create new user
      const newUser = new User({
        username: params.username,
        email: params.email,
        password: hashedPassword,
      });
      const user = await userDb.create(newUser);
      console.log('In DB', newUser, user);
      return response.success({ data: user });
    } catch (error) {
      return response.failure();
    }
  };
module.exports = create;
