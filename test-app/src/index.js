import React, { Component } from "react";
import { createRoot } from "react-dom/client";
import AppHeader from "./AppHeader";
// import AppFooter from "./AppFooter";
import AppContent from "./AppContent";
import AppFooterFunctionalComponent from "./AppFooterFunctionalComponent";

import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

class App extends Component {

  constructor(props) {
    super(props);
    this.handlePostChange = this.handlePostChange.bind(this);
    this.state = {posts: []};
  }

  handlePostChange(posts) {
    this.setState({posts: posts});
  }

  render() {
    const myProps = {
      title: "My Cool App!",
      subject: "My subject",
      favorite_color: "red",
    }

    return (
    <div className="app">
      <AppHeader {...myProps} posts={this.state.posts} handlePostChange={this.handlePostChange} />
      <AppContent handlePostChange={this.handlePostChange} posts={this.state.posts} />
      {/* <AppFooter /> */}
      <AppFooterFunctionalComponent myProperty={"Hello, world"} />
    </div>
    );
  }
}

const container = document.getElementById("root");
const root = createRoot(container);
root.render(<App />)
