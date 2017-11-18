import React from "react";
import Time from "react-time";
import { addCategory } from "../actions";
import { Card, CardActions, CardHeader, CardText } from "material-ui/Card";
import FlatButton from "material-ui/FlatButton";
import { lightBlue900 } from 'material-ui/styles/colors'

class Post extends React.Component {
  render() {
    const { body, title, author, category, deleted, commentCount, timestamp, id, voteScore } = this.props.post
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
                <b>Post id:</b> {id}
              </p>
              <p>
                <b>Post timestamp:</b> {<Time value={timestamp} format="YYYY/MM/DD" />}
              </p>
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
              onClick={() => this.onEdit()}
            />
            <FlatButton
              label="Upvote"
              onClick={() =>
                this.onUpVote(id)}
            />
            <FlatButton
              label="Downvote"
              onClick={() =>
                this.onDownVote(id)}
            />
            <FlatButton
              onClick={() => this.changeMode()}
              label="Details"
            />
            <FlatButton
              onClick={() => this.delete()}
              label="Delete"
            />
          </CardActions>
        </Card>
      </div>

    );
  }

}

export default Post;
