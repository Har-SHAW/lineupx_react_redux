import React from "react";
import { addPost } from "../../redux";
import { connect } from "react-redux";
import axios from "axios";
import Loading from "../loading";

class Model extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      title: "",
      description: "",
      salary: "",
      requirements: "",
      loading: false,
    };
  }

  check() {
    if (
      (isNaN(this.state.salary.slice(1, this.state.salary.length)) &&
        isNaN(this.state.salary.slice(0, this.state.salary.length - 1))) ||
      this.state.salary.length === 0
    ) {
      document.getElementById("salary").innerHTML = "Should be a proper number";
    } else {
      document.getElementById("salary").innerHTML = "";
    }
    if (this.state.title.length < 5) {
      document.getElementById("title").innerHTML = "Atleast 5 characters";
    } else {
      document.getElementById("title").innerHTML = "";
    }
    if (this.state.description.length < 50) {
      document.getElementById("description").innerHTML =
        "Atleast 50 characters";
    } else {
      document.getElementById("description").innerHTML = "";
    }
    if (this.state.requirements < 3) {
      document.getElementById("requirements").innerHTML =
        "Atleast 3 characters";
    } else {
      document.getElementById("requirements").innerHTML = "";
    }

    if (
      document.getElementById("requirements").innerHTML === "" &&
      document.getElementById("title").innerHTML === "" &&
      document.getElementById("description").innerHTML === "" &&
      document.getElementById("salary").innerHTML === ""
    ) {
      return true;
    } else {
      return false;
    }
  }

  render() {
    return this.state.loading === false ? (
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
              <span
                id="title"
                style={{ color: "red", fontSize: "10px" }}
              ></span>
              <div style={{ height: "20px" }} />
              <div>Job Description</div>
              <textarea
                onChange={(e) => {
                  this.setState({
                    description: e.target.value,
                  });
                }}
              />
              <span
                id="description"
                style={{ color: "red", fontSize: "10px" }}
              ></span>
              <div style={{ height: "20px" }} />
              <div>Job Salary</div>
              <input
                onChange={(e) => {
                  this.setState({
                    salary: e.target.value,
                  });
                }}
              />
              <span
                id="salary"
                style={{ color: "red", fontSize: "10px" }}
              ></span>
              <div style={{ height: "20px" }} />
              <div>Job Requirements</div>
              <input
                onChange={(e) => {
                  this.setState({
                    requirements: e.target.value,
                  });
                }}
              />
              <span
                id="requirements"
                style={{ color: "red", fontSize: "10px" }}
              ></span>
              <div style={{ height: "20px" }} />
              <input
                onClick={() => {
                  if (this.check()) {
                    this.setState({
                      loading: true,
                    });
                    const headers = {
                      "Content-Type": "application/json",
                      "Access-Control-Allow-Origin": "*",
                      Authorization: `bearer ${localStorage.getItem("token")}`,
                    };
                    const data = {
                      title: this.state.title,
                      description: this.state.description,
                      salary: this.state.salary,
                      requirements: this.state.requirements,
                    };
                    axios
                      .post("http://localhost:5000/posts/", data, {
                        headers: headers,
                      })
                      .then((response) => {
                        if (response.status === 200) {
                          console.log(response.body);
                          this.props.addPost({
                            title: this.state.title,
                            description: this.state.description,
                            salary: this.state.salary,
                            requirements: this.state.requirements,
                            organization: this.props.userData.organization,
                          });
                          this.props.whenClose(false);
                        } else {
                          console.log(response.body);
                        }
                        this.setState({
                          loading: false,
                        });
                      })
                      .catch((err) => console.log(err));
                  }
                }}
                type="submit"
                value="POST"
                style={{ width: "100px", alignSelf: "center" }}
              />
            </div>
          </div>
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}
const mapStateToProps = (state) => {
  return {
    userData: state.userEmployer.user,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Model);
