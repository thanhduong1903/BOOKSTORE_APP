import { StyleSheet } from 'react-native'
import { themeColors, themeSize } from '../constants/theme'

export const styles = StyleSheet.create({
  container:{
    backgroundColor: themeColors.white,
  },
  row:{
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginVertical: 4,
  },
  rowPayment:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
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
  containerBody:{
    height: '100%',
    margin: 12,
  },

  col:{
    flexDirection: 'column',
    alignItems: 'flex-start',
    
  },
  payment:{
    flexDirection:'column',
    margin: 12,
    backgroundColor: themeColors.secondary,
    padding: 10,
    borderRadius: 10,
    marginBottom: 30,
  },
  address:{    
    backgroundColor: themeColors.secondary,
    padding: 5,
    borderRadius: 10,
    fontFamily: 'regular',
  },
  orderNow:{
    borderWidth: 1,
    borderRadius: 5,
    borderColor: themeColors.primary,
    padding: 10,
  },

  orderItem:{
    margin: 12,
  },
  payMethod:{
    width: '100%',
    flexDirection: 'row',
    marginVertical: 5,
    borderBottomWidth: 1,
    padding: 5,
    alignItems:'center',
    // marginHorizontal: 10,
  },
  outer:{
    width: 20,
    height: 20,
    borderWidth: 1,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 5,    
  },
  inner:{
    width: 12,
    height: 12,
    backgroundColor: themeColors.primary,
    borderRadius: 10,
  },
  methodStyle:{
    flexDirection: 'row',
    
  },
  methodText:{
    marginRight: 10, 
  }
})