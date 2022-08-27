import React, { Component } from "react";
import { Routes, Route } from "react-router-dom";
import { connect } from "react-redux";
import Header from "./Header";
import * as actions from "../stores/actions/index";
import Lading from "./Landing";
import DashBoard from "./DashBoard";
import { NewSurvey } from "./surveys/NewSurvey";

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
          <Route path="/" element={<Lading />} />
          <Route path="/surveys" element={<DashBoard />} />
          <Route path="/surveys/new" element={<NewSurvey />} />
        </Routes>
      </div>
    );
  }
}

export default connect(mapStateToProps, actions)(App);
