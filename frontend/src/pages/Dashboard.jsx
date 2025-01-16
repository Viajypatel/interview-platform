import React from "react";
import Navbar from "../components/Navbar";
import SubmissionList from "../components/Submissions/SubmissionList";

const Dashboard = () => {
  return (
    <>
      <Navbar />
      <div className="dashboard">
        <SubmissionList />
      </div>
    </>
  );
};

export default Dashboard;
