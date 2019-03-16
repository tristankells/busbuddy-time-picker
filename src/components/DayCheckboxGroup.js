import React from 'react';
import DayButton from './DayCheckbox';



class DayCheckboxGroup extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (<div className="btn-group">
    {this.props.days.map((element, index) => {
      return <DayButton key={index} clicked={element.clicked} onClick={element.click} text={element.text}/>;
    })}
    </div>
    );
  }
}

export default DayCheckboxGroup;