import React, { Component } from 'react';
import StripeCheckOut from 'react-stripe-checkout';
import { connect } from 'react-redux';
import * as actions from '../store/auth/actions';
class Payments extends Component {
  render() {
    return (
      <StripeCheckOut
        name="Emaily"
        description="$5 for 5 email credits"
        amount={500}
        token={token => this.props.addCredits(token)}
        stripeKey={process.env.REACT_APP_STRIPE_KEY}
      >
        <button className="btn"> ADD CREDITS</button>
      </StripeCheckOut>
    );
  }
}

export default connect(null, { addCredits: actions.addCredits })(Payments);
