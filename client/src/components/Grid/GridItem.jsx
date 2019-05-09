import React from "react";
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Grid from "@material-ui/core/Grid";

// style
import gridItemStyle from "./styles/GridItemStyle"


function GridItem({ ...props }) {
  const { 
    classes,
    className,
    children,  
    gridlefttitle, 
    gridleftcontents,
    gridicon,
    gridlayout,
    gridlayoutlocation,
    gridcolumnfirst,
    gridcolumnsecond,
    gridrow,
    gridcontentsrow,
    gridcontentscolumn,
    ...rest 
  } = props;

  const gridClasses = classNames({
    [classes.gridLeftTitle]: gridlefttitle,
    [classes.gridLeftContents]: gridleftcontents,
    [classes.gridLayout]: gridlayout,
    [classes.gridLayoutLocation]: gridlayoutlocation,
    [classes.gridIcon]: gridicon,
    [classes.gridColumnFirst]: gridcolumnfirst,
    [classes.gridColumnSecond]: gridcolumnsecond,
    [classes.gridRow]: gridrow,
    [classes.gridContentsRow]: gridcontentsrow,
    [classes.gridContentsColumn]: gridcontentscolumn,
    [className]: className !== undefined
  });
  
  return (
    <Grid item className={gridClasses} {...rest}>
      {children}
    </Grid>
  );
}

GridItem.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  gridlefttitle: PropTypes.string,
  gridleftcontents: PropTypes.string,
  gridlayout: PropTypes.string,
  gridlayoutlocation: PropTypes.string,
  gridicon: PropTypes.string,
  gridcolumnfirst: PropTypes.string,
  gridcolumnsecond: PropTypes.string,
  gridrow: PropTypes.string,
  gridcontentsrow: PropTypes.string,
  gridcontentscolumn: PropTypes.string,
};

export default withStyles(gridItemStyle)(GridItem);