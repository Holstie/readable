import React from "react";
import { connect } from "react-redux";
import { fetchPostsByCategory } from "../actions";
import PropTypes from 'prop-types'
import Post from './Post'


class Posts extends React.Component {
    static propTypes = {
        category: PropTypes.object.isRequired,
        posts: PropTypes.array
    }
    componentDidMount() {
        this.props.fetchPostsByCategory(this.props.category.name);
    }

    createPosts = (posts) => (
      posts.map(post => (
        <Post post={post}/>
      ))
    )
    render() {
        return (
            <ul>
            dsfsklj
                {this.createPosts(this.props.posts)}
            </ul>
        )
    }

}

function mapStateToProps({posts}, ownProps) {
    return {
        posts: Object.keys(posts.items).map(key => posts.items[key])
    };
}

export default connect(mapStateToProps, { fetchPostsByCategory })(Posts);
