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
    flexWrap: "wrap"
  },
  margin: {
    margin: theme.spacing.unit
  },
  textField: {
    flexBasis: 100,
  },
  dense: {
    marginTop: 5,
  },
  notchedOutline: {
    borderColor: "#8649FF !important"
  },
});

const ranges = [
  {
    value: "1",
    label: "1"
  },
  {
    value: "2",
    label: "2"
  },
  {
    value: "3",
    label: "3"
  },
  {
    value: "4",
    label: "4"
  }
];

class DateFickerWeek extends React.Component {
  state = {
    amount: "",
    password: "",
    weight: "",
    week: "",
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
          label="Week"
          value={this.state.week}
          margin="dense"
          onChange={this.handleChange("week")}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">주</InputAdornment>
            ),
            classes: {
              notchedOutline: classes.notchedOutline,
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

DateFickerWeek.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(DateFickerWeek);
