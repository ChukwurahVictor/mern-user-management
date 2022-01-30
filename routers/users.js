const router = require('express').Router();

const {
   fetchAllUsers,
   fetchUser,
   createUser,
   updateUser,
   deleteUser
} = require('../controllers/users');

// routes
router.route('/').get(fetchAllUsers);
router.route('/:userId').get(fetchUser);
router.route('/').post(createUser);
router.route('/:userId').patch(updateUser);
router.route('/:userId').delete(deleteUser);


module.exports = router;