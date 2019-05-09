import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardLayout from "../../../components/Card/CardLayout";

import dashboardStyle from "../../../assets/styles/dashboardStyle";

class BodyProfile extends Component {
  // state = {
  //   value: 0
  // };
  // handleChange = (event, value) => {
  //   this.setState({ value });
  // };

  // handleChangeIndex = index => {
  //   this.setState({ value: index });
  // };

  render() {
    const { classes } = this.props;
    return (
        <div>
            <GridContainer grid>
            <CardLayout cardlayout>
              <GridItem gridlefttitle>
                <span className={classes.textTitle}>LOCATION</span>
              </GridItem>
              <GridItem gridleftcontents>
                <div className={classes.profileContents}> 데이터에 대한 간단한 설명</div>
              </GridItem>
            </CardLayout>
            </GridContainer>
        </div>

        )
  }

}

BodyProfile.propTypes = {
  classes: PropTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyProfile);