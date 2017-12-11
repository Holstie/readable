import React from "react";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ActionDone from "material-ui/svg-icons/action/done";
import { changeRoute, editComment } from "../actions";
import { connect } from "react-redux";

class EditComment extends React.Component {
  state = {
    id: "",
    title: "",
    author: "",
    body: "",
    category: ""
  };

  componentDidMount() {
    this.props.changeRoute("editComment");
  }

  handleInputChange = event => {
    const target = event.target;
    const value = target.value;
    const name = target.name;

    switch (name) {
      case "author":
        this.state.author = value;
        break;
      case "category":
        this.state.category = value;
        break;
      case "body":
        this.state.body = value;
        break;
      case "title":
        this.state.title = value;
        break;
    }
  };
  editComment = comment => this.props.editComment(comment);

  onEditClick = () => {
    const id = this.state.id;
    const { title, category, body, author } = this.state;

    this.editComment({
      id,
      title,
      body,
      author,
      category
    });
  };

  render() {
    const actionDoneStyle = {
      marginRight: 20
    };

    var comment = this.props.comment[0];

    if (comment == null) {
      comment = {
        id: "",
        title: "",
        body: "",
        author: "",
        category: "none"
      };
    }

    this.state.id = comment.id;
    this.state.title = comment.title;
    this.state.body = comment.body;
    this.state.author = comment.author;
    this.state.category = comment.category;

    return (
      <div className="edit-comment">
        <div>
          <h2>Edit Comment</h2>
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
        <div className="EditComment-Button">
          <input
            className="Comment-Button"
            type="button"
            onClick={this.onEditClick}
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
      .filter(comment => comment.id === state.posts.currentComment)
  };
}

export default connect(mapStateToProps, { changeRoute, editComment })(EditComment);
