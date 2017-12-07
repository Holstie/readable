import React from "react";
import Time from "react-time";
import { addCategory } from "../actions";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { lightBlue900 } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentPost, votePost} from "../actions";

class Post extends React.Component {
  setCurrentPost = id => this.props.setCurrentPost(id);


  onUpVote = (id) => votePost(id, "upVote");
  onDownVote = (id) => votePost(id, "downVote")


  render() {
    const {
      body,
      title,
      author,
      category,
      deleted,
      commentCount,
      timestamp,
      id,
      voteScore
    } = this.props.post;

    return (
      <div>
        <Card>
          <CardHeader
            title={title}
            titleColor={lightBlue900}
            subtitle={author}
            actAsExpander={true}
            showExpandableButton={false}
          />
          <CardText expandable={false}>
            <div className="postList">
              <p>
                <b>Body:</b> {body}
              </p>
              <p>
                <b>Category:</b> {category}
              </p>
              <p>
                <b>Vote Score:</b> {voteScore}
              </p>
            </div>
          </CardText>
          <CardActions>
            <FlatButton
              label="Edit Post"
              onClick={() => {
                this.setCurrentPost(id);
                this.props.history.push("/editpost/" + id);
              }}
            />
            <FlatButton label="Upvote" onClick={() => this.onUpVote(id)} />
            <FlatButton label="Downvote" onClick={() => this.onDownVote(id)} />
            <FlatButton onClick={() => this.changeMode()} label="Details" />
            <FlatButton onClick={() => this.delete()} label="Delete" />
          </CardActions>
        </Card>
      </div>
    );
  }
}
function mapStateToProps(state, ownProps) {
  return {
    item: {}
  };
}

export default connect(mapStateToProps, { setCurrentPost, votePost })(Post);
