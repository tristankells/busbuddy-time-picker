import React, { Component } from 'react'
import './App.css'
import TimePicker from './components/TimePicker'
import DayCheckboxGroup from './components/DayCheckboxGroup'
import $ from 'jquery'
import SubmitButton from './components/SubmitButton'
import qs from 'qs'
const MESSENGER_API_URL = 'https://api.zappy.chat'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = {
      isLoading: true,
      officeArrivalTime: '07:30',
      senderId: qs.parse(window.location.search, { ignoreQueryPrefix: true })
        .senderId,
      isMondayEnabled: true,
      isTuesdayEnabled: true,
      isWednesdayEnabled: true,
      isThursdayEnabled: true,
      isFridayEnabled: true,
      isSaturdayEnabled: false,
      isSundayEnabled: false
    }
  }

  // componentDidMount = () => {

  //   $.get(`${MESSENGER_API_URL}/user-settings?senderId=2052050591581851`, (data) => {
  //     console.log(data);
  //     this.setState({
  //       isMondayEnabled: data.userSettings.isMondayEnabled,
  //       isTuesdayEnabled: data.userSettings.isTuesdayEnabled,
  //       isWednesdayEnabled: data.userSettings.isWednesdayEnabled,
  //       isThursdayEnabled: data.userSettings.isThursdayEnabled,
  //       isFridayEnabled: data.userSettings.isFridayEnabled,
  //       isSaturdayEnabled: data.userSettings.isSaturdayEnabled,
  //       isSundayEnabled: data.userSettings.isSundayEnabled,
  //       officeArrivalTime: data.userSettings.officeArrivalTime
  //     })
  //   }).done(res => {
  //     console.log(this.state.officeArrivalTime);
  //   })
  // }

  setTime = newTime => {
    this.setState({
      officeArrivalTime: newTime
    })
  }

  mondayClick = () => {
    this.setState({
      isMondayEnabled: !this.state.isMondayEnabled
    })
  }

  tuesdayClick = () => {
    this.setState({
      isTuesdayEnabled: !this.state.isTuesdayEnabled
    })
  }

  wednesdayClick = () => {
    this.setState({
      isWednesdayEnabled: !this.state.isWednesdayEnabled
    })
  }

  thursdayClick = () => {
    this.setState({
      isThursdayEnabled: !this.state.isThursdayEnabled
    })
  }

  fridayClick = () => {
    this.setState({
      isFridayEnabled: !this.state.isFridayEnabled
    })
  }

  saturdayClick = () => {
    this.setState({
      isSaturdayEnabled: !this.state.isSaturdayEnabled
    })
  }

  sundayClick = () => {
    this.setState({
      isSundayEnabled: !this.state.isSundayEnabled
    })
  }

  getDayObject = (clicked, click, text) => {
    return { clicked: clicked, click: click, text: text }
  }

  getDaysArray () {
    return [
      this.getDayObject(this.state.isMondayEnabled, this.mondayClick, 'M'),
      this.getDayObject(this.state.isTuesdayEnabled, this.tuesdayClick, 'T'),
      this.getDayObject(
        this.state.isWednesdayEnabled,
        this.wednesdayClick,
        'W'
      ),
      this.getDayObject(this.state.isThursdayEnabled, this.thursdayClick, 'T'),
      this.getDayObject(this.state.isFridayEnabled, this.fridayClick, 'F'),
      this.getDayObject(this.state.isSaturdayEnabled, this.saturdayClick, 'S'),
      this.getDayObject(this.state.isSundayEnabled, this.sundayClick, 'S')
    ]
  }

  handleSubmit = () => {
    console.log('Button Pressed')
    var userSettings = {
      officeArrivalTime: this.state.officeArrivalTime,
      isMondayEnabled: this.state.isMondayEnabled,
      isTuesdayEnabled: this.state.isTuesdayEnabled,
      isWednesdayEnabled: this.state.isWednesdayEnabled,
      isThursdayEnabled: this.state.isThursdayEnabled,
      isFridayEnabled: this.state.isFridayEnabled,
      isSaturdayEnabled: this.state.isSaturdayEnabled,
      isSundayEnabled: this.state.isSundayEnabled,
      senderId: this.state.senderId
    }
    /// /////AJAX
    $.ajax({
      method: 'PUT',
      url: `${MESSENGER_API_URL}/user-settings`,
      data: JSON.stringify({
        userSettings
      }),
      headers: {
        'Content-Type': 'application/json'
      },
      success: function (msg) {
        window.close()
      }
    })
  }

  render () {
    // if (this.state.isLoading) {
    //   return null;
    // }
    return (
      <div className='App'>
      <link href="https://fonts.googleapis.com/css?family=Rubik:400,700,900" rel="stylesheet"></link>

        <header className='App-header'>
        <p>To get started, when do you work?</p>

          <DayCheckboxGroup
            mondayClick={this.mondayClick}
            tuesdayClick={this.tuesdayClick}
            wednesdayClick={this.wednesdayClick}
            thursdayClick={this.thursdayClick}
            fridayClick={this.fridayClick}
            saturdayClick={this.saturdayClick}
            sundayClick={this.sundayClick}
            monday={this.state.isMondayEnabled}
            tuesday={this.state.isTuesdayEnabled}
            wednesday={this.state.isWednesdayEnabled}
            thursday={this.state.isThursdayEnabled}
            friday={this.state.isFridayEnabled}
            saturday={this.state.isSaturdayEnabled}
            sunday={this.state.isSundayEnabled}
            days={this.getDaysArray()}
          />
          <TimePicker
            originalTime={this.state.officeArrivalTime}
            setTime={this.setTime}
          />
          <SubmitButton handleSubmit={this.handleSubmit} />
        </header>
      </div>
    )
  }
}

export default App
