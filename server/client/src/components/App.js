import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import { getUser } from "../stores/actions";

const mapStateToProps = (state) => {
  return {auth: state.auth}
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountIncrease: () => dispatch({ type: "INCREMENT" }),
    onCountDecrease: () => dispatch({ type: "DECREMENT" }),
    getUser: () => dispatch(getUser())
  };
};

class App extends Component {
  componentDidMount() {
    this.props.getUser()
  }
  render() {
    return (
      <div className="container" >
        <Header />
        <Routes>
          <Route
            path="/"
            element={
              <div>
                {" "}
                <a href="/home"> Home </a>{" "}
                <button onClick={() => this.props.onCountIncrease()}>+ </button>{" "}
                <span> {this.props.auth.count} </span>{" "}
                <button onClick={() => this.props.onCountDecrease()}>-</button>
              </div>
            }
          />
          <Route path="/home" element={<Header />} />
          <Route
            path="/checkout"
            element={<div> hello world checkout &nbsp; {this.props.auth.count}</div>}
          />
        </Routes>
      </div>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
