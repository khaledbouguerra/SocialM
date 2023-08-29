const response = require('../../../utils/response');

const findUser =
  ({ userDb }) =>
  async (params) => {
    const userId = params.userId;
    const username = params.username;
    console.log('params ', params);
    try {
      const user = userId ? await userDb.findById(userId) : await userDb.findOne({ username });
      const { password, updatedAt, ...other } = user._doc;
      return response.success({ data: other });
    } catch (err) {
      return response.failure();
    }
  };
module.exports = findUser;
