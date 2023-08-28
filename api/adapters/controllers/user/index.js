const User =require('../../../framworks/database/mongoDB/models/User')
let userDb = require('../../../application/repositories/userRepository');


const { createUserSchema, updateUserSchema,deleteUserSchema } = require('../../../validations/schema/user');

const createValidation = require('../../../validations')(createUserSchema);
const deleteValidation = require('../../../validations')(deleteUserSchema);

const registerUsecase = require('./../../../application/use_cases/user/register')({ userDb, createValidation });
const loginUseCase=require('../../../application/use_cases/user/login')({userDb});
const deleteUserUseCase=require('../../../application/use_cases/user/deleteUser')({userDb});
const findUserUseCase=require('../../../application/use_cases/user/findUser')({userDb});
const getFriendsUseCase=require('../../../application/use_cases/user/getFriends')({userDb});
const followUserUseCase=require('../../../application/use_cases/user/followUser')({userDb});
const unfollowUserUseCase=require('../../../application/use_cases/user/unfollowUser')({userDb});
const updateUserUseCase=require('../../../application/use_cases/user/updateUser')({userDb});

const userController = require('./userController');

const register = userController.register(registerUsecase);
const login=userController.login(loginUseCase);
const deleteUser=userController.deleteUser(deleteUserUseCase);
const findUser=userController.findUser(findUserUseCase);
const getFriends=userController.getFriends(getFriendsUseCase);
const followUser=userController.followUser(followUserUseCase)
const unfollowUser=userController.unfollowUser(unfollowUserUseCase);
const updateUser=userController.updateUser(updateUserUseCase)

module.exports = {register, login,deleteUser,findUser,getFriends,followUser,unfollowUser,updateUser};