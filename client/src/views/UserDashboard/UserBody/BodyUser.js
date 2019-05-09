import React, { Component, Fragment } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import CardLayout from "../../../components/Card/CardLayout";
import GridItem from "../../../components/Grid/GridItem";
import Tooltip from '@material-ui/core/Tooltip';
// style
import dashboardStyle from "../../../assets/styles/dashboardStyle";
//icon
import usersvg from "../../../assets/images/user.svg";
import question from "../../../assets/images/question.svg";
// queries
import { USER_QUERY } from '../../../queries';
import { Query } from 'react-apollo';
// Tooltip text
const adidtooltip = `
adid tooltip
`;
const gendertooltip = `
gender tooltip
`;
const agetooltip = `
age tooltip
`;
const jobtooltip = `
job tooltip
`;
// <Tooltip title={longText}></Tooltip>


class BodyUser extends Component {
  render() {
    const { classes } = this.props ;

    return (
      <Query query={USER_QUERY}>
      {
        ({ loading, error, data }) => {
        if (error) return 'error';
        if (loading) return 'loading';
        return (data.getUsers.map(user =>
          <Fragment>
          <div>
            <GridContainer gridsmallpadding>
              <CardLayout cardlayout>
              <GridItem gridlefttitle>
                  <GridItem gridicon>
                    <img src={usersvg} style={{height:60}}/>
                  </GridItem>
              </GridItem>
              <GridItem gridleftcontents>
                <div className={classes.divLocalHistoryBox}>
                  <div className={classes.divUserColumnFirst}>
                    <ul className={classes.ulUserContents}>
                      <li className={classes.liUserContents}>
                        <span className={classes.spanContents}>
                          ADID
                        </span>
                        <span className={classes.spanContents}>
                          <Tooltip title={adidtooltip} placement="top">
                            <img src={question} style={{height:15}}/>
                          </Tooltip>
                        </span>
                        <span className={classes.spanContents}>
                          {user.adid}
                        </span>
                      </li>
                      <li className={classes.liUserContents}>
                        <span className={classes.spanContents}>
                          GENDER
                        </span>
                        <span className={classes.spanContents}>
                          <Tooltip title={gendertooltip} placement="bottom">
                            <img src={question} style={{height:15}}/>
                          </Tooltip>
                        </span>
                        <span className={classes.spanContents}>
                          {user.gender}
                        </span>
                      </li>
                    </ul>
                  </div>

                  <div className={classes.divUserColumnSecond}>
                  <ul className={classes.ulUserContents}>
                      <li className={classes.liUserContents}>
                        <span className={classes.spanContents}>
                          AGE
                        </span>
                        <span className={classes.spanContents}>
                          <Tooltip title={agetooltip} placement="top">
                            <img src={question} style={{height:15}}/>
                          </Tooltip>
                        </span>
                        <span className={classes.spanContents}>
                          {user.age}
                        </span>
                      </li>
                      <li className={classes.liUserContents}>
                        <span className={classes.spanContents}>
                          JOB
                        </span>
                        <span className={classes.spanContents}>
                          <Tooltip title={jobtooltip} placement="bottom">
                            <img src={question} style={{height:15}}/>
                          </Tooltip>
                        </span>
                        <span className={classes.spanContents}>
                          {user.job}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </GridItem>
              </CardLayout>
            </GridContainer>
        </div>
        </Fragment>
        ))
        }}
      </Query>
      )
  }

}

BodyUser.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(BodyUser);



