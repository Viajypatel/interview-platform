const express = require('express');
const { createSubmission, getSubmissions } = require('../controllers/submissionController');
const authMiddleware = require('../middleware/authMiddlware');

const router = express.Router();

router.post('/', authMiddleware, createSubmission);
router.get('/', getSubmissions);

module.exports = router;
