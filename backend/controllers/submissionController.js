const Submission = require('../models/submissionModel');

// Create submission
const createSubmission = async (req, res) => {
  const { name, country, company, questions } = req.body;
  const userId = req.user.id;

  try {
    const submission = await Submission.create({ name, country, company, questions, userId });
    res.status(201).json(submission);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all submissions
const getSubmissions = async (req, res) => {
  try {
    const submissions = await Submission.find();
    res.status(200).json(submissions);
  } catch (error) {
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

module.exports = { createSubmission, getSubmissions };
