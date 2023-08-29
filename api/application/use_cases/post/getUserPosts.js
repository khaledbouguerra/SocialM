const response = require('../../../utils/response');

const getUserPosts =
  ({ postDb, userDb }) =>
  async (params) => {
    try {
      const username = params.username;
      const user = await userDb.findOne({ username });
      if (!user) return response.recordNotFound();
      const posts = await postDb.findMany({ userId: user._id });
      return response.success({ data: posts });
    } catch (err) {
      return response.failure();
    }
  };
module.exports = getUserPosts;
