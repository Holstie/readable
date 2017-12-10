import React from "react";
import TextField from "material-ui/TextField";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ActionDone from "material-ui/svg-icons/action/done";
import { changeRoute, editPost } from "../actions";
import { connect } from "react-redux";

class EditPost extends React.Component {
  state = {
    id: "",
    title: "",
    author: "",
    body: "",
    category: ""
  };

  componentDidMount() {
    this.props.changeRoute("editPost");
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
  editPost = post => this.props.editPost(post);

  onEditClick = () => {
    const id = this.state.id;
    const { title, category, body, author } = this.state;

    this.editPost({
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

    var post = this.props.post[0];

    if (post == null) {
      post = {
        id: "",
        title: "",
        body: "",
        author: "",
        category: "none"
      };
    }

    this.state.id = post.id;
    this.state.title = post.title;
    this.state.body = post.body;
    this.state.author = post.author;
    this.state.category = post.category;

    return (
      <div className="edit-post">
        <div>
          <h2>Edit Post</h2>
        </div>
        <div />
        <div>
          <TextField
            name="title"
            defaultValue={post.title}
            floatingLabelText="Title"
            onChange={this.handleInputChange}
          />
          <br />
        </div>
        <div>
          <TextField
            name="body"
            defaultValue={post.body}
            floatingLabelText="Body"
            onChange={this.handleInputChange}
          />
          <br />
        </div>
        <div>
          <TextField
            name="author"
            defaultValue={post.author}
            floatingLabelText="Author"
            onChange={this.handleInputChange}
          />
          <br />
        </div>

        <div>
          <select
            name="category"
            defaultValue={post.category}
            onChange={this.handleInputChange}
          >
            <option value="none">None</option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </select>
        </div>
        <div className="EditPost-Button">
          <input
            className="Post-Button"
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
    post: Object.keys(state.posts.items)
      .map(key => state.posts.items[key])
      .filter(post => post.id === state.posts.currentPost)
  };
}

export default connect(mapStateToProps, { changeRoute, editPost })(EditPost);
