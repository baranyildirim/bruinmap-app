import React, { Component } from 'react';
import { View, TouchableOpacity, Text } from 'react-native';
import DateTimePicker from 'react-native-modal-datetime-picker';
import Icon from 'react-native-vector-icons/Ionicons';

export default class DatePicker extends Component {
    state = {
        isDateTimePickerVisible: false,
        lastPickedDate: new Date(),
        minimumDate: new Date(),
      };
    

      _showDateTimePicker = () => this.setState({ isDateTimePickerVisible: true });
    
      _hideDateTimePicker = () => this.setState({ isDateTimePickerVisible: false });
    
      _handleDatePicked = (pickedDate) => {
        console.log("Date changed by datepicker");
        pickedDate.setHours(0,0,0,0);
        this.props.changeDate(pickedDate);
        this.setState({lastPickedDate: pickedDate});
        this._hideDateTimePicker();
      };
    
      render () {
        return (
          <View style={{ flex: 1 }}>
            <TouchableOpacity onPress={this._showDateTimePicker}>
              <Icon
                name="md-calendar"
                size={30}
                color="black"
              />
            </TouchableOpacity>
            <DateTimePicker
              ref={(ref) => this._dateTimePicker = ref}
              isVisible={this.state.isDateTimePickerVisible}
              onConfirm={this._handleDatePicked}
              onCancel={this._hideDateTimePicker}
              date={this.state.lastPickedDate}
              minimumDate={this.state.minimumDate}
            />
          </View>
        );
      }
}