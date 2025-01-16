import React, { createContext, useState } from "react";
import { fetchAllSubmissions } from "../utils/api";

export const SubmissionContext = createContext();

export const SubmissionProvider = ({ children }) => {
  const [submissions, setSubmissions] = useState([]);

  const fetchSubmissions = async () => {
    const { data } = await fetchAllSubmissions();
    setSubmissions(data);
  };

  const addSubmission = async (submission) => {
    const response = await fetch("http://localhost:4000/api/submissions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    });

    if (response.ok) {
      fetchSubmissions();
    } else {
      console.error("Failed to add submission.");
    }
  };

  return (
    <SubmissionContext.Provider value={{ submissions, fetchSubmissions, addSubmission }}>
      {children}
    </SubmissionContext.Provider>
  );
};


