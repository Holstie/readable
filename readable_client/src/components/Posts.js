import React from "react";
import { connect } from "react-redux";
import { fetchAllPosts } from "../actions";
import PropTypes from "prop-types";
import Post from "./Post";
import { withRouter } from "react-router-dom";
import FlatButton from "material-ui/FlatButton";
import { changeSort } from "../actions";

class Posts extends React.Component {
  static propTypes = {
    posts: PropTypes.array,
    route: PropTypes.string
  };
  componentDidMount() {
    this.props.fetchAllPosts();
  }

  changeSort = sort => this.props.changeSort(sort);
  

  createPosts = posts =>
    posts.map(post => <Post {...this.props} post={post} />);

  render() {
    let filtered;
    if (this.props.route === "") {
      filtered = this.props.posts;
    } else {
      filtered = this.props.posts.filter(post => {
        return post.category === this.props.route;
      });
    }
    return (
      <div>
        <div>
          <FlatButton label="Sort by time" onClick={() => this.changeSort("time")} />
          <FlatButton label="Sort by score" onClick={() => this.changeSort("score")} />
        </div>
        <ul>{this.createPosts(filtered)}</ul>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    posts: Object.keys(state.posts.items).map(key => state.posts.items[key]),
    route: state.router.route,
    sort: state.sort
  };
}

export default connect(mapStateToProps, { fetchAllPosts, changeSort })(Posts);
