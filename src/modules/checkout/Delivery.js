import React, { Component } from 'react';
import { connect } from "react-redux";
import { basketHandler } from "./../../store/basket/handlers";
import { getProfileInfo } from "./../../store/profile/selectors";
import { Redirect } from 'react-router-dom';


class Delivery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: props.profileInfo.U3,
      lastName: props.profileInfo.wea,
      firstName: props.profileInfo.ofa,
      address: "",
      city: "",
      postcode: "",
      formAccepted: false,
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

handleForm = (event) => {
  event.preventDefault();
  try {
    localStorage.setItem("address", JSON.stringify({...this.state}));
    //console.log("local storage: ", localStorage);
    this.setState({formAccepted: true})
    return true;
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

handleChangeAddress = (event) => {
  this.setState({address: event.target.value});
}

handleChangeCity = (event) => {
  this.setState({city: event.target.value});
}

handleChangePostCode = (event) => {
  this.setState({postcode: event.target.value});
}

// goToBasketRecap = () => {
//   if (localStorage.getItem("address") !== null) {
//     <Redirect to="/basketrecap" />
//   }
// }



  render() {
    //console.log("props :", this.props.profileInfo);
    return (
      <div className="container pt-5 pb-5">
      <form id="checkout" onSubmit={this.handleForm}>
        <div className="form-row d-flex justify-content-center">
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" id="firstName" placeholder="First name" value={this.state.firstName} onChange={this.handleChangeFirstName} required />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" id="lastName" placeholder="Last name" value={this.state.lastName} onChange={this.handleChangeLastName} required />
          </div>
          <div className="col-md-4 mb-3">
            <input type="text" className="form-control" id="email" placeholder="email" value={this.state.email} onChange={this.handleChangeEmail} required />
          </div>
        </div>
        <div className="form-row">
          <div className="col-md-6 mb-3">
            <input type="text" className="form-control" id="address" placeholder="Address" value={this.state.address} onChange={this.handleChangeAddress} required/>
          </div>
          <div className="col-md-3 mb-3">

            <input type="text" className="form-control" id="city" placeholder="City" value={this.state.city} onChange={this.handleChangeCity} required/>
          </div>
          <div className="col-md-3 mb-3">
            <input type="text" className="form-control" id="zip" placeholder="Post Code" value={this.state.postcode} onChange={this.handleChangePostCode} required/>
          </div>
        </div>
        <div className="form-group">
          <div className="form-check">

            <label className="form-check-label" htmlFor="invalidCheck3">

              Agree to terms and conditions
            </label>
            <div className="invalid-feedback">
              You must agree before submitting.
            </div>
          </div>
        </div>
        <button className="btn btn-primary" type="submit">Submit delivery info and go to payment</button>
      </form>
      {this.state.formAccepted && <Redirect to="/basketrecap" />}
    </div>
    );
  }
}

const Connected = connect(getProfileInfo, basketHandler)(Delivery);
export default Connected;
