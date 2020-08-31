import React from "react";
import { setUser, setPosts, addPost } from "../../redux";
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
    return (
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
                {this.props.user.name}
              </strong>{" "}
              From{" "}
              <strong style={{ color: "orange" }}>
                {this.props.user.organization}
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
            paddingTop: "50px"
          }}
        >
          <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", alignItems: "center" }}>
            {this.props.posts.map((post,i) => (
              <div id={`homesingle${i}`} className="employerHomeSingle">
                <div
                onClick={()=>{
                  if(document.getElementById(`descriptionsingle${i}`).className==="employerDescription"){
                    document.getElementById(`descriptionsingle${i}`).className="employerDescriptionExpanded";
                  }else{
                    document.getElementById(`descriptionsingle${i}`).className="employerDescription";
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
                    <a style={{fontSize: "20px", fontWeight: "bold"}}>{post.title}</a>
                  </div>
                  <div style={{height:"20px"}}/>
                  <div id={`descriptionsingle${i}`} className="employerDescription">
                    <text>{post.description}</text>
                  </div>
                  <div style={{height:"20px"}}/>
                  <div>
                    <label style={{fontSize: "18px", fontWeight: "bold"}}>Salary:{post.salary}</label>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    user: state.userEmployer.usr,
    posts: state.postedEmployer.posts,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setUser: () => dispatch(setUser()),
    setPosts: () => dispatch(setPosts()),
    addPost: (post) => dispatch(addPost(post)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
