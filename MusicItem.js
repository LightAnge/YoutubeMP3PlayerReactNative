import React, { Component } from 'react';
import { Image, Text, View, TouchableOpacity } from 'react-native';


import { Audio } from 'expo-av'

import styles from "./style"

class MusicItem extends Component {
    constructor(props) {
      super(props);
      this.state = {
        onPlay: false,
        audioClip: new Audio.Sound(),
  
        title: this.props.title,
        link: this.props.link,
  
      };
    }
  
    onPress = () => {
      this.state.audioClip.getStatusAsync().then(el => {
        if (!el.isLoaded) {
          console.log("loading and play")
          this.state.audioClip.loadAsync(
  
            { uri: this.state.link }
            , {
              shouldPlay: true,
              volume: 1,
            });
        }
        else {
          if (this.state.onPlay) {
            console.log("play")
            // this.state.audioClip.replayAsync();
            this.state.audioClip.playAsync();
          }
          else {
            console.log("pause")
            // this.state.audioClip.stopAsync();
            this.state.audioClip.pauseAsync();
          }
        }
      })
      this.setState({
        onPlay: !this.state.onPlay
      });
    };
    render() {
      return (
        <View style={this.state.onPlay ? styles.musicContainPlay : styles.musicContain}>
          <TouchableOpacity onPress={this.onPress}>
            {
            this.state.onPlay 
            ? <Image style={styles.playAndPauseButton} source={require('./images/icons/pause_circle_filled.png')}/>
            : <Image style={styles.playAndPauseButton} source={require('./images/icons/play_circle_filled.png')}/>
            }
          </TouchableOpacity>
          <Text style={styles.musicTitle}>{this.state.title}</Text>
        </View>
      );
    }
  }

  export default MusicItem;