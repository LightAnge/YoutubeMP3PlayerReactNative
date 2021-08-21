import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import {Modal, Button, ScrollView, Image, Text, View, TouchableOpacity, TextInput } from 'react-native';

import styles from "./style"
import MusicItem from "./MusicItem";

const axios = require('axios');
import ytdl from "react-native-ytdl"

const GOOGLE_API_KEY ="Your_Api_key";

class App extends Component {
  constructor(props) {
    super(props)
    this.modal = React.createRef();
    //musicReset = useRef(null);
    this.state = {
      musicList: [],
      search: "",
      onLoading: false
    }
  }
  coolReset = () => {
    if(this.state.musicList.length !=0){
      this.state.musicList.length.popup();

      setTimeout(this.coolReset,200);
    }
    this.setState({
      musicList: this.state.musicList
    })
  } 
  searchWord = async () => {
    console.log("search of : "+this.state.search)

    this.setState({
      musicList: [],
      onLoading: true
    })
    axios.get('https://www.googleapis.com/youtube/v3/search?key='+GOOGLE_API_KEY+'&type=video&q=' + this.state.search.replace(/\ /g, "%20"))
    .then(async (response) => {
      //console.log(response);

      for(var i=0;i<response.data.items.length;i++){
        (async (i)=>{
          const urls = await ytdl('http://www.youtube.com/watch?v='+ response.data.items[i].id.videoId, { quality: 'highestaudio' });
          const urlMp3 = urls[0].url;

          const dataVideo = await axios.get('https://www.googleapis.com/youtube/v3/videos?key=AIzaSyDNCtyvWgxYPluMxGsKgL2No7sFJtnA4KQ&part=snippet&id='+response.data.items[i].id.videoId);
          const title = dataVideo.data.items[0].snippet.title;

          // console.log(title)
          this.state.musicList.push({title: title, link: urlMp3})
          this.setState({
            onLoading: false,
            musicList: this.state.musicList
          })
        })(i) //for the pov of async function, i is already to the last i++ (i=response.data.items.length)
      }  
  }
    )
  }
  
  popup = () => {
    console.log("open mystery box pop-up")
    this.modal.current.setModalVisible(true)
  }
  render = () => {

    const musicList = this.state.musicList.map((el, i) => {
      console.log("render of : "+el["title"]);
      return (<MusicItem key={i} title={el["title"]} link={el["link"]}></MusicItem>)
    });
    return (
      <>
        <View style={styles.topContainer}>
          <Text style={styles.mainTitle}>Youtube light client</Text>
        </View>

        <View style={styles.middleContainer}>
          <ScrollView style={{
            width: "90%",
          }}>
            <View style={styles.items}>
              <View style={styles.searchBox}>
                <View style={{ flex: 4 }}>

                  <TextInput placeholder="search" style={styles.searchInput}
                    onSubmitEditing={this.searchWord}
                    onChangeText={(search) => this.setState({ search })} value={this.state.search}></TextInput>
                </View>
                <View style={{ flex: 1 }}>

                  <TouchableOpacity onPress={this.searchWord}>
                    <Image source={require('./images/icons/search_icon.png')} style={{ width: 50, height: 50 }} />
                  </TouchableOpacity>
                </View>
              </View>
              {musicList}
              {this.state.onLoading ? 
              <>
              <Image style={styles.loadingGif} source={require('./images/icons/loading.gif')}></Image>
              </>
              : <></>}

              <StatusBar hidden={true} />
            </View >
          </ScrollView >
        </View >
        <View style={styles.botContainer}>
          <InfoApp ref={this.modal} />
          <TouchableOpacity onPress={this.popup}>
            <Image style={styles.mysteryBox} source={require('./images/icons/info_app.png')}></Image>
          </TouchableOpacity>
        </View>
      </>
    );
  }

}

class InfoApp extends Component {
  state = {
    modalVisible: false
  };

  setModalVisible = (visible) => {
    this.setState({ modalVisible: visible });
  }
  render() {
    const { modalVisible } = this.state;
    return (
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          //Alert.alert("Modal has been closed.");
          this.setModalVisible(!modalVisible);
        }}
      >
        <View style={styles.modalScreen}>
          <View style={styles.modalView}>
            <Text style={{
                marginBottom: 10,
              }}>Hi ! I'm Clément, a french developer and I will work on Robotics but maybe, one day, I have to come back to computer domain... So I made this little app during summer break to learn some usefull tech like Node.js or React native because my computer science university didn't do it.</Text>
            <Button color="black" title="Hide popup" onPress={() => {
                console.log("close mystery box pop-up");
                this.setModalVisible(!modalVisible)

              }
            } />
          </View>
        </View>
      </Modal>
    );
  }
}
export default App;

