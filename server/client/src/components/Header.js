import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';
import Payment  from "./Payments";
const mapStateToProps = ({ auth }) => {
  return { auth };
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth.userId) {
      case null:
        return null;
      case undefined:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return [
          <li key="header-payment">
            <Payment/>
          </li>,
          <li style={{margin: '0 10px'}} key="header-credits">
            {`You got: ${this.props.auth.credits} credits`}
          </li>,
          <li key="header-logout">
            <a href="/api/logout">Log out</a>
          </li>
        ];
    }
  }

  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <Link to={this.props.auth.userId ? "/surveys" : "/"} className="brand-logo">
            Emaily
          </Link>
          <ul id="nav-mobile" className="right">
          {this.renderContent()}
          </ul>
         
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Header);
