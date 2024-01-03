import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
    flex: 1,
    width: '100%',
    height: '100%',
    marginEnd: 5,
    borderRadius: 15,
    backgroundColor: themeColors.white,  
  },  
  textNotificate:{
    flex: 1,
    height: '100%',
    backgroundColor: themeColors.secondary,
    margin: 13,
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text:{
    color: themeColors.primary,
    fontSize: 40,
    textAlign: 'center',
    fontFamily: 'bold',
  },
  iconWarn:{
    color: themeColors.primary,
    fontSize: 60,
    margin: 10,
  }
  
});

export default styles