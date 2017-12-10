import React from "react";
import Time from "react-time";
import { addCategory } from "../actions";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { lightBlue900 } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentPost, votePost } from "../actions";
import Post from "./Post";
import { fetchAllPosts } from "../actions";
import PropTypes from "prop-types";

class PostDeatils extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    currentPost: PropTypes.string
  };

  componentDidMount() {
    this.props.fetchAllPosts();
  }

  createPosts = posts =>
    posts.map(post => <Post {...this.props} post={post} />);

  render() {
    let filtered = this.props.posts.filter(post => {
      return post.id === this.props.currentPost;
    });

    return (
      <div>
        <ul>{this.createPosts(filtered)}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    posts: Object.keys(state.posts.items).map(key => state.posts.items[key]),
    currentPost: state.posts.currentPost
  };
}

export default connect(mapStateToProps, { fetchAllPosts })(PostDeatils);
