import React from "react";
import { addPost } from "../../redux";
import { connect } from "react-redux";

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: "",
      salary: "",
    };
  }

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
            height: "75%",
            width: "75%",
            backgroundColor: "white",
            opacity: "1",
            padding: "10px",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row-reverse",
            }}
          >
            <div
              onClick={() => {
                this.props.whenClose(false);
              }}
              style={{
                paddingLeft: "10px",
                paddingRight: "10px",
                paddingTop: "5px",
                paddingBottom: "5px",
                border: "1px solid black",
                cursor: "pointer",
              }}
            >
              Close
            </div>
          </div>
          <div
            style={{
              height: "100%",
              width: "100%",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <div
              style={{
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
              }}
            >
              <div>Job Title</div>
              <input
                onChange={(e) => {
                  this.setState({
                    title: e.target.value,
                  });
                }}
              />
              <div style={{ height: "20px" }} />
              <div>Job Description</div>
              <textarea
                onChange={(e) => {
                  this.setState({
                    description: e.target.value,
                  });
                }}
              />
              <div style={{ height: "20px" }} />
              <div>Job Salary</div>
              <input
                onChange={(e) => {
                  this.setState({
                    salary: e.target.value,
                  });
                }}
              />
              <div style={{ height: "20px" }} />
              <input
              onClick={()=>{
                  this.props.addPost({
                      title: this.state.title,
                      description: this.state.description,
                      salary: this.state.salary
                  })
                  this.props.whenClose(false);
              }}
                type="submit"
                value="POST"
                style={{ width: "100px", alignSelf: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(null, mapDispatchToProps)(Model);
