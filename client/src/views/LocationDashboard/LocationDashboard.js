import React, { Component } from 'react';

// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";

// header and Footer components
import LocationHeader from "../UserDashboard/UserHeader/UserHeader"
import LocationFooter from "./LocationFooter/LocationFooter"

// body components
import BodyProfile from "./LocationBody/BodyProfile"
import BodyDialog from "./LocationBody/BodyDialog"
import BodyLocalProfile from "./LocationBody/BodyLocalProfile"
import BodyGraphHours from "./LocationBody/BodyGraphHours"
import BodyGraphGender from "./LocationBody/BodyGraphGender"
import BodyGraphAge from "./LocationBody/BodyGraphAge"
import BodyPOI from "./LocationBody/BodyPOI"

class LocationDashboard extends Component {
  render() {
    return (
      <div>
      <LocationHeader />
      <GridContainer grid>
        <BodyProfile />
        <BodyDialog />
        <BodyLocalProfile />
        <BodyGraphHours />
        <BodyGraphGender />
        <BodyGraphAge />
        <BodyPOI />
      </GridContainer>
      <LocationFooter />
      </div>
    )
  }
}

export default LocationDashboard;



