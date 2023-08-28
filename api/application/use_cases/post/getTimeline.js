const response = require('../../../utils/response');


const getTimeLine = ({ postDb,userDb }) => async (params) => {
    try {

        const currentUser = await userDb.findById(params.userId);
        if(!currentUser ) return response.recordNotFound();
        const userPosts = await postDb.findMany({userId: currentUser._id});
        const friendPosts = await Promise.all(
            currentUser.followings.map((friendId) => {
                return postDb.find({userId: friendId})
            })
        )
        return response.success({data:userPosts.concat(...friendPosts)})
    } catch (err) {
        return response.failure();
    }

}
module.exports = getTimeLine;