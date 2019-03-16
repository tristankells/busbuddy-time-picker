import React from 'react';
import PropTypes from 'prop-types';
import DayButton from './DayButton';



class DayCheckboxGroup extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
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

DayCheckboxGroup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default (DayCheckboxGroup);