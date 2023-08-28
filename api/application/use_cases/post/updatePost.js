const response = require('../../../utils/response');

const updatePost = ({ postDb,createPostValidation }) => async (params) => {
/*    const validateSchema = await createPostValidation(params);

    if (!validateSchema.isValid) {
        return response.validationError({ message: validateSchema.message });
    }*/
    try {
        const post = await postDb.updateOneById(params.id, {
            $set: params.body
        });
        return response.success({data:post,message:'post updated'})
    } catch (err) {
        return response.failure()
    }

}
module.exports = updatePost;