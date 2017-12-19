import React from "react";
import { connect } from "react-redux";
import { fetchAllCommentsForPost } from "../actions";
import PropTypes, { shape } from "prop-types";
import Comment from "./Comment";
import FlatButton from "material-ui/FlatButton";
import { setAddCommentMode } from "../actions";
import CommentForm from "./CommentForm";
import NotFoundPage from "./NotFoundPage";

class Comments extends React.Component {
  static propTypes = {
    currentPost: PropTypes.string,
    comments: PropTypes.array,
    addNewCommentMode: PropTypes.bool,
    showNotFound: PropTypes.bool
  };

  componentDidMount() {
    if (this.props.currentPost.id !== undefined) {
      this.props.fetchAllCommentsForPost(this.props.currentPost);
    }
  }

  addNewComment = enabled => this.props.setAddCommentMode(enabled);

  createComments = comments =>
    comments.map(comment => (
      <Comment key={comment.id} {...this.props} comment={comment} />
    ));

  render() {
    const isInAddCommentMode = this.props.addNewCommentMode;
    var content = <div />;
    var buttonLabel = "";

    if (isInAddCommentMode) {
      buttonLabel = "Cancel adding";
    } else {
      buttonLabel = "Add new comment";
    }
    return (
      <div>
        <FlatButton
          label={buttonLabel}
          onClick={() => this.addNewComment(!isInAddCommentMode)}
        />
        {
          isInAddCommentMode ? (
            <CommentForm />
          ) : (
              <ul>{this.createComments(this.props.comments)
              }</ul >
            )
        }
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
