import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import CardLayout from "../../../components/Card/CardLayout";

import dashboardStyle from "../../../assets/styles/dashboardStyle";

class BodyProfile extends Component {

  render() {
    const { classes } = this.props;
    return (
        <div>
            <GridContainer grid>
            <CardLayout cardlayout>
              <GridItem gridlefttitle>
                <textTitle className={classes.textTitle}>USER PROFILE</textTitle>
              </GridItem>
              <GridItem gridleftcontents>
                <div className={classes.profileContents}> 데이터 제공기간은 2019년 1월 1일부터 2019년 6월 30일까지 입니다. 본 대시보드는 ADID 기반의 사용자 위치 정보 데이터 활용을 위해 만들어졌으며... 블라블라...................블라블라...................블라블라......블라블라...................블라블라........블라블라...................블라블라...................블라블라...................블라블라..............................블라블라................................적을 말이 없다.....</div>
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