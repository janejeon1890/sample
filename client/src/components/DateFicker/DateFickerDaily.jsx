import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    width: 200,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    // flexBasis: 200
  },
  dense: {
    marginTop: 16,
  },
  notchedOutline: {
    // borderWidth: "2px",
    borderColor: "#8649FF !important"
  }
});

function DateFickerDaily(props) {
  const { classes } = props;

  return (
    <form className={classes.container} noValidate>
      <TextField
        id="date"
        label="Daily"
        type="date"
        defaultValue="2019-03-01"
        className={classes.textField}
        // InputLabelProps={{
        //   shrink: true,
        // }}
        placeholder="Placeholder"
        margin="dense"
        variant="outlined"
        InputProps={{
          classes: {
            notchedOutline: classes.notchedOutline
          }
        }}
      />
    </form>
  );
}

DateFickerDaily.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(DateFickerDaily);