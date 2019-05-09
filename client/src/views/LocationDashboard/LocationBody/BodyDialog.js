import React, { Component } from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core';
// dialog
import DialogSelect from "../../../components/Button/DialogSelect"
// core components
import GridContainer from "../../../components/Grid/GridContainer";
import GridItem from "../../../components/Grid/GridItem";
// style
import dashboardStyle from "../../../assets/styles/dashboardStyle";


class BodyDialog extends Component {
  render() {
    const { classes } = this.props;

    return (
        <div>
          <GridContainer gridlocation>
            <GridItem gridlayoutlocation>
              <DialogSelect />
            </GridItem>
          </GridContainer>
        </div>
    )
  }

}

BodyDialog.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(dashboardStyle)(BodyDialog);