import React from "react";

class Post extends React.Component {
    render() {
      const {body, title} = this.props.post
        return (
          <div>
            <h3>{title}</h3>
            <p>
                {body}
            </p>
          </div>
        );
    }

}

export default Post;
