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
import Comments from "./Comments"
import NotFoundPage from "./NotFoundPage";

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

    if (filtered.length !== 0) {

      return (
        <div>
          <ul>{this.createPosts(filtered)}</ul>

          <h1>Comments</h1>
          <Comments />
        </div>
      );
    } else {
      return (
        <NotFoundPage/>
      )
    }
  }
}
function mapStateToProps(state) {
  return {
    posts: Object.keys(state.posts.items).map(key => state.posts.items[key]),
    currentPost: state.posts.currentPost
  };
}

export default connect(mapStateToProps, { fetchAllPosts })(PostDeatils);
