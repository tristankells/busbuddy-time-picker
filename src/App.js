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
    this.state = { userSettings : {
      officeArrivalTime: "7:30",
      userId: 1,
      isMondayEnabled: false,
      isTuesdayEnabled: false,
      isWednesdayEnabled: false,
      isThursdayEnabled: false,
      isFridayEnabled: false,
      isSaturdayEnabled: false,
      isSundayEnabled: false
    },
    userId : 1
    }
    this.handleSubmit = this.handleSubmit.bind(this);
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
          
          
          />
          <TimePickers />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </header>
      </div>
    );
  }
}

export default App;
