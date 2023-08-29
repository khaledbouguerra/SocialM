const response = require('../../../utils/response');
const bcrypt = require('bcrypt');
const updateUser =
  ({ userDb }) =>
  async (params) => {
    if (params.body.userId === params.id || params.body.isAdmin) {
      if (params.password) {
        try {
          const salt = await bcrypt.genSalt(10);
          params.body.password = await bcrypt.hash(params.body.password, salt);
        } catch (err) {
          return response.failure();
        }
      }
      try {
        const user = await userDb.updateOneById(params.id, {
          $set: params.body,
        });
        return response.success({ data: user, message: 'Account has been updated' });
      } catch (err) {
        console.log('error ', err);
        return response.failure();
      }
    } else {
      return response.badRequest({ message: 'You can delete only your account!' });
    }
  };
module.exports = updateUser;
