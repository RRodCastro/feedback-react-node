import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../stores/actions/index";
import Lading from "./Landing";

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

class App extends Component {
  componentDidMount() {
    this.props.getUser();
  }
  render() {
    return (
      <div className="container">
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                <Lading />
                <a href="/home"> Home </a>{" "}
                <button onClick={() => this.props.increment()}>+ </button>{" "}
                <span> {this.props.auth.count} </span>{" "}
                <button onClick={() => this.props.decrement()}>-</button>
              </div>
            }
          />
        </Routes>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(App);
