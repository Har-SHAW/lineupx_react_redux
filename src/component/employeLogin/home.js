import React from "react";
import { addPost } from "../../redux";
import { connect } from "react-redux";
import Model from "./model";

class Home extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
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
        {this.state.isOpen ? <Model whenClose={this.handleClick} /> : null}

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
              </strong>{" "}
              From{" "}
              <strong style={{ color: "orange" }}>
                {this.props.userData.organization}
              </strong>
            </div>
            <div
              onClick={() => {
                this.setState({
                  isOpen: true,
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
              POST JOB
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
        </div>
      </div>
    ) : (
      <div>loading</div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    userData: state.userEmployer.user,
    posts: state.postedEmployer.post.posts,
    postLoading: state.postedEmployer.post.loading,
    loading: state.userEmployer.loading,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
