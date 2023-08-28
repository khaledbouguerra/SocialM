const response = require('../../../utils/response');
const User = require("../../../framworks/database/mongoDB/models/User");
const Post = require("../../../framworks/database/mongoDB/models/Post");


const getUserPosts = ({ postDb,userDb }) => async (params) => {
    try {
        const username = params.username
        const user = await userDb.findOne({username: username});
        if(!user) return response.recordNotFound()
        const posts = await postDb.findMany({userId: user._id});
        return response.success({data:posts})
    } catch (err) {
        return response.failure();
    }
}
module.exports = getUserPosts;