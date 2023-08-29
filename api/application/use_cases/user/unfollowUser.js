const response = require('../../../utils/response');
const unfollowUser =
  ({ userDb }) =>
  async (params) => {
    if (params.userId !== params.id) {
      try {
        const user = await userDb.findById(params.id);
        const currentUser = await userDb.findById(params.userId);
        if (user.followers.includes(params.userId)) {
          await user.updateOne({ $pull: { followers: params.userId } });
          await currentUser.updateOne({ $pull: { followings: params.id } });
          return response.success({ message: 'user has been unfollowed' });
        } else {
          return response.badRequest({ message: 'your are not following this user' });
        }
      } catch (err) {
        return response.failure();
      }
    } else {
      return response.badRequest({ message: 'you cannot follow yourself' });
    }
  };
module.exports = unfollowUser;
