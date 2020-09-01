import React from "react";
import {
  addPost,
  setAccepted,
  setRejected,
  fetchCandidateUsers,
} from "../../redux";
import { connect } from "react-redux";
import Accepted from "./accepted";
import Rejected from "./rejected";
import Loading from "../loading";
import axios from "axios";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoading: false,
      showHome: true,
      showAccepted: false,
      shawRejected: false,
      isOpen: false,
    };
  }

  componentDidMount() {
    const token = localStorage.getItem("token");
    if (token) {
      this.props.fetch(token);
    }
  }

  handleClick = (bool) => {
    this.setState({
      isOpen: bool,
    });
  };

  componentDidUpdate() {}

  render() {
    return this.props.loading === false ? (
      <div
        style={{
          height: "100vh",
          width: "100vw",
          display: "flex",
          flexDirection: "column",
        }}
      >
        
        {this.state.isLoading ? <Loading /> : null}
        <div
          style={{
            height: "15%",
            backgroundColor: "black",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              justifyContent: "space-around",
            }}
          >
            <div
              style={{
                color: "white",
                alignSelf: "center",
                font: "poppins",
                fontWeight: "bold",
              }}
            >
              Hai!{" "}
              <strong style={{ color: "dodgerBlue" }}>
                {this.props.userData.firstname}
              </strong>
            </div>
            <div style={{ display: "flex", flexDirection: "row" }}>
              <div
                id="homebut"
                onClick={() => {
                  this.setState({
                    showAccepted: false,
                    showRejected: false,
                    showHome: true,
                  });

                  document.getElementById("homebut").className = "butOn";
                  document.getElementById("acceptedbut").className = "butOff";
                  document.getElementById("rejectedbut").className = "butOff";
                }}
                className="butOn"
              >
                HOME
              </div>
              <div
                id="acceptedbut"
                onClick={() => {
                  this.setState({
                    showAccepted: true,
                    showRejected: false,
                    showHome: false,
                  });

                  document.getElementById("homebut").className = "butOff";
                  document.getElementById("acceptedbut").className = "butOn";
                  document.getElementById("rejectedbut").className = "butOff";
                }}
                className="butOff"
              >
                ACCEPTED JOBS
              </div>

              <div
                id="rejectedbut"
                onClick={() => {
                  this.setState({
                    showAccepted: false,
                    showRejected: true,
                    showHome: false,
                  });
                  document.getElementById("homebut").className = "butOff";
                  document.getElementById("acceptedbut").className = "butOff";
                  document.getElementById("rejectedbut").className = "butOn";
                }}
                className="butOff"
              >
                REJECTED JOBS
              </div>
            </div>
          </div>
        </div>
        <div
          style={{
            overflow: "auto",
            height: "100%",
            width: "100%",
            paddingTop: "50px",
          }}
        >
          {this.props.loading === false ? (
            this.state.showHome === true ? (
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  flexDirection: "column",
                  alignItems: "center",
                }}
              >
                
                {this.props.posts.map((post, i) => {
                  if (
                    this.props.userData.accepted.find(
                      (ele) => ele === post._id
                    ) === undefined &&
                    this.props.userData.rejected.find(
                      (ele) => ele === post._id
                    ) === undefined
                  ) {
                    return (
                      <div
                        key={`homesingle${i}`}
                        id={`homesingle${i}`}
                        className="employerHomeSingle"
                      >
                        <div
                          style={{
                            display: "flex",
                            flexDirection: "column",
                            height: "100%",
                            justifyContent: "center",
                          }}
                        >
                          <div>
                            <label
                              style={{ fontSize: "20px", fontWeight: "bold" }}
                            >
                              {post.title}
                            </label>
                          </div>
                          <div style={{ height: "20px" }} />
                          <div
                            onClick={() => {
                              if (
                                document.getElementById(`descriptionsingle${i}`)
                                  .className === "employerDescription"
                              ) {
                                document.getElementById(
                                  `descriptionsingle${i}`
                                ).className = "employerDescriptionExpanded";
                              } else {
                                document.getElementById(
                                  `descriptionsingle${i}`
                                ).className = "employerDescription";
                              }
                            }}
                            id={`descriptionsingle${i}`}
                            className="employerDescription"
                          >
                            <label>{post.description}</label>
                          </div>
                          <div style={{ height: "20px" }} />
                          <div>
                            <label
                              style={{ fontSize: "18px", fontWeight: "bold" }}
                            >
                              Salary:{post.salary}
                            </label>
                          </div>
                          <div style={{ height: "20px" }} />
                          <div>
                            <label style={{ fontWeight: "bold" }}>
                              Requirements: {post.requirements}
                            </label>
                          </div>
                          <div style={{ height: "20px" }} />
                          <div>
                            <label style={{ fontWeight: "bold" }}>
                              Organization: {post.organization}
                            </label>
                          </div>
                          <div
                            style={{ display: "flex", flexDirection: "row" }}
                          >
                            <div
                              onClick={() => {
                                console.log(
                                  `bearer ${localStorage.getItem("token")}`,
                                  `http://localhost:5000/users/accept/${post._id}`
                                );
                                this.setState({
                                  isLoading: true,
                                });
                                const headers = {
                                  "Content-Type": "application/json",
                                  "Access-Control-Allow-Origin": "*",
                                  Authorization: `bearer ${localStorage.getItem(
                                    "token"
                                  )}`,
                                };
                                axios
                                  .put(
                                    `http://localhost:5000/users/accept/${post._id}`,
                                    {},
                                    { headers: headers }
                                  )
                                  .then((res) => {
                                    this.setState({
                                      isLoading: false,
                                    });
                                    console.log(res.data);
                                    this.props.setAccepted(post._id);
                                  })
                                  .catch((err) => console.log(err));
                              }}
                              className="acceptedBut"
                            >
                              Accept
                            </div>
                            <div
                              onClick={() => {
                                this.setState({
                                  isLoading: true,
                                });

                                const headers = {
                                  "Content-Type": "application/json",
                                  "Access-Control-Allow-Origin": "*",
                                  Authorization: `bearer ${localStorage.getItem(
                                    "token"
                                  )}`,
                                };
                                axios
                                  .put(
                                    `http://localhost:5000/users/reject/${post._id}`,
                                    {},
                                    { headers: headers }
                                  )
                                  .then((res) => {
                                    this.setState({
                                      isLoading: false,
                                    });
                                    console.log(res.data);

                                    this.props.setRejected(post._id);
                                  })
                                  .catch((err) => console.log(err));
                              }}
                              className="rejectedBut"
                            >
                              Reject
                            </div>
                          </div>
                        </div>
                      </div>
                    );
                  } else {
                    return null;
                  }
                })}
              </div>
            ) : this.state.showAccepted === true ? (
              <Accepted />
            ) : (
              <Rejected />
            )
          ) : (
            <Loading />
          )}
        </div>
      </div>
    ) : (
      <Loading />
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userCandidate.user,
    posts: state.postsCandidate.posts,
    postLoading: state.postsCandidate.loading,
    loading: state.userCandidate.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
    setAccepted: (id) => dispatch(setAccepted(id)),
    setRejected: (id) => dispatch(setRejected(id)),
    fetch: (token) => dispatch(fetchCandidateUsers(token)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
