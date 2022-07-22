import React, { Component } from "react";
import StripeCheckout from "react-stripe-checkout";
import { connect } from "react-redux";
import * as actions from "../stores/actions/index";

class Payment extends Component {
  render() {
    return (
      <StripeCheckout
        name="Emaily"
        description="Charge $5"
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
        amount={500}
        token={(token) => this.props.handleToken(token)}
      >
        
        <button className="btn">
            Add Credits
        </button>
    </StripeCheckout>
    );
  }
}


export default connect(null, actions)(Payment);