const createPost=(createPostUseCase)=>async(req,res)=>{
    const params=req.body;
    const response =await createPostUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}

const updatePost=(updatePostUseCase)=>async(req,res)=> {
    const params = {body: req.body, id: req.params.id};
    const response = await updatePostUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}

const deletePost=(deletePostUseCase)=>async(req,res)=> {
    const params = {userId: req.body.userId, id: req.params.id};
    const response = await deletePostUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}

const LikePost=(likePostUseCase)=>async(req,res)=> {
    const params = {userId: req.body.userId, id: req.params.id};
    const response = await likePostUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}

const getPost=(getPostUseCase)=>async(req,res)=> {
    const params=req.params;
    const response = await getPostUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}

const getTimeline=(getTimelineUseCase)=>async(req,res)=> {
    const params=req.params;
    const response = await getTimelineUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}

const getUserPosts=(getUserPostsUseCase)=>async(req,res)=> {
    const params=req.params;
    const response = await getUserPostsUseCase(params)
    return res.set(response.headers).status(response.statusCode).send(response.body)
}


module.exports={ createPost,updatePost,deletePost,LikePost,getPost,getTimeline,getUserPosts }