import React, { Component, Fragment } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return state.count
};

const mapDispatchToProps = (dispatch) => {
  return {
    onCountIncrease: () => dispatch({ type: "INCREMENT" }),
    onCountDecrease: () => dispatch({ type: "DECREMENT" }),
  };
};

class App extends Component {
  render() {
    return (
      <Fragment>
        <Routes >
          <Route path="/" element={<div> <a href="/home"> Home </a> <button onClick={() => this.props.onCountIncrease()}>+ </button > <span> {this.props.count} </span> <button  onClick={() => this.props.onCountDecrease()}>-</button></div>} />
          <Route path="/home" element={<div> hello world home &nbsp; { this.props.count }</div>} />
          <Route path="/checkout" element={<div> hello world checkout &nbsp; { this.props.count }</div>} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Fragment>
    );
  }
}

export default  connect(mapStateToProps, mapDispatchToProps)(App);
