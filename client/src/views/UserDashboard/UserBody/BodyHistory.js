import React, { Component } from 'react';
import propTypes from "prop-types";
import { withStyles } from '@material-ui/core';
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import CardLayout from "../../../components/Card/CardLayout";
import GridItem from "../../../components/Grid/GridItem";
import BodyDatatable from "./BodyDatatable";
import DateFickerDaily from "../../../components/DateFicker/DateFickerDaily";
import DateFickerWeek from "../../../components/DateFicker/DateFickerWeek";
import DateFickerMonth from "../../../components/DateFicker/DateFickerMonth";
// Tooltip
import Tooltip from '@material-ui/core/Tooltip';
// style
import dashboardStyle from "../../../assets/styles/dashboardStyle"
// icon
import timer from "../../../assets/images/timer.svg"
import question from "../../../assets/images/question.svg"
import circledeeppurple from "../../../assets/images/circledeeppurple.svg"
import circlegreen from "../../../assets/images/circlegreen.svg"
import circlesoftgreen from "../../../assets/images/circlesoftgreen.svg"
import circlered from "../../../assets/images/circlered.svg"
// map
import UserMap from "../../Map/UserMap/UserMap"
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




class BodyHistory extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer gridsmallpadding>
        <CardLayout cardlayout>
        <GridItem gridrow>

        <div className={classes.divTitle}>
          <span className={classes.divTitleContents}>
            <img src={timer} style={{height: 60}} />
          </span>
          <span className={classes.divTitleContents}>
            LOCAL HISTORY
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
              <UserMap />
            </div>
          </div>

          <div className={classes.divHistoryColumnSecond}>
            <div className={classes.divHistoryContents}>
              <div className={classes.divDayButtonRow}>
                <span><DateFickerDaily /></span> 
                <span><DateFickerMonth /></span>
                <span><DateFickerWeek /></span>
              </div>

              <div className={classes.divTitleSubs}>
                <span className={classes.divTitleContents}>
                  이동정보
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
                    <span className={classes.spanHistoryContents}>자주 이용하는 교통정보</span>
                    <span className={classes.spanHistoryContents}>버스</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlegreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>최빈 방문 지역</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanStyleSub}>주간</span>
                    <span className={classes.spanHistoryContents}>경기도 성남시 삼평동</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanStyleSub}>야간</span>
                    <span className={classes.spanHistoryContents}>경기도 성남시 삼평동</span>
                  </li>
                  <li className={classes.liHistory}>
                    <span className={classes.spanHistoryContents}>
                      <img src={circlesoftgreen} style={{height:15}}/>
                    </span>
                    <span className={classes.spanHistoryContents}>차량 이동 거리</span>
                    <span className={classes.spanHistoryContents}>그래프</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div> 

        <div className={classes.divHistoryContents}>
          <div className={classes.divTitleSubs}>
            <span className={classes.divTitleContents}>
              DATA TABLE
            </span>
            <span className={classes.divTitleContents}>
              <Tooltip title={movetooltip} placement="right">
                <img src={question} style={{height:15}}/>
              </Tooltip>
            </span>
          </div>

          <div>
            <div className={classes.divSimpleBorder}>
              <BodyDatatable />
            </div>
          </div>
        </div>
        </GridItem>
        </CardLayout>
      </GridContainer>


    )
  }
}

BodyHistory.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyHistory);