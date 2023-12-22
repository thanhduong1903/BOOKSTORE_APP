import { StyleSheet } from "react-native";
import { themeColors, themeSize } from "../constants/theme";
export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: themeColors.white,
  },
  row:{
    flexDirection: 'row',
    marginVertical: 10,
  },
  header:{
    flex: 1,
    marginTop: 40,
    justifyContent: 'center',
    marginHorizontal: 10,
    backgroundColor: themeColors.secondary,
    borderRadius: 10,
  },
  imgContainer:{
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },

  avatar:{
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  name:{
    fontFamily: 'bold',
    fontSize: 20,
    color: themeColors.primary,
  },
  body:{
    flex: 1,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 10,
    marginLeft: 30,
  },
  text:{
    width: 120,
  },
  footer:{
    flex: 1,
    width: '95%',
    backgroundColor: themeColors.white,
    marginHorizontal: 10,
    alignItems:'center',
    justifyContent:'space-around',
    flexDirection:'row'
  },
  edit:{
    flexDirection: 'row',
    width: 100,
    borderWidth: 2,
    borderRadius: 10,
    padding: 10,
    borderColor: themeColors.primary,
    justifyContent: 'center',
    alignItems: "center",
  },
  editText:{
    color: themeColors.primary,
    marginRight: 5,
  },

});