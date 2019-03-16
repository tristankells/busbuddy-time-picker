import React, { Component } from 'react';
import './App.css';
import TimePickers from "./components/TimePickers"
import CheckboxLabels from './components/CheckboxLabels';
import $ from "jquery";
import SubmitButton from "./components/SubmitButton"
import qs from 'qs'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      officeArrivalTime: "7:30",
      senderId: qs.parse(window.location.search, { ignoreQueryPrefix: true }).senderId,
      isMondayEnabled: false,
      isTuesdayEnabled: false,
      isWednesdayEnabled: false,
      isThursdayEnabled: false,
      isFridayEnabled: false,
      isSaturdayEnabled: false,
      isSundayEnabled: false
    }

    //Bind 'this' to functions 
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mondayClick = this.mondayClick.bind(this);
    this.tuesdayClick = this.tuesdayClick.bind(this);
    this.wednesdayClick = this.wednesdayClick.bind(this);
    this.thursdayClick = this.thursdayClick.bind(this);
    this.fridayClick = this.fridayClick.bind(this);
    this.saturdayClick = this.saturdayClick.bind(this);
    this.sundayClick = this.sundayClick.bind(this);
    this.setTime = this.setTime.bind(this);
  }


  setTime(newTime) {
    this.setState({
      officeArrivalTime: newTime
    })
  }

  mondayClick() {
    this.setState({
      isMondayEnabled: this.state.isMondayEnabled ? false : true
    }, function() {
      console.log(this.state.isMondayEnabled);
    })
  }


  tuesdayClick() {
    this.setState({
      isTuesdayEnabled: this.state.isTuesdayEnabled ? false : true
    })
  }


  wednesdayClick() {
    this.setState({
      isWednesdayEnabled: this.state.isWednesdayEnabled ? false : true
    })
  }


  thursdayClick() {
    this.setState({
      isThursdayEnabled: this.state.isThursdayEnabled ? false : true
    })
  }


  fridayClick() {
    this.setState({
      isFridayEnabled: this.state.isFridayEnabled ? false : true
    })
  }


  saturdayClick() {
    this.setState({
      isSaturdayEnabled: this.state.isSaturdayEnabled ? false : true
    })
  }


  sundayClick() {
    this.setState({
      isSundayEnabled: this.state.isSundayEnabled ? false : true
    })
  }

  handleSubmit() {
    console.log("Button Pressed");
    var userSettings = {
      officeArrivalTime: this.state.officeArrivalTime,
      isMondayEnabled: this.state.isMondayEnabled,
      isTuesdayEnabled: this.state.isTuesdayEnabled,
      isWednesdayEnabled: this.state.isWednesdayEnabled,
      isThursdayEnabled: this.state.isThursdayEnabled,
      isFridayEnabled: this.state.isFridayEnabled,
      isSaturdayEnabled: this.state.isSaturdayEnabled,
      isSundayEnabled: this.state.isSundayEnabled,
      senderId : this.state.senderId
    };
    ////////AJAX
    $.ajax({
      method: "PUT",
      url: "https://75ab1e69.ngrok.io/user-settings",
      data: JSON.stringify({
        userSettings
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      success: function (msg) {
        window.close();
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <CheckboxLabels
            mondayClick={this.mondayClick}
            tuesdayClick={this.tuesdayClick}
            wednesdayClick={this.wednesdayClick}
            thursdayClick={this.thursdayClick}
            fridayClick={this.fridayClick}
            saturdayClick={this.saturdayClick}
            sundayClick={this.sundayClick}
          />
          <TimePickers setTime={this.setTime}  />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
