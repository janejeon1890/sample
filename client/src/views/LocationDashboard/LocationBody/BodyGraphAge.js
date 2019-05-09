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
// graph
import GraphAge from "../../../components/Graph/GraphAge"
// Tooltip text
const movetooltip = `
Aliquam eget finibus ante, non facilisis lectus. Sed vitae dignissim est, vel aliquam tellus. 
Praesent non nunc mollis, fermentum neque at, semper arcu. 
Nullam eget est sed sem iaculis gravida eget vitae justo. 
`;



class BodyGraphAge extends Component {
  render() {
    const { classes } = this.props;

    return (
      <GridContainer gridsmallpadding>
        <CardLayout cardlayout>
        <GridItem gridrow>
        <div className={classes.divHistoryContents}>
          <div className={classes.divTitleSubs}>
            <span className={classes.divTitleContents}>
              연령 분포
            </span>
            <span className={classes.divTitleContents}>
              <Tooltip title={movetooltip} placement="right">
                <img src={question} style={{height:15}}/>
              </Tooltip>
            </span>
          </div>

          <div>
            <div className={classes.divSimpleBorder}>
              <GraphAge />
            </div>
          </div>
        </div>
        </GridItem>
        </CardLayout>
      </GridContainer>


    )
  }
}

BodyGraphAge.propTypes = {
    classes: propTypes.object.isRequired
};


export default withStyles(dashboardStyle)(BodyGraphAge);