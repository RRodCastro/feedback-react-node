import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from 'react-router-dom';

const mapStateToProps = ({ auth }) => {
  return { auth };
};

class Header extends Component {
  renderContent() {
    switch (this.props.auth.userId) {
      case null:
        return null;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <li>
            <a href="/api/logout">Log out</a>
          </li>
        );
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
