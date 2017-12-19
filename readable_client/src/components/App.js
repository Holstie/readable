import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import Header from "./Header";
import { connect } from "react-redux";
import Navigation from "./Navigation";
import PostForm from "./PostForm";
import EditPost from "./EditPost";
import PostDetails from "./PostDetails";
import Posts from "./Posts";
import EditComment from "./EditComment";
import { withRouter } from "react-router";
import NotFoundPage from "./NotFoundPage";

// This project will be using material components in order
// to create a little prettier design

const App = () => {
  return (
    <MuiThemeProvider>
      <div className="App">
        <Header />
        <Navigation />
        <Switch>
          <Route exact path="/editpost/:post" component={EditPost} />
          <Route exact path="/editComment/:comment" component={EditComment} />
          <Route exact path="/newpost" component={PostForm} />
          <Route
            exact
            path="/:category/:id"
            render={props => <PostDetails {...props} />}
          />
          <Route
            exact
            path="/:category"
            render={props => <Posts {...props} />}
          />
          <Route exact path="/" render={props => <Posts {...props} />} />


        </Switch>
      </div>
    </MuiThemeProvider>
  );
}

function mapStateToProps(state, ownProps) {
  return {};
}

export default withRouter(connect(mapStateToProps)(App));
