import React from "react";
import { connect } from "react-redux";
import {
  BottomNavigation,
  BottomNavigationItem
} from "material-ui/BottomNavigation";
import Paper from "material-ui/Paper";
import FontIcon from "material-ui/FontIcon";
import { Link } from 'react-router-dom';
import { changeRoute } from "../actions";

const MainIcon = <FontIcon className="material-icons">Main Page</FontIcon>;
const ReactIcon = <FontIcon className="material-icons">React</FontIcon>;
const ReduxIcon = <FontIcon className="material-icons">Redux</FontIcon>;
const UdacityIcon = <FontIcon className="material-icons">Udacity</FontIcon>;
const NewPostIcon = <FontIcon className="material-icons">New Post</FontIcon>;


class Navigation extends React.Component {

  state = {
    selectedIndex: 0,
  };

  select = (index) => this.setState({ selectedIndex: index });

  changeRouteTo = (route) => (
    this.props.changeRoute(route)
  )


  render() {
    const react = "react";
    const redux = "redux";
    const udacity = "udacity";
    const newpost = "newpost";
    return (
      <div className="bottomNavigation">
        <Paper zDepth={1}>
          <BottomNavigation selectedIndex={this.state.selectedIndex}>
            <BottomNavigationItem
              icon={MainIcon}
              onClick={() => {this.changeRouteTo(""), this.select(0)}}
              containerElement={<Link to="/"></Link>}
            />
            <BottomNavigationItem
              onClick={() => {this.changeRouteTo(react), this.select(1)}}
              containerElement={<Link to={"/" + react}></Link>}
              icon={ReactIcon}
            />
            <BottomNavigationItem
              icon={ReduxIcon}
              onClick={() => {this.changeRouteTo(redux), this.select(2)}}
              containerElement={<Link to={"/" + redux}></Link>}
            />
            <BottomNavigationItem
              icon={UdacityIcon}
              onClick={() => {this.changeRouteTo(udacity), this.select(3)}}
              containerElement={<Link to={"/" + udacity}></Link>}
            />
            <BottomNavigationItem
              icon={NewPostIcon}
              onClick={() => {this.changeRouteTo(newpost), this.select(4)}}
              containerElement={<Link to={"/" + newpost}></Link>}
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

export default connect(mapStateToProps, { changeRoute })(Navigation);
