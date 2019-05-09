import React, { Component } from 'react';
import propTypes from "prop-types";
import { withStyles } from '@material-ui/core';

// core components
import GridContainer from "../../../components/Grid/GridContainer";
import CardLayout from "../../../components/Card/CardLayout";
import GridItem from "../../../components/Grid/GridItem";

// Tooltip
import Tooltip from '@material-ui/core/Tooltip';

// icon
import location from "../../../assets/images/location.svg"
import question from "../../../assets/images/question.svg"
import home from "../../../assets/images/home.svg"
import building from "../../../assets/images/buildings.svg"
import road from "../../../assets/images/road.svg"
import rating from "../../../assets/images/rating.svg"
import airport from "../../../assets/images/airport.svg"

// style
import dashboardStyle from "../../../assets/styles/dashboardStyle"

// Tooltip text
const locationtooltip = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;


class BodyLocation extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div>
            <GridContainer gridsmallpadding>
              <CardLayout cardlayout>
                <GridItem gridcolumnfirst>
                  <div className={classes.divTitle}>
                    <span className={classes.divTitleContents}>
                      <img src={location} style={{height: 50}} />
                    </span>
                    <span className={classes.divTitleContents}>
                      LOCATION
                    </span>
                    <span className={classes.divTitleContents}>
                      <Tooltip title={locationtooltip} placement="top-start">
                        <img src={question} style={{height:15}}/>
                      </Tooltip>
                    </span>
                  </div>

                  <ul className={classes.ulLHContents}>
                    <li className={classes.liLocationContents}>
                      <span className={classes.spanContents}>
                        <img src={home} style={{height: 35}} />
                      </span>
                      <span className={classes.spanContents}>
                        집
                      </span>
                      <span className={classes.spanContents}>
                        경기도 성남시 분당구 야탑동
                      </span>
                    </li>
                    <li className={classes.liLocationContents}>
                      <span className={classes.spanContents}>
                        <img src={building} style={{height: 35}} />
                      </span>
                      <span className={classes.spanContents}>
                        회사
                      </span>
                      <span className={classes.spanContents}>
                        경기도 성남시 분당구 삼평동
                      </span>
                    </li>
                  </ul>
                </GridItem>
                <GridItem gridcolumnsecond>
                  <ul className={classes.ulLHContents}>
                    <li className={classes.liLocationSecondContents}>
                      <span className={classes.spanContents}>
                        <img src={road} style={{height: 35}} />
                      </span>
                      <span className={classes.spanContents}>
                        일별 평균 이동 횟수
                      </span>
                      <span className={classes.spanContents}>
                        주중 2회 | 주말 3회
                      </span>
                    </li>
                    <li className={classes.liLocationSecondContents}>
                      <span className={classes.spanContents}>
                        <img src={rating} style={{height: 35}} /></span>
                        <span className={classes.spanContents}>
                          최빈 체류 지역
                        </span>
                        <span className={classes.spanContents}>
                          경기도 성남시 분당구 삼평동
                        </span>
                    </li>
                    <li className={classes.liLocationSecondContents}>
                      <span className={classes.spanContents}>
                        <img src={airport} style={{height: 35}} />
                      </span>
                      <span className={classes.spanContents}>
                        해외 체류 정보
                      </span>
                      <span className={classes.spanContents}>
                        체류정보 없음
                      </span>
                    </li>
                  </ul>
                </GridItem>
              </CardLayout>
            </GridContainer>
        </div>

        )
  }

}

BodyLocation.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyLocation);