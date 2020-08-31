import React from "react";
import { setUser, setPosts, addPost } from "../../redux";
import { connect } from "react-redux";

class Home extends React.Component {
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
      <div style={{height: ""}}></div>
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
