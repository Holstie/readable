import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../actions";
import PropTypes from 'prop-types'
import Post from './Post'
import { withRouter } from 'react-router-dom';



class Posts extends React.Component {
    static propTypes = {
        posts: PropTypes.array,
        route: PropTypes.string,
    }
    componentDidMount() {
        this.props.fetchAllPosts();
    }

    createPosts = (posts) => (
        posts.map(post => (
            <Post post={post} />
        ))
    )


    render() {
        let filtered
        console.log("route", this.props.route)
        if (this.props.route === "") {
            filtered = this.props.posts
        } else {
            console.log("shit");
            filtered = this.props.posts.filter(
                (post) => {
                    return post.category === this.props.route;
                }
            )
        }
        console.log("filtered", filtered);
        return (
            <ul>
                {this.createPosts(filtered)}
            </ul>
        )
    }

}

function mapStateToProps(state) {
    return {
        posts: Object.keys(state.posts.items).map(key => state.posts.items[key]),
        route: state.router.route
    };
}

export default connect(mapStateToProps, { fetchAllPosts })(Posts);
