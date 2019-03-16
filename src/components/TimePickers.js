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

function TimePickers(props) {
  const { classes } = props;

 

  function setNewTime(event) {
    console.log("New time is " + event.target.value)
    props.setTime(event.target.value);
  }

  
console.log('original time',props.orgiginalTime)
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

TimePickers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePickers);