import React from "react";
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// style
import gridContainerStyle from "./styles/GridContainerStyle"

function GridContainer({...props}) {
  const { 
    classes, 
    className,
    children,
    grid,
    gridsmallpadding,
    gridlocation,
    ...rest 
  } = props;

  const gridClasses = classNames({
    [classes.grid]: true,
    [classes.gridSmallPadding]: gridsmallpadding,
    [classes.gridLocation]: gridlocation,
    [className]: className !== undefined
  });
  
  return (
    <Grid container className={gridClasses} {...rest}>
      {children}
    </Grid>
  );
}

GridContainer.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  grid: PropTypes.string,
  gridsmallpadding: PropTypes.string,
  gridlocation: PropTypes.string,
};

export default withStyles(gridContainerStyle)(GridContainer);
