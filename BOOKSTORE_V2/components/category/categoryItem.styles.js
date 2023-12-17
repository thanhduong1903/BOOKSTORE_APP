import { StyleSheet } from "react-native";
import { themeColors, themeSize } from "../../constants/theme";
export const styles = StyleSheet.create({
  smallCard:{
    borderRadius: 8,
    backgroundColor: themeColors.white,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
    height: 90,
    margin:10,
    color: themeColors.primary,
  },
  smallCardSelected:{
    borderRadius: 10,
    backgroundColor: themeColors.primary,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: 100,
    height: 90,
    margin:10,
  },

  text:{
    color: themeColors.white, fontFamily:'bold', fontSize: 11,
  },
  textSelected:{
    color: themeColors.primary, fontFamily:'bold', fontSize: 11,
  },

  container:{
    marginTop: 12,
    padding: 5,
    marginHorizontal: 15,    
    backgroundColor: themeColors.secondary,
    borderRadius: 10,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    // marginVertical: 10,
  },

  headrerTitle:{
    fontFamily: 'bold',
    fontSize: themeSize.large,
    color: themeColors.primary,
  },
});

export const filterData = [
  {name:"Novel", image: require('../../assets/images/icon1.png'), id:'0'},
  {name:"Mentality", image: require('../../assets/images/icon2.png'), id:'1'},
  {name:"Skills", image: require('../../assets/images/icon3.png'), id:'2'},
  {name:"Textbooks", image: require('../../assets/images/icon4.png'), id:'3'},
  {name:"English", image: require('../../assets/images/icon5.png'), id:'4'},
  {name:"Detective", image: require('../../assets/images/icon6.png'), id:'5'},
  {name:"Horro", image: require('../../assets/images/icon7.png'), id:'6'},
  {name:"Science", image: require('../../assets/images/icon8.png'), id:'7'},
  {name:"Economy", image: require('../../assets/images/icon9.png'), id:'8'},
];