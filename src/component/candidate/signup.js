import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Loading from "../loading";

function SignUp() {
  const [data, setData] = useState({});
  const [done, setDone] = useState("");
  const [loading, setLoading] = useState(false);
  const history = useHistory();

  function check() {
    if ((data.firstname && data.firstname.length < 4) || !data.firstname) {
      document.getElementById("firstname").innerHTML =
        "Required atleast 4 characters";
    } else {
      document.getElementById("firstname").innerHTML = "";
    }
    if ((data.lastname && data.lastname.length < 4) || !data.lastname) {
      document.getElementById("lastname").innerHTML =
        "Required atleast 4 characters";
    } else {
      document.getElementById("lastname").innerHTML = "";
    }
    if ((data.username && data.username.length < 4) || !data.username) {
      document.getElementById("username").innerHTML =
        "Required atleast 4 characters";
    } else {
      document.getElementById("username").innerHTML = "";
    }
    if ((data.password && data.password.length < 8) || !data.password) {
      document.getElementById("password").innerHTML =
        "Required atleast 8 characters";
    } else {
      document.getElementById("password").innerHTML = "";
    }
    if (data.cpassword && data.password && data.password !== data.cpassword) {
      document.getElementById("cpassword").innerHTML =
        "Password did not matched";
    } else if (!data.cpassword) {
      document.getElementById("cpassword").innerHTML =
        "Password did not matched";
    } else {
      document.getElementById("cpassword").innerHTML = "";
    }

    if (
      document.getElementById("firstname").innerHTML === "" &&
      document.getElementById("lastname").innerHTML === "" &&
      document.getElementById("username").innerHTML === "" &&
      document.getElementById("password").innerHTML === "" &&
      document.getElementById("cpassword").innerHTML === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {loading ? <Loading /> : null}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ height: "10px" }}></div>
        <div style={{ marginTop: "30px" }}>Candidate's Firstname</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            let d = e.target.value;
            setData((prev) => {
              let v = prev;
              v.firstname = d;
              return v;
            });
          }}
        />
        <span id="firstname" style={{ color: "red", fontSize: "10px" }}></span>

        <div style={{ height: "10px" }}></div>
        <div>Candidate's Lastname</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            let d = e.target.value;
            setData((prev) => {
              let v = prev;
              v.lastname = d;
              return v;
            });
          }}
        />
        <span id="lastname" style={{ color: "red", fontSize: "10px" }}></span>

        <div style={{ height: "10px" }}></div>
        <div>Candidate's Username</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            let d = e.target.value;
            setData((prev) => {
              let v = prev;
              v.username = d;
              return v;
            });
          }}
        />
        <span id="username" style={{ color: "red", fontSize: "10px" }}></span>

        <div style={{ height: "10px" }}></div>
        <div>Password</div>
        <div style={{ height: "5px" }}></div>
        <input
          type="password"
          onChange={(e) => {
            let d = e.target.value;
            setData((prev) => {
              let v = prev;
              v.password = d;
              return v;
            });
          }}
        />
        <span id="password" style={{ color: "red", fontSize: "10px" }}></span>

        <div style={{ height: "10px" }}></div>
        <div>Confirm Password</div>
        <div style={{ height: "5px" }}></div>
        <input
          type="password"
          onChange={(e) => {
            let d = e.target.value;
            setData((prev) => {
              let v = prev;
              v.cpassword = d;
              return v;
            });
          }}
        />
        <span id="cpassword" style={{ color: "red", fontSize: "10px" }}></span>
        <input
          onClick={() => {
            if (check()) {
              setLoading((prev) => true);
              const headers = {
                "Content-Type": "application/json",
                "Access-Control-Allow-Origin": "*",
              };
              axios
                .post("http://localhost:5000/users/candidate/signup", data, {
                  headers: headers,
                })
                .then((res) => {
                  console.log(res.data);
                  setLoading((prev) => false);
                  history.push("/");
                })
                .catch((err) => {
                  setLoading((prev) => false);
                  console.log(err.message);
                  if (
                    err.message &&
                    err.message === "Request failed with status code 500"
                  ) {
                    setDone((prev) => "Username already exists");
                  } else {
                    setDone((prev) => "Something went wrong");
                  }
                });
            }
          }}
          style={{ marginTop: "20px" }}
          type="submit"
          value="Sign Up"
        />
        <div style={{ color: "red", textAlign: "center", marginTop: "5px" }}>
          {done}
        </div>
      </div>
    </div>
  );
}

export default SignUp;
