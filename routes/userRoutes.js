const express = require('express')
const userController = require('../controllers/userController')

const router = express.Router()

router.get('/', userController.users_get);
router.post('/signup', userController.signup_post);
router.post('/login', userController.login_post);
router.post('/logout', userController.logout_post)
router.get('/status', userController.auth_status)
router.delete('/:id', userController.users_delete);

module.exports = router;