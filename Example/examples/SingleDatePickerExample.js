import React, { Component } from 'react'
import { DatesPicker } from 'react-native-modal-datepicker'

export default class SingleDatePickerExample extends Component {

  constructor (props) {
    super(props)
    this.state = {
      dates: []
    }
  }

  onDatesChange = (dates) => {
    this.setState({ dates })
  }

  resetDates = () => {
    this.setState({dates: []})
  }

  render () {
    const { dates } = this.state

    return (
      <DatesPicker
        onDatesChange={this.onDatesChange}
        onClearPress={this.resetDates}
        dates={dates}
        maxNumberOfDates={1}
        style={{}}
        dateInputStyle={{}}
        dateInputTextStyle={{}}
        calendarModalStyle={{}}
        calendarModalFooterStyle={{}}
        calendarModalFooterButtonStyle={{}}
        calendarModalFooterTextStyle={{}}
        calendarMonthListStyle={{}}
        calendarMonthStyle={{}}
        calendarMonthTitleStyle={{}}
        calendarMonthWeekStyle={{}}
        calendarDaySelectedTextStyle={{}}
        calendarDayPastTextStyle={{}}
        calendarDayContainerStyle={{}}
        calendarDaySelectedContainerStyle={{}}
        calendarDaySelectedStartContainerStyle={{}}
        calendarDaySelectedEndContainerStyle={{}}
      />
    )
  }
}
