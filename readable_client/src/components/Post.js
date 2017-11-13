import React from "react";
import { connect } from "react-redux";
import { fetchPostsByCategory } from "../actions";
import PropTypes from 'prop-types'


class Post extends React.Component {
    static propTypes = {
        post: PropTypes.object.isRequired
    }

    render() {
        console.log(this.props)

        return (

            <p>
                hej
                </p>
        );
    }

}


export default Post;