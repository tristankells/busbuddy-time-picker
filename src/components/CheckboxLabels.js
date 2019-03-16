import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import green from '@material-ui/core/colors/green';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Favorite from '@material-ui/icons/FiberManualRecord';
import FavoriteBorder from '@material-ui/icons/FiberManualRecordOutlined';
import DayButton from './DayButton';

const styles = {
  root: {
    color: [600],
    '&$checked': {
      color: green[500],
    },
  },
  checked: {},
};

class CheckboxLabels extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    // const { classes } = this.props;

    return (<div className="btn-group">
      <DayButton clicked={this.props.monday} onClick = {this.props.mondayClick} text="M"></DayButton>
      <DayButton clicked={this.props.tuesday} onClick = {this.props.tuesdayClick} text="T"></DayButton>
      <DayButton clicked={this.props.wednesday} onClick = {this.props.wednesdayClick} text="W"></DayButton>
      <DayButton clicked={this.props.thursday} onClick = {this.props.thursdayClick} text="T"></DayButton>
      <DayButton clicked={this.props.friday} onClick = {this.props.fridayClick} text="F"></DayButton>
      <DayButton clicked={this.props.saturday} onClick = {this.props.saturdayClick} text="S"></DayButton>
      <DayButton clicked={this.props.sunday} onClick = {this.props.sundayClick} text="S"></DayButton>
    </div>
    );
  }
}

CheckboxLabels.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(CheckboxLabels);