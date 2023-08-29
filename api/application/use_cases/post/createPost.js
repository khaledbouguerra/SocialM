const response = require('../../../utils/response');
const Post = require('../../../src/entities/post');

const createPost =
  ({ postDb, createPostValidation }) =>
  async (params) => {
    const validateSchema = await createPostValidation(params);

    if (!validateSchema.isValid) {
      return response.validationError({ message: validateSchema.message });
    }
    const newPost = new Post(params);
    try {
      const savedPost = await postDb.create(newPost);
      return response.success({ data: savedPost });
    } catch (err) {
      return response.failure();
    }
  };
module.exports = createPost;
