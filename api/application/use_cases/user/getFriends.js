const response = require('../../../utils/response');

const getFriends =
  ({ userDb }) =>
  async (params) => {
    try {
      const user = await userDb.findById(params.userId);
      const friends = await Promise.all(
        user.followings.map((friendId) => {
          return userDb.findById(friendId);
        }),
      );
      const friendList = [];
      friends.map((friend) => {
        const { _id, username, profilePicture } = friend;
        return friendList.push({ _id, username, profilePicture });
      });
      return response.success({ data: friendList });
    } catch (err) {
      return response.failure();
    }
  };
module.exports = getFriends;
