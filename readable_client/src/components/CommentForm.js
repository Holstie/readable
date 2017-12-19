import React from "react";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ActionDone from "material-ui/svg-icons/action/done";
import { changeRoute, addComment } from "../actions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { setAddCommentMode } from "../actions";

const uuidv4 = require("uuid/v4");

class CommentForm extends React.Component {
  static propTypes = {
    currentPost: PropTypes.string
  };

  state = {
    id: "",
    author: "",
    body: "",
    timestamp: ""
  };

  componentDidMount() {
    this.props.changeRoute("addComment");
  }

  addNewComment = enabled => this.props.setAddCommentMode(enabled);

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "author":
        this.state.author = value;
        break;
      case "body":
        this.state.body = value;
        break;
    }
  };
  addComment = comment => this.props.addComment(comment);

  onSendClick = () => {
    const id = uuidv4();
    const timestamp = new Date().getTime();
    const { body, author } = this.state;
    const parentId = this.props.currentPost;

    this.addComment({
      id,
      body,
      author,
      timestamp,
      parentId
    });
    this.addNewComment(false);
  };

  render() {
    const actionDoneStyle = {
      marginRight: 20
    };

    var comment = this.props.comment[0];

    if (comment == null) {
      comment = {
        id: "",
        body: "",
        author: ""
      };
    }

    this.state.id = comment.id;
    this.state.title = comment.title;
    this.state.body = comment.body;
    this.state.author = comment.author;

    return (
      <div className="add-comment">
        <div>
          <h2>Add comment</h2>
        </div>
        <div />
        <div>
          <TextField
            name="body"
            defaultValue={comment.body}
            floatingLabelText="Body"
            onChange={this.handleInputChange}
          />
          <br />
        </div>
        <div>
          <TextField
            name="author"
            defaultValue={comment.author}
            floatingLabelText="Author"
            onChange={this.handleInputChange}
          />
          <br />
        </div>
        <div className="AddComment-Button">
          <input
            className="Comment-Button"
            type="button"
            onClick={this.onSendClick}
            value="Done"
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    comment: Object.keys(state.posts.comments)
      .map(key => state.posts.comments[key])
      .filter(comment => comment.id === state.posts.currentComment),
    currentPost: state.posts.currentPost
  };
}

export default connect(mapStateToProps, {
  changeRoute,
  addComment,
  setAddCommentMode
})(CommentForm);
