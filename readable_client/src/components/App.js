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
import { withRouter } from "react-router";

// This project will be using material components in order
// to create a little prettier design

class App extends Component {
  componentDidMount() {}

  render() {
    return (
      <MuiThemeProvider>
        <div className="App">
          <Header />
          <Navigation />
          <Switch>

          <Route exact path="/editpost/:post" component={EditPost} />
          <Route exact path="/newpost" component={PostForm} />
          <Route exact path="/:category/:id" render={props => <PostDetails {...props} />}/>
          <Route
            exact
            path="/:category"
            render={props => <Posts {...props} />}
          />
          <Route exact path="/" render={props => <Posts {...props} />} />
          </Switch>

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
  return {};
}

export default withRouter(connect(mapStateToProps)(App));
