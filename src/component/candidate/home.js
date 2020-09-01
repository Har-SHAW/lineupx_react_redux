import React from "react";
import { addPost } from "../../redux";
import { connect } from "react-redux";
import Accepted from "./accepted";
import Rejected from "./rejected";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showHome: true,
      showAccepted: false,
      shawRejected: false,
      isOpen: false,
    };
  }

  handleClick = (bool) => {
    this.setState({
      isOpen: bool,
    });
  };

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
            <div
              onClick={() => {
                this.setState({
                  showAccepted: true,
                  shawRejected: false,
                  showHome: false,
                });
              }}
              style={{
                color: "white",
                alignSelf: "center",
                cursor: "pointer",
                fontWeight: "bold",
                border: "1px solid white",
                padding: "5px",
              }}
            >
              ACCEPTED JOBS
            </div>
            <div
              onClick={() => {
                this.setState({
                  showAccepted: false,
                  shawRejected: true,
                  showHome: false,
                });
              }}
              style={{
                color: "white",
                alignSelf: "center",
                cursor: "pointer",
                fontWeight: "bold",
                border: "1px solid white",
                padding: "5px",
              }}
            >
              REJECTED JOBS
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
                {this.props.posts.map((post, i) => (
                  <div id={`homesingle${i}`} className="employerHomeSingle">
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
                      style={{
                        display: "flex",
                        flexDirection: "column",
                        height: "100%",
                        justifyContent: "center",
                      }}
                    >
                      <div>
                        <label style={{ fontSize: "20px", fontWeight: "bold" }}>
                          {post.title}
                        </label>
                      </div>
                      <div style={{ height: "20px" }} />
                      <div
                        id={`descriptionsingle${i}`}
                        className="employerDescription"
                      >
                        <text>{post.description}</text>
                      </div>
                      <div style={{ height: "20px" }} />
                      <div>
                        <label style={{ fontSize: "18px", fontWeight: "bold" }}>
                          Salary:{post.salary}
                        </label>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            ) : this.state.showAccepted === true ? (
              <Accepted />
            ) : (
              <Rejected />
            )
          ) : (
            <div>loading</div>
          )}
        </div>
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userCandidate.user,
    posts: state.postsCandidate.post.posts,
    postLoading: state.postsCandidate.post.loading,
    loading: state.userCandidate.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
