import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function SubmitButton(props) {
  const { classes } = props;
  return (
    <div>
      <Button onClick={props.handleSubmit} variant="contained" className={classes.button}  
      style = {{width: 336, marginTop: "2rem", background: "black", color:"yellow", fontWeight: "bolder", fontFamily: "Rubik", fontSize:"18px", letterSpacing:"2px"}}
      >
        Go
      </Button>
    </div>
  );
}

SubmitButton.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(SubmitButton);