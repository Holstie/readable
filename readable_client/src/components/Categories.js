import React from "react";
import { connect } from "react-redux";
import { fetchCategories } from "../actions";
import Category from "./Category";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
const MainIcon = <FontIcon className="material-icons">Main Page</FontIcon>;
const ReactIcon = <FontIcon className="material-icons">React</FontIcon>;
const ReduxIcon = <FontIcon className="material-icons">Redux</FontIcon>;
const UdacityIcon = <FontIcon className="material-icons">Udacity</FontIcon>;
const NewPostIcon = <FontIcon className="material-icons">New Post</FontIcon>;


class Categories extends React.Component {
  componentDidMount() {
    this.props.fetchCategories();
  }

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  render() {
    console.log(this.props.categories)
    return (
      <div className="bottomNavigation">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              icon={MainIcon}
              onClick={() => this.linkToMainPage()}
            />
            <BottomNavigationItem
              icon={ReactIcon}
              onClick={() => this.linkToReactPage()}
            />
            <BottomNavigationItem
              icon={ReduxIcon}
              onClick={() => this.linkToReduxPage()}
            />
            <BottomNavigationItem
              icon={UdacityIcon}
              onClick={() => this.linkToUdacityPage()}
            />
            <BottomNavigationItem
              icon={NewPostIcon}
              onClick={() => this.showNewPost()}
            />
          </BottomNavigation>
        </Paper>

          <ol className="categories-grid">
            {this.props.categories.map((category) => (
              <li key={category.name}>
                <div>
                  <Category
                    category={category}>
                  </Category>
                </div>
              </li>
            ))}
          </ol>
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
