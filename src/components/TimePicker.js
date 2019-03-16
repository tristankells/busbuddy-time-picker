import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const styles = theme => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

function TimePicker(props) {
  const { classes } = props;

  function setNewTime(event) {
    props.setTime(event.target.value);
  }

  return (
    <form className={classes.container} noValidate key={props.orgiginalTime}>
      <TextField
        id="time"
        label="Start Time"
        type="time"
        defaultValue={props.orgiginalTime}
        className={classes.textField}
        InputLabelProps={{
          shrink: true,
          color : "black"
        }}
        inputProps={{
          step: 300, // 5 min
        }}
        onChange={setNewTime}
        style = {{width: 250, outlineColor : "black"}} //assign the width as your requirement
        variant="outlined"
      />
    </form>
  );
}

TimePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePicker);