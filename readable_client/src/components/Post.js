import React from "react";

class Post extends React.Component {

    render() {
        console.log("Post", this.props)
        return (

            <p>
                I am a post
            </p>
        );
    }

}

export default Post;