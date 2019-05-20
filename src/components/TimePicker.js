import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';


const styles = theme => ({
  rubikFont: {
    fontFamily: "Rubik",
    // color:'red'
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    fontFamily: "Rubik",
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 300,
    fontFamily: "Rubik",
    fontWeight: 600,

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
        fullWidth
        
        defaultValue={props.orgiginalTime}
        className={classes.textField + " potato"}
        InputLabelProps={{
          shrink: true,
          FormLabelClasses: [classes.rubikFont],
          classes: {
            input: classes.rubikFont
          },
        }}
        InputProps={{
          step: 300, // 5 min
          classes: {
            input: classes.rubikFont
          }
        }}
        FormLabelClasses= {{
          classes: {
            input: classes.rubikFont
          },
        }}

        onChange={setNewTime}
        style = {{
          width: 336, 
          outlineColor: "yellow",

        
        }} //assign the width as your requirement
        variant="outlined"
      />
    </form>
  );
}

TimePicker.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TimePicker);