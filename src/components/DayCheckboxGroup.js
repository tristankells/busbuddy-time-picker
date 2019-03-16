import React from 'react';
import DayButton from './DayCheckbox';



class DayCheckboxGroup extends React.Component {

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  render() {
    return (<div style={{color : "black", textAlign:"left"}} className="btn-group">
    <label style={{fontSize : "15px", marginLeft:"2px"}}>Days: </label>
    <br/>
    {this.props.days.map((element, index) => {
      return <DayButton key={index} clicked={element.clicked} onClick={element.click} text={element.text}/>;
    })}
    </div>
    );
  }
}

export default DayCheckboxGroup;