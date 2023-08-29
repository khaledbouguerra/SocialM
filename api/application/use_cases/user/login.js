const response = require('../../../utils/response');
const bcrypt = require('bcrypt');

const login =
  ({ userDb }) =>
  async (params) => {
    try {
      const user = await userDb.findOne({ email: params.email });
      if (!user) {
        return response.unAuthorized();
      }
      const validPassword = await bcrypt.compare(params.password, user.password);
      if (!validPassword) {
        return response.unAuthorized();
      }
      return response.success({ data: user });
    } catch (err) {
      return response.failure();
    }
  };
module.exports = login;
