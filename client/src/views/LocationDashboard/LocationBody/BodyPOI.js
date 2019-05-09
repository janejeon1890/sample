import React, { Component } from 'react';
import propTypes from "prop-types";
import { withStyles } from '@material-ui/core';
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import CardLayout from "../../../components/Card/CardLayout";
import GridItem from "../../../components/Grid/GridItem";
// Tooltip
import Tooltip from '@material-ui/core/Tooltip';
// style
import dashboardStyle from "../../../assets/styles/dashboardStyle"
// icon
import question from "../../../assets/images/question.svg"
import circledeeppurple from "../../../assets/images/circledeeppurple.svg"
import circlegreen from "../../../assets/images/circlegreen.svg"
import circlesoftgreen from "../../../assets/images/circlesoftgreen.svg"
import circlered from "../../../assets/images/circlered.svg"
// Tooltip text
const movetooltip = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;



class BodyPOI extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer gridsmallpadding>
        <CardLayout cardlayout>
        <GridItem gridrow>
        <div className={classes.divHistoryContents}>
          <div className={classes.divTitleSubs}>
            <span className={classes.divTitleContents}>
              해당지역 주요 POI
            </span>
            <span className={classes.divTitleContents}>
              <Tooltip title={movetooltip} placement="right">
                <img src={question} style={{height:15}}/>
              </Tooltip>
            </span>
          </div>

          <div className={classes.divLocalHistoryBox}>
            <ul className={classes.ulLHContents}>
              <li className={classes.liHistory}>
                <span className={classes.spanHistoryContents}>
                  <img src={circlered} style={{height:15}}/>
                </span>
                <span className={classes.spanHistoryContents}>value</span>
              </li>
              <li className={classes.liHistory}>
                <span className={classes.spanHistoryContents}>
                  <img src={circlegreen} style={{height:15}}/>
                </span>
                <span className={classes.spanHistoryContents}>value</span>
              </li>
              <li className={classes.liHistory}>
                <span className={classes.spanHistoryContents}>
                  <img src={circlesoftgreen} style={{height:15}}/>
                </span>
                <span className={classes.spanHistoryContents}>value</span>
              </li>
              <li className={classes.liHistory}>
                <span className={classes.spanHistoryContents}>
                  <img src={circlesoftgreen} style={{height:15}}/>
                </span>
                <span className={classes.spanHistoryContents}>value</span>
              </li>
            </ul>
          </div>
        </div>
        </GridItem>
        </CardLayout>
      </GridContainer>


    )
  }
}

BodyPOI.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyPOI);