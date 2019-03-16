import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const styles = {
  root: {
    color: green[600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class CheckboxLabels extends React.Component {
  state = {
    checkedMon: true,
    checkedTue: true,
    checkedWed: true,
    checkedG: true,
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    // const { classes } = this.props;

    return (
      <FormGroup row>
          <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedMon" />
          }
          label="Mon"
        />
                <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedTue" />
          }
          label="Tue"
        />
                <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedWed" />
          }
          label="Wed"
        />
                <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="cehckedThu" />
          }
          label="Thu"
        />
        <FormControlLabel
          control={
            <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} value="checkedFri" />
          }
          label="Fri"
        />
        
      </FormGroup>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);