import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
// Link
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

// core
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
// img
import mainlogo from "../../../assets/images/position.svg"
// style
import UserHeaderStyles from "./UserHeaderStyle"



class UserHeader extends React.Component {
  handleChange = (event, value) => {
    this.setState({ value });
  };

  render() {
    const { classes } = this.props;

    return (
        <AppBar color="white">
        <Toolbar className={classes.toolbar}>
          <Typography className={classes.title}>
            <Link to="/user" className={classes.headerTitle}>
            <div className={classes.divheaderIcon}>
              <span><img src={mainlogo} style={{height:"30px", paddingRight:"15px"}}/></span>
            </div>
            <div className={classes.divheaderTitle}>
              <span >WAY</span>
            </div>
            </Link>
          </Typography>
          <div>
            <Button component={ Link } className={classes.buttonStyle} to="/user"
            disableRipple
            color="primary">
              USER
            </Button>
            <Button component={ Link } className={classes.buttonStyle} to="/location" color="primary">
              LOCATION
            </Button>
          </div>
        </Toolbar>
        </AppBar>
    );
  }
}

UserHeader.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(UserHeaderStyles)(UserHeader);