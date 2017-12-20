import React from "react";
import { connect } from "react-redux";
import { createPost, changeRoute } from "../actions";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ActionDone from "material-ui/svg-icons/action/done";
const uuidv4 = require("uuid/v4");

class PostForm extends React.Component {
  state = {
    id: "",
    title: "",
    author: "",
    body: "",
    category: ""
  };

  componentDidMount() {
    this.props.changeRoute("newPost");
  }

  changeRouteTo = route => this.props.changeRoute(route);
  
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

  createPost = post => this.props.createPost(post);

  onCreateClick = () => {
    const id = uuidv4();
    const timestamp = (new Date).getTime()
    const { title, category, body, author } = this.state;

    this.createPost({
      id,
      timestamp,
      title,
      body,
      author,
      category
    });
    this.props.history.push("/")
    this.changeRouteTo("")
  };

  render() {
    const actionDoneStyle = {
      marginRight: 20
    };

    return (
      <div className="edit-post">
        <div>
          <h2>New Post</h2>
        </div>
        <div />
        <div>
          <TextField
            name="title"
            floatingLabelText="Title"
            onChange={this.handleInputChange}
          />
          <br />
        </div>
        <div>
          <TextField
            name="body"
            floatingLabelText="Body"
            onChange={this.handleInputChange}
          />
          <br />
        </div>
        <div>
          <TextField
            name="author"
            floatingLabelText="Author"
            onChange={this.handleInputChange}
          />
          <br />
        </div>

        <div>
          <select name="category" onChange={this.handleInputChange}>
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
            onClick={this.onCreateClick}
            value="Create"
          />
        </div>
      </div>
    );
  }
}
function mapStateToProps(state, props) {
  return {};
}
export default connect(mapStateToProps, { createPost, changeRoute })(PostForm);
