import React from "react";
import PropTypes from "prop-types";
import TextField from "material-ui/TextField";
import SelectField from "material-ui/SelectField";
import MenuItem from "material-ui/MenuItem";
import FloatingActionButton from "material-ui/FloatingActionButton";
import ActionDone from "material-ui/svg-icons/action/done";
import { changeRoute } from "../actions";
import { connect } from "react-redux";

class EditPost extends React.Component {
  componentDidMount() {
    this.props.changeRoute("editPost");
  }

  render() {
    const styles = {
      customWidth: {
        width: 150
      }
    };
    const actionDoneStyle = {
      marginRight: 20
    };
    return (
      <div className="new-post">
        <div>
          <h2>New Post</h2>
          <TextField name="id" floatingLabelText="Give an id" ref="id" />
          <br />
        </div>
        <div>
          <TextField
            name="timestamp"
            floatingLabelText="Timestamp"
            ref="timestamp"
          />
          <br />
        </div>
        <div>
          <TextField name="title" floatingLabelText="Title" ref="title" />
          <br />
        </div>
        <div>
          <TextField name="body" floatingLabelText="Body" ref="body" />
          <br />
        </div>
        <div>
          <TextField name="author" floatingLabelText="Author" ref="author" />
          <br />
        </div>

        <div>
          <select name="category" ref="category">
            <option value="none">None</option>
            <option value="react">React</option>
            <option value="redux">Redux</option>
            <option value="udacity">Udacity</option>
          </select>
        </div>
        <FloatingActionButton style={actionDoneStyle}>
          <ActionDone />
        </FloatingActionButton>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default connect(mapStateToProps, { changeRoute })(EditPost);
