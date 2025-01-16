import React, { useState, useContext } from "react";
import { SubmissionContext } from "../../context/SubmissionContext";
import "../../styles/Submissions.css";

const SubmissionForm = () => {
  const { addSubmission } = useContext(SubmissionContext);
  const [company, setCompany] = useState("");
  const [country, setCountry] = useState("");
  const [questions, setQuestions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const questionList = questions.split(",").map((q) => q.trim());
    addSubmission({ company, country, questions: questionList });
  };

  return (
    <form className="submission-form" onSubmit={handleSubmit}>
      <h2>Submit Your Experience</h2>
      <input
        type="text"
        placeholder="Company"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
      />
      <input
        type="text"
        placeholder="Country"
        value={country}
        onChange={(e) => setCountry(e.target.value)}
      />
      <textarea
        placeholder="Questions (comma-separated)"
        value={questions}
        onChange={(e) => setQuestions(e.target.value)}
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default SubmissionForm;
