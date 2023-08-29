const router = require('express').Router();
const {
  deleteUser,
  findUser,
  getFriends,
  followUser,
  unfollowUser,
  updateUser,
} = require('../../../adapters/controllers/user');

// update user
router.put('/:id', updateUser);
// delete user
router.delete('/:id', deleteUser);

// get a user
router.get('/', findUser);

// get friends
router.route('/friends/:userId').get(getFriends);

// follow a user
router.route('/:id/follow').put(followUser);

// unfollow a user
router.route('/:id/unfollow').put(unfollowUser);

module.exports = router;
