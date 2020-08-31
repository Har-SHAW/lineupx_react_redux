import React from 'react';

function Login(){
    return(
        <div style={{width:"100%", display: "flex", justifyContent: "center"}}>
      <div style={{display: "flex", flexDirection: "column", width: "100%"}}>
          <div style={{marginTop: "50px"}}>Candidate Username</div>
          <div style={{height: "5px"}}></div>
          <input/>
          <div style={{height: "10px"}}></div>
          <div>Password</div>
          <div style={{height: "5px"}}></div>
          <input/>
          <input style={{marginTop: "20px"}} type="submit" value="Login"/>
      </div>
    </div>
    )
}

export default Login;