import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import { connect } from "react-redux";
import Categories from "./Categories";
import { fetchCategories } from "../actions";
import Category from "./Category"
import Navigation from "./Navigation"
import PostForm from "./PostForm"
import EditPost from "./EditPost"

// This project will be using material components in order
// to create little prettier design

class App extends Component {
  componentDidMount() {
  }

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Navigation />
          <Route exact path="/" component={Category}/>
          <Route exact="/:category" component={Category}/>
          <Route exact path="/newpost" component={PostForm} />
          <Route exact path="/editpost" component={EditPost}/>
          {/* <Route exact path="/:category" component={CategoryList} />
          <Route exact path="/:category/:post" component={CategoryList} />
          <Route
            exact
            path="/:category/:post/:comment"
            component={CategoryList}
          />
          <Route exact path="/newpost" component={PostForm} /> */}
        </div>
      </MuiThemeProvider>
    );
  }
}

function mapStateToProps(state, ownProps) {
  return {
    };
}

export default connect(mapStateToProps, )(App);
