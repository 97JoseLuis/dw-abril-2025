const express = require('express');
const { getDashboard } = require('../controllers/dashboardController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

const router = express.Router();

router.get('/dashboard', isAuthenticated, getDashboard);

module.exports = router;