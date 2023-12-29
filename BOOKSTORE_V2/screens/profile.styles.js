import { StyleSheet } from "react-native";
import { themeColors, themeSize } from "../constants/theme";
export const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: themeColors.white,
  },
  row:{
    flexWrap: 'nowrap',
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
  inputStyleText:{
    fontSize:16,
    fontWeight: 'normal',
    width: '75%',
    paddingHorizontal: 10,
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
    flex: 2,
    width: '95%',
    marginHorizontal: 10,
    marginVertical: 10,
    marginLeft: 30,
    backgroundColor: themeColors.white,
  },
  text:{
    fontSize:16,
    width: "25%",
  },
  footer:{
    flex: 1,
    width: '95%',
    // backgroundColor: themeColors.black,
    marginHorizontal: 10,
    alignItems:'center',
    justifyContent:'center',
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
    marginHorizontal: 10,
    marginBottom: 100,
  },
  editText:{
    color: themeColors.primary,
    marginRight: 5,
  },

});