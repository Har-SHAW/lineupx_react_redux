import React, { useState } from "react";
import EmployerLogin from "./employeLogin/login";
import CandidateLogin from "./candidate/Login";

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
        <div>{isEmployer ? <EmployerLogin /> : <CandidateLogin />}</div>
        <div style={{ height: "10px" }}></div>
        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-around" }}>
          <a href="/signup" style={{ fontSize: "12px" }}>
            Forgot password ?
          </a>
          <a href="/signup" style={{ fontSize: "12px" }}>
            Create an account ?
          </a>
        </div>
      </div>
    </div>
  );
}

export default Home;
