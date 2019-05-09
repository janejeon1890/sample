import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
import RegularButton from "../../../components/Button/Button";

// style
import dashboardStyle from "../../../assets/styles/dashboardStyle";


class BodyRandom extends Component {
  render() {
    const { classes } = this.props;
    return (
        <div>
          <GridContainer gridsmallpadding>
          <GridItem gridlayout>
              <GridItem gridlefttitle>
                <RegularButton className={classes.button} color="blue" >adid random</RegularButton>
              </GridItem>
              <GridItem gridleftcontents>
                <div className={classes.profileContents}>...................༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽ ༼☯﹏☯༽.....</div>
              </GridItem>
          </GridItem>
          </GridContainer>
        </div>
    )
  }

}

BodyRandom.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(BodyRandom);