const response = require('../../../utils/response');

const likePost =
  ({ postDb }) =>
  async (params) => {
    try {
      const post = await postDb.findById(params.id);
      if (!post) return response.recordNotFound({ message: 'post does not exist' });
      if (!post.likes.includes(params.userId)) {
        await post.updateOne({ $push: { likes: params.userId } });
        return response.success({ message: 'post liked' });
      } else {
        await post.updateOne({ $pull: { likes: params.userId } });
        return response.success({ message: 'post disliked' });
      }
    } catch (err) {
      return response.failure();
    }
  };
module.exports = likePost;
