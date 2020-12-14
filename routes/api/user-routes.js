const router = require('express').Router();

const {
  getAllUser,
  getUserById,
  createUser,
  updateUser,
  deleteUser
} = require('../../controllers/user-controller');

// /api/pizzas
router
  .route('/')
  .get(getAllUser)
  .post(createUser);

// /api/pizzas/:id
router
  .route('/:userId')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

  router
  .route('/:userId/friends/:friendId')
  .post(createUser)
  .delete(deleteUser);

module.exports = router;