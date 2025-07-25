const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');

router.post('/register', userController.register);
router.post('/login', userController.login);
router.get('/dashboard', userController.authMiddleware, userController.dashboard);

module.exports = router;
