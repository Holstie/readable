import React from "react";
import { connect } from "react-redux";
import { fetchPostsByCategory } from "../actions";
import PropTypes from 'prop-types'
import Post from './Post'


class Posts extends React.Component {
    static propTypes = {
        category: PropTypes.object.isRequired
    }
    componentDidMount() {
        this.props.fetchPostsByCategory(this.props.category.name);
    }

    render() {
        console.log("posts", this.props.posts);
        return (
            <ol className="posts-grid">
            {this.props.posts.map((post) => (
              <li key={post.id}>
                <div>
                  {post.id}
                </div>
              </li>
            ))}
          </ol>
        );
    }

}

function mapStateToProps(state, ownProps) {
    return {
        posts: state.posts
    };
}

export default connect(mapStateToProps, { fetchPostsByCategory })(Posts);
