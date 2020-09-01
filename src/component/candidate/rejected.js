import React from "react";
import { addPost } from "../../redux";
import { connect } from "react-redux";

class Rejected extends React.Component {
  render() {
    return (
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
            this.props.userData.rejected.find((ele) => ele === post._id) !==
            undefined
          ) {
            return (
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
                    <label>{post.description}</label>
                  </div>
                  <div style={{ height: "20px" }} />
                  <div>
                    <label style={{ fontSize: "18px", fontWeight: "bold" }}>
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
                </div>
              </div>
            );
          } else {
            return null;
          }
        })}
      </div>
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
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Rejected);
