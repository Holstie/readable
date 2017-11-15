import React from "react";
import { connect } from "react-redux";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import { Link } from 'react-router-dom';
const MainIcon = <FontIcon className="material-icons">Main Page</FontIcon>;
const ReactIcon = <FontIcon className="material-icons">React</FontIcon>;
const ReduxIcon = <FontIcon className="material-icons">Redux</FontIcon>;
const UdacityIcon = <FontIcon className="material-icons">Udacity</FontIcon>;
const NewPostIcon = <FontIcon className="material-icons">New Post</FontIcon>;


class Navigation extends React.Component {
  componentDidMount() {
  }

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });


  render() {
    return (
      <div className="bottomNavigation">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              icon={MainIcon}
              containerElement={<Link to="/"></Link>}
              />
            <BottomNavigationItem
              containerElement={<Link to="/react"></Link>}
              icon={ReactIcon}
            />
            <BottomNavigationItem
              icon={ReduxIcon}
              containerElement={<Link to="/redux"></Link>}
              />
            <BottomNavigationItem
              icon={UdacityIcon}
              containerElement={<Link to="/udacity"></Link>}
              />
            <BottomNavigationItem
              icon={NewPostIcon}
              containerElement={<Link to="/newpost"></Link>}
              />
          </BottomNavigation>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
  };
}

export default connect(mapStateToProps, )(Navigation);
