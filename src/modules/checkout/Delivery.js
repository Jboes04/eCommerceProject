import React, { Component } from 'react';
import { connect } from "react-redux";
import { basketHandler } from "./../../store/basket/handlers";
import { getProfileInfo } from "./../../store/profile/selectors";

class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      lastName: "",
      firstName: "",
    };
  }

  componentWillReceiveProps(nextProps) {
    if (!this.state.email || !this.state.lastName || !this.state.firstName) {
      this.setState({
        email: nextProps.profileInfo.U3,
        lastName: nextProps.profileInfo.wea,
        firstName: nextProps.profileInfo.ofa
      });
    }
  }

handleform = (key, firstName, lastName, address, city, zip) => {
  try {
    localStorage.setItem(key, JSON.stringify(firstName, lastName, address, city, zip));
    return true; // All went well
  } catch (error) {
    console.warn("Please fill in all the fields", error);
    return false; // An error occured
  }
}

handleChangeFirstName = (event) => {
  this.setState({firstName: event.target.value});
}

handleChangeLastName = (event) => {
  this.setState({lastName: event.target.value});
}

handleChangeEmail = (event) => {
  this.setState({email: event.target.value});
}

  render() {
    console.log("props :", this.props.profileInfo);
    return (
      <div className="container pt-5 pb-5">
      <form id="checkout" onSubmit={this.handleform}>
        <div className="form-row d-flex justify-content-center">
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control is-valid" id="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChangeFirstName} required />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control is-valid" id="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.handleChangeLastName} required />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control is-valid" id="email" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail} required />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control is-invalid" id="address" placeholder="Address" required/>
          </div>
          <div className="col-md-3 mb-3">

            <input type="text" className="form-control is-invalid" id="city" placeholder="City" required/>
          </div>
          <div className="col-md-3 mb-3">
            <input type="text" className="form-control is-invalid" id="zip" placeholder="Post Code" required/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">
            <input className="form-check-input is-invalid" type="checkbox" value="" id="invalidCheck3" required/>
            <label className="form-check-label" for="invalidCheck3">
              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit delivery info and go to payment</button>
      </form>
    </div>
    );
  }
}

const Connected = connect(getProfileInfo, basketHandler)(Delivery);
export default Connected;
