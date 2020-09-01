import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from "axios";
import Loading from "../loading";

function Login() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const history = useHistory();
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      {loading ? <Loading /> : null}
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ marginTop: "50px" }}>Candidate Username</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            let val = e.target.value;
            setData((prev) => {
              let d = prev;
              d.username = val;
              return d;
            });
          }}
        />
        <div style={{ height: "10px" }}></div>
        <div>Password</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            let val = e.target.value;
            setData((prev) => {
              let d = prev;
              d.password = val;
              return d;
            });
          }}
        />
        <input
          onClick={(e) => {
            setLoading((prev) => true);
            const headers = {
              "Content-Type": "application/json",
              "Access-Control-Allow-Origin": "*",
            };
            const cdata = {
              username: data.username,
              password: data.password,
            };
            axios
              .post("http://localhost:5000/users/candidate/login", cdata, {
                headers: headers,
              })
              .then((res) => {
                localStorage.setItem("token", res.data.token);
                setLoading((prev) => false);
                history.push("/candidate/home");
              })
              .catch((err) => {
                document.getElementById("status").innerHTML = "Incorrect Credentials";
                setLoading((prev) => false);
              });
          }}
          style={{ marginTop: "20px" }}
          type="submit"
          value="Login"
        />
        <span id="status" style={{ color: "red" }}></span>
      </div>
    </div>
  );
}

export default Login;
