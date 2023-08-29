const response = require('../../../utils/response');

const deletePost =
  ({ postDb }) =>
  async (params) => {
    try {
      console.log('params ', params);
      const post = await postDb.findById(params.id);
      if (!post) return response.recordNotFound();
      if (post.userId === params.userId) {
        await post.deleteOne(params);
        return response.success({ message: 'post has been deleted' });
      } else {
        return response.failure({ message: 'you can delete only your post' });
      }
    } catch (err) {
      return response.failure({ message: err });
    }
  };
module.exports = deletePost;
