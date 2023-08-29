const postDb = require('../../../application/repositories/postRepository');
const userDb = require('../../../application/repositories/userRepository');
const { createPostSchema } = require('../../../validations/schema/post');

const createPostValidation = require('../../../validations')(createPostSchema);

const createPostUseCase = require('./../../../application/use_cases/post/createPost')({ postDb, createPostValidation });
const updatePostUseCase = require('./../../../application/use_cases/post/updatePost')({ postDb });
const deletePostUseCase = require('./../../../application/use_cases/post/deletePost')({ postDb });
const likePostUseCase = require('./../../../application/use_cases/post/likeAPost')({ postDb });
const getPostUseCase = require('./../../../application/use_cases/post/getPost')({ postDb });
const getTimelineUseCase = require('./../../../application/use_cases/post/getTimeline')({ postDb, userDb });
const getUserPostsUseCase = require('./../../../application/use_cases/post/getUserPosts')({ postDb, userDb });
const postController = require('./postController');

const createPost = postController.createPost(createPostUseCase);
const updatePost = postController.updatePost(updatePostUseCase);
const deletePost = postController.deletePost(deletePostUseCase);
const likePost = postController.LikePost(likePostUseCase);
const getPost = postController.getPost(getPostUseCase);
const getTimeline = postController.getTimeline(getTimelineUseCase);
const getUserPosts = postController.getUserPosts(getUserPostsUseCase);

module.exports = { createPost, updatePost, deletePost, likePost, getPost, getTimeline, getUserPosts };
