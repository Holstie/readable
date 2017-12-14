import React from "react";
import { connect } from "react-redux";
import { fetchAllCommentsForPost } from "../actions";
import PropTypes from "prop-types";
import Comment from "./Comment";
import FlatButton from "material-ui/FlatButton";
import { setAddCommentMode } from "../actions";

class Comments extends React.Component {
  static propTypes = {
    currentPost: PropTypes.string,
    comments: PropTypes.array,
    addNewCommentMode: PropTypes.bool
  };

  componentDidMount() {
    this.props.fetchAllCommentsForPost(this.props.currentPost);
  }

  addNewComment = enabled => this.props.setAddCommentMode(enabled);

  createComments = comments =>
    comments.map(comment => (
      <Comment key={comment.id} {...this.props} comment={comment} />
    ));

  addComment() {
    return <h1>Welcome back!</h1>;
  }

  dontAdd() {
    return <h1>Please sign up.</h1>;
  }

  render() {
    function addComment() {
      return <h1>Welcome back!</h1>;
    }

    function dontAdd() {
      return <h1>Please sign up.</h1>;
    }

    const isInAddCommentMode = this.props.addNewCommentMode;
    var content = <div />;
    var buttonLabel = "";

    if (isInAddCommentMode) {
      buttonLabel = "Cancel adding";
      content = addComment;
    } else {
      buttonLabel = "Add new comment";
      content = dontAdd;
    }

    return (
      <div>
        <FlatButton
          label={buttonLabel}
          onClick={() => this.addNewComment(!isInAddCommentMode)}
        />
        {isInAddCommentMode ? (
          <h1>Please sign up.</h1>
        ) : (
          <ul>{this.createComments(this.props.comments)}</ul>
        )}
        {/* <FlatButton
          label="Add new comment"
          onClick={() => this.addNewComment("kl")}
        />
        <ul>{this.createComments(this.props.comments)}</ul> */}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    comments: Object.keys(state.posts.comments).map(
      key => state.posts.comments[key]
    ),
    currentPost: state.posts.currentPost,
    addNewCommentMode: state.posts.addNewCommentMode
  };
}

export default connect(mapStateToProps, {
  fetchAllCommentsForPost,
  setAddCommentMode
})(Comments);
