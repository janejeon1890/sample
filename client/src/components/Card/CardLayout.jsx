import React from "react";

// nodejs library that concatenates classes
import classNames from "classnames";

// nodejs library to set properties for components
import PropTypes from "prop-types";

// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
import Card from '@material-ui/core/Card';

// core components
import cardLayoutStyle from "./styles/CardLayoutStyle.jsx";

function CardLayout({ ...props }) {
  const {
    classes,
    className,
    children,
    cardlayout,
    cardsmallpadding,
    ...rest
  } = props;

  const cardClasses = classNames({
    [classes.cardLayout]: true,
    [classes.cardSmallPadding]: cardsmallpadding,
    [className]: className !== undefined
  });
  return (
    <Card className={cardClasses} {...rest}>
      {children}
    </Card>
  );
}

CardLayout.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  plain: PropTypes.bool,
  cardsmallpadding: PropTypes.bool,
};

export default withStyles(cardLayoutStyle)(CardLayout);
