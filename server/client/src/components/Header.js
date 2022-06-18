import React, { Component } from "react";
import { connect } from "react-redux";

const mapStateToProps = (state) => {
  return { auth: state.auth };
};

class Header extends Component {
  render() {
    return (
      <nav>
        <div className="nav-wrapper">
          <a href="/" className="brand-logo">
            Emaily
          </a>
          <ul id="nav-mobile" className="right">
            <li>
              <a href="sass.html">
                {this.props.auth.userId ? "Log out" : "Login with Google"}
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default connect(mapStateToProps)(Header);
