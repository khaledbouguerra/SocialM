const register = (registerUsecase) => async (req, res) => {
  const response = await registerUsecase(req.body);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

const login = (loginUsecase) => async (req, res) => {
  const response = await loginUsecase(req.body);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

const deleteUser = (deleteUserUseCase) => async (req, res) => {
  const response = await deleteUserUseCase(req.params);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

const findUser = (findUserUseCase) => async (req, res) => {
  const params = { username: req.query.username, userId: req.query.userId };
  const response = await findUserUseCase(params);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

const getFriends = (getFriendsUseCase) => async (req, res) => {
  const response = await getFriendsUseCase(req.params);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

const followUser = (followUserUseCase) => async (req, res) => {
  const params = { userId: req.body.userId, id: req.params.id };
  const response = await followUserUseCase(params);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

const unfollowUser = (unFollowUserUseCase) => async (req, res) => {
  const params = { userId: req.body.userId, id: req.params.id };
  const response = await unFollowUserUseCase(params);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};
const updateUser = (updateUserUseCase) => async (req, res) => {
  const params = { body: req.body, id: req.params.id };
  const response = await updateUserUseCase(params);
  return res.set(response.headers).status(response.statusCode).send(response.body);
};

module.exports = { register, login, deleteUser, findUser, getFriends, followUser, unfollowUser, updateUser };
