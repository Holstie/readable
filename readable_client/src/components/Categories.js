import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";
import Category from "./Category";


class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    return (
      <div>
        <Category />
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories
  };
}

export default connect(mapStateToProps, { fetchCategories })(Categories);
