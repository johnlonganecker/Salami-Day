import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Confetti from 'react-native-confetti';
import moment from 'moment';

export default class App extends React.Component {

  state = {todayIsSalamiDay: ''};

  check() {
    let check = moment('20170907').format('MMDD') == moment().format('MMDD');
    this.setState({ todayIsSalamiDay: check });
  }

  renderCheck() {
    const { notificationText } = styles;

    if (this.state.todayIsSalamiDay === true) {
      this._confettiView.startConfetti();
      return (
        <Text style={notificationText}>Congrats It is!</Text>
      )
    }
    else if(this.state.todayIsSalamiDay === false) {
      return (
        <Text style={notificationText}>Sorry it is not</Text>
      )
    }
    
    return (
      <Text style={notificationText}>Tap below to check if today is National Salami Day!</Text>
    )
  }

  render() {

    const {
      container, 
      buttonContainer, 
      notificationContainer,
      buttonStyle, 
      buttonTextStyle
    } = styles;

    return (
      <View style={container}>
        <Confetti ref={(node) => this._confettiView = node}/>
        <View style={notificationContainer}>
          {this.renderCheck()}
        </View>
        <View style={buttonContainer}>
          <TouchableOpacity style={buttonStyle} onPress={this.check.bind(this)}>
            <Text style={buttonTextStyle}>CHECK</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-around',
    paddingTop: 50,
    paddingBottom: 50
  },
  buttonContainer: {
    justifyContent: 'flex-start',
    flexDirection: 'row'
  },
  notificationContainer: {
    width: 200,
    backgroundColor: '#C46159',
    borderBottomWidth: 1,
    borderColor: '#ddd',
    borderRadius: 10,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'column',
  },
  notificationText: {
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 24
  },
  buttonStyle: {
    flex: 0.5,
    alignSelf: 'stretch',
    backgroundColor: '#7A1D0C',
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#2C1916',
    paddingTop: 10,
    paddingBottom: 10
  },
  buttonTextStyle: {
    alignSelf: 'center',
    color: '#fff',
    fontSize: 16,
    fontWeight: '600',
    paddingTop: 10,
    paddingBottom: 10
  }
  
});
