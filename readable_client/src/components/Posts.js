import React from "react";
import { connect } from "react-redux";
import { fetchPostsByCategory } from "../actions";
import PropTypes from 'prop-types'
import Post from './Post'


class Posts extends React.Component {
    static propTypes = {
        category: PropTypes.object.isRequired,
        posts: PropTypes.object
    }
    componentDidMount() {
        this.props.fetchPostsByCategory(this.props.category.name);
    }

    createPosts(posts) {
        if (posts) {
            console.log("createPosts", "we have posts")
            Object.entries(posts).forEach(post => {
                return (
                   <Post/>
                )
            });
        } else {
            console.log("createPosts", "we do not have posts")
            return (<div>damn</div>)
        }
    }

    render() {
        return (
            <ul>
                {this.createPosts(this.props.posts.items)}
            </ul>
        )
    }

}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPostsByCategory })(Posts);
