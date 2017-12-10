import React from "react";
import { connect } from "react-redux";
import { fetchAllCommentsForPost } from "../actions";
import PropTypes from "prop-types";
import Comment from "./Comment"

class Comments extends React.Component {
  static propTypes = {
    currentPost: PropTypes.string,
    comments: PropTypes.array
  };

  componentDidMount() {
    this.props.fetchAllCommentsForPost(this.props.currentPost);
  }

  createComments = comments =>
  comments.map(comment => <Comment key={comment.id} {...this.props} comment={comment} />);


  render() {
    return (
      <div>
        <ul>{this.createComments(this.props.comments)}</ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    comments: Object.keys(state.posts.comments).map(
      key => state.posts.comments[key]
    ),
    currentPost: state.posts.currentPost
  };
}

export default connect(mapStateToProps, { fetchAllCommentsForPost })(Comments);
