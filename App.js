import React, { Component } from 'react'
import { StyleSheet, Text, View, Button, Alert, TouchableOpacity,Image } from 'react-native'


export default class App extends Component {
  constructor(){
    super();
    this.state={
      randomColor:null
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      "," +
      Math.floor(Math.random() * 256) +
      ")"
    );
  };

  buttonPressed = () => {
    console.log("-------------");
    this.setState({
      randomColor:this.getRandomColor()
    });
    
  }


  render() {
    return (
      <View style={[styles.container, { backgroundColor: this.state.randomColor }]}>
        <TouchableOpacity onPress={this.buttonPressed}>
          <Image source={require("./Components/Image/email.png")}/>
        </TouchableOpacity>
        
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 30,
    backgroundColor: "#2C3335",
    paddingVertical: 10,
    paddingHorizontal: 30,
    borderRadius: 15,
    color: "#fff",
    borderColor: '#FFFFFF',

  }
})
