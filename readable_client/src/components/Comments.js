import React from "react";
import { connect } from "react-redux";
import { fetchAllCommentsForPost } from "../actions";
import PropTypes from "prop-types";

class Comments extends React.Component {
  static propTypes = {
    currentPost: PropTypes.string
  };

  componentDidMount() {
    this.props.fetchAllCommentsForPost();
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
    currentPost: state.posts.currentPost
  };
}

export default connect(mapStateToProps, { fetchAllComments })(Comments);
