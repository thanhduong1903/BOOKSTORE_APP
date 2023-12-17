import { StyleSheet } from 'react-native'
import { themeColors, themeSize } from '../constants/theme'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: themeColors.white,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  Text:{

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
    fontSize: 18,
    fontFamily:'bold',
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
  },
  textHiden:{
    color: 'transparent',
  },
  totalContainer:{
    height: 140,
    backgroundColor: themeColors.primary,
    // zIndex:'999',
  },
  totalText:{
    color: themeColors.white,
  },
  checkout:{
    padding: 8,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: themeColors.white,
  }
})