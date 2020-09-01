import React from "react";
import { connect } from "react-redux";
import { fetchEmployerUsers } from "../../redux";
import {useHistory} from 'react-router-dom';



function Login(props) {
  var username = "";
  var password = "";
  const history = useHistory();
  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <div style={{ display: "flex", flexDirection: "column", width: "100%" }}>
        <div style={{ marginTop: "50px" }}>Employer Username</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            username = e.target.value;
          }}
        />
        <div style={{ height: "10px" }}></div>
        <div>Password</div>
        <div style={{ height: "5px" }}></div>
        <input
          onChange={(e) => {
            password = e.target.value;
          }}
        />
        <input
          onClick={(e) => {
            props.login(username, password);
            history.push("/employer/home")
          }}
          style={{ marginTop: "20px" }}
          type="submit"
          value="Login"
          
        />
      </div>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    loading: state.userEmployer.loading,
    userData: state.userEmployer.user,
    err: state.userEmployer.error,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) =>
      dispatch(fetchEmployerUsers(username, password)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
