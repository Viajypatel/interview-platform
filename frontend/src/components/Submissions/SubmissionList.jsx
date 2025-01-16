import React, { useContext, useEffect, useState } from "react";
import { SubmissionContext } from "../../context/SubmissionContext";
import "../../styles/Submission.css";

const SubmissionList = () => {
  const { submissions, fetchSubmissions } = useContext(SubmissionContext);

  useEffect(() => {
    fetchSubmissions();
  }, []);

  return (
    <div className="submission-list">
      <h2>Submissions</h2>
      {submissions.map((submission) => (
        <div key={submission._id} className="submission-card">
          <h3>{submission.company}</h3>
          <p>Country: {submission.country}</p>
          <p>Questions: {submission.questions.join(", ")}</p>
        </div>
      ))}
    </div>
  );
};

export default SubmissionList;
