import React from "react";
import PropTypes from 'prop-types'


class Post extends React.Component {
    static propTypes = {
        postName: PropTypes.object.isRequired
    }

    render() {
        console.log("Post", this.props)

        return (

            <p>
                hello
            </p>
        );
    }

}


export default Post;