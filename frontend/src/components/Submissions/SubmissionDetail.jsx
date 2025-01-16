import React from "react";
import "../../styles/Submissions.css";

const SubmissionDetail = ({ submission }) => {
  return (
    <div className="submission-detail">
      <h3>{submission.company}</h3>
      <p>Country: {submission.country}</p>
      <h4>Questions Asked:</h4>
      <ul>
        {submission.questions.map((question, index) => (
          <li key={index}>{question}</li>
        ))}
      </ul>
    </div>
  );
};

export default SubmissionDetail;
