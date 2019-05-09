import React, { Component } from 'react';

// core components
import GridContainer from "../../components/Grid/GridContainer.jsx";

// header and Footer components
import UserHeader from "./UserHeader/UserHeader"
import UserFooter from "./UserFooter/UserFooter"

// body components
import BodyProfile from "./UserBody/BodyProfile"
import BodyRandom from "./UserBody/BodyRandom"
import BodyUser from "./UserBody/BodyUser"
import BodyLocation from "./UserBody/BodyLocation"
import BodyHistory from "./UserBody/BodyHistory"


class UserDashboard extends Component {
  render() {
    return (
      <div>
      <UserHeader />
      <GridContainer grid>
        <BodyProfile />
        <BodyRandom />
        <BodyUser />
        <BodyLocation />
        <BodyHistory />
      </GridContainer>
      <UserFooter />
      </div>
    )
  }
}

export default UserDashboard;



