import React from "react";
import { connect } from "react-redux";
import { fetchPostsByCategory, fetchAllPosts} from "../actions";
import PropTypes from 'prop-types'
import Post from './Post'


class Posts extends React.Component {
    static propTypes = {
        category: PropTypes.object.isRequired,
        posts: PropTypes.array,
    }
    componentDidMount() {
        
            //console.log("route", s);
            this.props.fetchAllPosts();
            
        //this.props.fetchPostsByCategory(this.props.category.name);

    }

    createPosts = (posts) => (
        posts.map(post => (
            <Post post={post} />
        ))
    )

    render() {
        console.log(this.props)
        return (
            <ul>
                <h1>Posts</h1>
                {this.createPosts(this.props.posts)}
            </ul>
        )
    }

}

function mapStateToProps({ posts }, ownProps) {
    return {
        posts: Object.keys(posts.items).map(key => posts.items[key])
    };
}

export default connect(mapStateToProps, { fetchPostsByCategory, fetchAllPosts })(Posts);
