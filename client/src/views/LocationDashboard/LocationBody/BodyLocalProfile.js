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
import map from "../../../assets/images/map.svg"
import question from "../../../assets/images/question.svg"

import circledeeppurple from "../../../assets/images/circledeeppurple.svg"
import circlegreen from "../../../assets/images/circlegreen.svg"
import circlesoftgreen from "../../../assets/images/circlesoftgreen.svg"
import circlered from "../../../assets/images/circlered.svg"

// map
// import LocationMap from "../../Map/LocationMap/LocationMap"



// Tooltip text
const historytooltip = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;
const movetooltip = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;
const tabletooltip = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;




class BodyLocalProfile extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer gridlocation>
        <CardLayout cardlayout>
        <GridItem gridrow>

        <div className={classes.divTitle}>
          <span className={classes.divTitleContents}>
            <img src={map} style={{height: 60}} />
          </span>
          <span className={classes.divTitleContents}>
            지역별 유저 정보
          </span>
          <span className={classes.divTitleContents}>
            <Tooltip title={historytooltip} placement="top-start">
              <img src={question} style={{height:15}}/>
            </Tooltip>
          </span>
        </div>

        <div className={classes.divLocalHistoryBox}>
          <div className={classes.divHistoryColumnFirst}>
            <div>
              {/* <LocationMap /> */}
            </div>
          </div>

          <div className={classes.divHistoryColumnSecond}>
            <div className={classes.divHistoryContents}>
              <div className={classes.divTitleSubs}>
                <span className={classes.divTitleContents}>
                  유동인구현황
                </span>
                <span className={classes.divTitleContents}>
                  <Tooltip title={movetooltip} placement="right">
                    <img src={question} style={{height:15}}/>
                  </Tooltip>
                </span>
              </div>

            
              <div className={classes.divSimpleBorder}>
                <ul className={classes.ulLHContents}>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlered} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>날짜</span>
                    <span className={classes.spanHistoryContents}>value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlegreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>전체</span>
                    <span className={classes.spanHistoryContents}>value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlesoftgreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>남자</span>
                    <span className={classes.spanHistoryContents}>value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlesoftgreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>여자</span>
                    <span className={classes.spanHistoryContents}>value</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlesoftgreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>연령 15~20</span>
                    <span className={classes.spanHistoryContents}>value</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 
        </GridItem>
        </CardLayout>
      </GridContainer>


    )
  }
}

BodyLocalProfile.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyLocalProfile);