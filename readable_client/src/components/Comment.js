import React from "react";
import Time from "react-time";
import { addCategory } from "../actions";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { lightBlue900 } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentPost, voteComment } from "../actions";

class Comment extends React.Component {
  setCurrentPost = id => this.props.setCurrentPost(id);

  onUpVote = id => this.props.voteComment(id, "upVote");
  onDownVote = id => this.props.voteComment(id, "downVote");

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
    } = this.props.comment;

    return (
      <div>
        <Card>
          <CardHeader
            subtitle={author}
            actAsExpanded={true}
            showExpandableButton={false}
          />
          <CardText expandable={false}>
            <div className="comment">
              <p>
                <b>Vote Score:</b> {voteScore}
              </p>
              <p>
                <b>Body:</b> {body}
              </p>
            </div>
          </CardText>
          <CardActions>
            <FlatButton
              label="Edit comment"
              onClick={() => {
              }}
              containerElement={<Link to={"/editpost/" + id} />}
            />
            <FlatButton label="Upvote" onClick={() => this.onUpVote(id)} />
            <FlatButton label="Downvote" onClick={() => this.onDownVote(id)} />
            <FlatButton label="Delete" onClick={() => this.delete()} />
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

export default connect(mapStateToProps, { setCurrentPost, voteComment })(Comment);
