import React from "react";
import { PuffLoader } from "react-spinners";

class Loading extends React.Component {
  render() {
    return (
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          height: "100%",
          width: "100%",
          backgroundColor: "rgba(0,0,0,0.5)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <div
          style={{
            height: "200px",
            width: "200px",
            backgroundColor: "white",
            opacity: "1",
            padding: "10px",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <PuffLoader />
        </div>
      </div>
    );
  }
}

export default Loading;
