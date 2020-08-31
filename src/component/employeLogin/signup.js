import React from "react";

function SignUp() {
  return (
    <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          <div style={{marginTop: "50px"}}>Employer Username</div>
          <div style={{height: "5px"}}></div>
          <input/>

          <div style={{height: "10px"}}></div>
          <div>Password</div>
          <div style={{height: "5px"}}></div>
          <input/>

          <div style={{height: "10px"}}></div>
          <div>Confirm Password</div>
          <div style={{height: "5px"}}></div>
          <input/>

          <div style={{height: "10px"}}></div>
          <div>Organization</div>
          <div style={{height: "5px"}}></div>
          <input/>
          <input style={{marginTop: "20px"}} type="submit" value="Sign Up"/>
      </div>
    </div>
  );
}

export default SignUp;
