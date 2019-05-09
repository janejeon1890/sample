import React from "react";
// nodejs library that concatenates classes
import classNames from "classnames";
// nodejs library to set properties for components
import PropTypes from "prop-types";
// @material-ui/core components
import withStyles from "@material-ui/core/styles/withStyles";
// core
import Avatar from '@material-ui/core/Avatar';
import avatarIconStyles from './styles/AvataIconStyle';


function AvatarIcon({...props}) {
  const { 
    classes,
    children,
    className,
    avatar,
    pinkavatar,
    ...rest
  } = props;

  const avatarClasses = classNames({
    [classes.avatar]: true,
    [classes.pinkAvatar]: pinkavatar,
    [className]: className !== undefined
  });
  return (
    <Avatar className={avatarClasses} {...rest}>
        {children}
    </Avatar>
  );
}

AvatarIcon.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  avatar: PropTypes.string,
  pinkavatar: PropTypes.string
};

export default withStyles(avatarIconStyles)(AvatarIcon);