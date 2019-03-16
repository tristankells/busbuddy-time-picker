import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TimePickers from "./components/TimePickers"
import CheckboxLabels from './components/CheckboxLabels';
import $ from "jquery";
import SubmitButton from "./components/SubmitButton"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      officeArrivalTime: "7:30",
      isMondayEnabled: false,
      isTuesdayEnabled: false,
      isWednesdayEnabled: false,
      isThursdayEnabled: false,
      isFridayEnabled: false,
      isSaturdayEnabled: false,
      isSundayEnabled: false
    ,
    userId : 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.mondayClick = this.mondayClick.bind(this);
  }


  setTime(newTime) {
    console.log("Time is set");
    this.setState({
      officeArrivalTime : !this.state.isMondayEnabled
    }) 
    console.log(this.state.officeArrivalTime);
  }

  mondayClick() {
    console.log("Monday is clicked");
    console.log(this.state.isMondayEnabled);
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
    
  }


  tuesdayClick() {
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
  }


 wednesdayClick() {
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
  }


  thursdayClick() {
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
  }


  fridayClick() {
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
  }


  saturdayClick() {
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
  }


  sundayClick() {
    this.setState({
      isMondayEnabled : !this.state.isMondayEnabled
    }) 
  }

  handleSubmit() {
    console.log("Button Pressed");
    var userSettings = this.state.userSettings;
    var userId = this.state.userId;

    ////////AJAX
    $.ajax({
      method: "PUT",
      url: "https://75ab1e69.ngrok.io/user-settings",
      data: JSON.stringify({
        userSettings ,
        userId
      }),
      headers: {
        'Content-Type': 'application/json',
      },
      success: function (msg) {
        alert("Data Saved: " + msg);
      }
    })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <CheckboxLabels 
          mondayClick = {this.mondayClick}
          />
          <TimePickers />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
