import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// material-ui components
import withStyles from "@material-ui/core/styles/withStyles";
import Button from "@material-ui/core/Button";

import buttonStyle from "./styles/ButtonStyle.jsx";


function RegularButton({ ...props }) {
  const {
    classes,
    color,
    children,
    className,
    muiClasses,
    ...rest
  } = props;

  const btnClasses = classNames({
    [classes.button]: true,
    [classes[color]]: color,
    [className]: className
  });
  return (
    <Button {...rest} classes={muiClasses} className={btnClasses}>
      {children}
    </Button>
  );
}



export default withStyles(buttonStyle)(RegularButton);
