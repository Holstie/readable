import React from "react";
import Time from "react-time";
import { addCategory } from "../actions";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { lightBlue900 } from "material-ui/styles/colors";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setCurrentPost, votePost, deletePost } from "../actions";

class Post extends React.Component {
  setCurrentPost = id => this.props.setCurrentPost(id);

  onUpVote = id => this.props.votePost(id, "upVote");
  onDownVote = id => this.props.votePost(id, "downVote");
  deletePost = id => this.props.deletePost(id);

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
      <div class="card">
        <Card>
          <CardHeader
            title={title}
            titleColor={lightBlue900}
            subtitle={author}
            actAsExpander={true}
            showExpandableButton={false}
          />
          <CardText expandable={false}>
            <div className="post">
              <p>
                <b>Category:</b> {category}
              </p>
              <p>
                <b>Vote Score:</b> {voteScore}
              </p>
              <p>
                <b>Comments:</b> {commentCount}
              </p>
              <p>
                <b>Body:</b> {body}
              </p>
            </div>
          </CardText>
          <CardActions>
            <FlatButton
              label="Edit Post"
              onClick={() => {
              }}
              containerElement={<Link to={"/editpost/" + id} />}
            />
            <FlatButton label="Upvote" onClick={() => this.onUpVote(id)} />
            <FlatButton label="Downvote" onClick={() => this.onDownVote(id)} />
            <FlatButton
              label="Details"
              onClick={() => {
                this.setCurrentPost(id);
              }}
              containerElement={<Link to={"/" + category + "/" + id} />}
            />
            <FlatButton label="Delete" onClick={() => this.deletePost(id)} />
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

export default connect(mapStateToProps, { setCurrentPost, votePost, deletePost })(Post);
