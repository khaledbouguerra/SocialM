const response = require('../../../utils/response');
const followUser =
  ({ userDb }) =>
  async (params) => {
    if (params.userId !== params.id) {
      try {
        const user = await userDb.findById(params.id);
        const currentUser = await userDb.findById(params.userId);
        if (!user.followers.includes(params.userId)) {
          await user.updateOne({ $push: { followers: params.userId } });
          await currentUser.updateOne({ $push: { followings: params.id } });
          return response.success({ message: 'user has been followed' });
        } else {
          return response.badRequest({ message: 'you already follow this user' });
        }
      } catch (err) {
        console.log('err ', err);
        return response.failure();
      }
    } else {
      return response.badRequest({ message: 'You cannot follow yourself' });
    }
  };
module.exports = followUser;
