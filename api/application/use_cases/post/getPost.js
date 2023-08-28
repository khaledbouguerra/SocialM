const response = require('../../../utils/response');


const getPostById = ({ postDb }) => async (params) => {
    try {
        const post = await postDb.findById(params.id);
        if(!post) return response.recordNotFound();
        const {createdAt, _id, ...otherAttrs} = post?._doc;
        return response.success({data:otherAttrs})
    } catch (err) {
        console.log('error ', err);
        return response.failure();
    }

}
module.exports = getPostById;