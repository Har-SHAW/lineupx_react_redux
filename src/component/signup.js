import React, { useState } from "react";
import EmployerSignUp from "./employeLogin/signup";
import CandidateSignUp from "./candidate/signup";

function Home() {
  const [isEmployer, setIsEmployer] = useState(true);
  return (
    <div
      style={{
        width: "100vw",
        height: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", width: "25%" }}>
        <div style={{ display: "flex", flexDirection: "row" }}>
          <div
            onClick={() => {
              setIsEmployer((prev) => true);
              document.getElementById("tabEmployer").className = "TabOn";
              document.getElementById("tabCandidate").className = "TabOff";
            }}
            id="tabEmployer"
            className="TabOn"
            style={{
              borderTopLeftRadius: "10px",
            }}
          >
            Employer
          </div>
          <div
            onClick={() => {
              setIsEmployer((prev) => false);
              document.getElementById("tabEmployer").className = "TabOff";
              document.getElementById("tabCandidate").className = "TabOn";
            }}
            id="tabCandidate"
            className="TabOff"
            style={{
              borderTopRightRadius: "10px",
            }}
          >
            Candidate
          </div>
        </div>
        <div>{isEmployer ? <EmployerSignUp /> : <CandidateSignUp />}</div>
        <div style={{ height: "10px" }}></div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
          }}
        >
          <a href="/" style={{ fontSize: "12px" }}>
            Already have an account?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
