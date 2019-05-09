import React from "react";
import classNames from "classnames";
import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";
import InputAdornment from "@material-ui/core/InputAdornment";
import TextField from "@material-ui/core/TextField";
import MenuItem from "@material-ui/core/MenuItem";


const styles = theme => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 100
  },
  notchedOutline: {
    borderColor: "#8649FF !important"
  }
});

const ranges = [
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  },
  {
    value: "5",
    label: "5"
  },
  {
    value: "6",
    label: "6"
  }
];

class DateFickerMonth extends React.Component {
  state = {
    amount: "",
    password: "",
    weight: "",
    weightRange: "",
    showPassword: false
  };

  handleChange = prop => event => {
    this.setState({ [prop]: event.target.value });
  };

  handleClickShowPassword = () => {
    this.setState(state => ({ showPassword: !state.showPassword }));
  };

  render() {
    const { classes } = this.props;

    return (
      <div className={classes.root}>
        <TextField
          select
          className={classNames(classes.margin, classes.textField)}
          variant="outlined"
          label="Month"
          value={this.state.weightRange}
          onChange={this.handleChange("weightRange")}
          margin="dense"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">월</InputAdornment>
            ),
            classes: {
              notchedOutline: classes.notchedOutline
            }
          }}
        >
          {ranges.map(option => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
      </div>
    );
  }
}

DateFickerMonth.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateFickerMonth);
