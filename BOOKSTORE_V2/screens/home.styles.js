import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../constants/theme'
const styles = StyleSheet.create({
  container:{
    backgroundColor: themeColors.lightWhite,
  },
  textStyle:{
    fontFamily: 'exLight',
    fontSize: 40,
  },
  appBarWrapper:{
    marginHorizontal: 20,
    marginTop: themeSize.small1,
  },
  appBar:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  locationText:{
    fontSize: 20,
    fontFamily:'medium',
    color: themeColors.primary,
  },

  flexEnd:{
    alignItems: 'flex-end',
  },
  cartCount:{
    position:'absolute',
    bottom: 16,
    right: -4,
    right: -4,
    width: 18,
    height: 18,
    borderRadius: 12,
    alignItems: 'center',
    textAlign: "center",
    backgroundColor: themeColors.primary,
    justifyContent: "center",
    zIndex:999,    
  },
  cartNum:{
    fontFamily: 'bold',
    fontSize: 10,
    color: themeColors.textColor,
  }
  
})

export default styles