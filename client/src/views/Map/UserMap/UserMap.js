import React, { Component } from 'react';
import propTypes from "prop-types";

// map API
import DaumMap from "../../../assets/API/DaumMap"

class UserMap extends Component {
    render() {  
      return (
          <div>
              <DaumMap />
          </div>
        )
    }
}

export default UserMap;
