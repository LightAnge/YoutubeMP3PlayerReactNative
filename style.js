import { StyleSheet } from "react-native"

export default StyleSheet.create({
  
  topContainer: {
    flex: 2,
    marginTop: 0,
    padding: 5,
    backgroundColor: '#FFAE03',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  middleContainer: {
    flex: 10,
    width: "100%",
    backgroundColor: '#007CBE',
    alignItems: 'center',
    //justifyContent: 'center',
  },
  
  botContainer: {
    flex: 1,
    backgroundColor: '#FFAE03',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: "row"
  },
  mainTitle:{
    color: "black",
    fontSize: 30,
    fontFamily: "sans-serif-condensed",
  },
  musicTitle:{
    fontSize: 15,
    width: "80%",
    padding: 5,
  },
  items: {
    width: "100%",
    alignItems: 'center',
  },
  searchInput:{
    backgroundColor: '#fff',
    height: 40,
    width: "100%",
    margin: 10,
  },
  
  musicContain: {
    //flex: 1,
    flexDirection: "row",
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 5,
    width: "100%",

    backgroundColor: '#CD4631',
    borderRadius: 20,

  },
  musicContainPlay: {
    //flex: 1,
    flexDirection: "row",
    height: 100,
    alignItems: 'center',
    justifyContent: 'flex-start',
    padding: 10,
    margin: 5,
    width: "100%",

    backgroundColor: '#F40000',
    borderRadius: 5,

  },
  
  searchBox: {
    flexDirection: 'row',
    width: window.width,
    margin: 10,
    padding: 4,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: '#000',
    borderRadius: 10,
    backgroundColor: '#fff'
  },
  modalScreen:{
    flex: 1,
    justifyContent: "center",
  },
  modalView: {
    // flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: 22

    margin: 20,
    backgroundColor: "#FFAE03",
    borderRadius: 20,
    padding: 20,

  },
  loadingGif: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    height: 40,
    width: 40,
    margin: 10,
    resizeMode: "stretch"

  },
  playAndPauseButton: {
    flex: 1,
    // justifyContent: "center",
    // alignItems: "center",
    height: 40,
    width: 50,
    margin: 10,
    resizeMode: "stretch"

  },
  mysteryBox: {
    //flex: 1,
    height: 40,
    width: 40,
    margin: 50,
    resizeMode: "stretch"

  },
})