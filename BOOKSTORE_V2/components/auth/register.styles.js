import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView:{
    marginTop: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topViewLogo:{
    width: 70,
    height: 70,
  },
  topViewtext:{
    marginTop: 20,
    fontFamily: 'black',
    textAlign: 'center',
    fontSize: themeSize.xxLarge,
    color: themeColors.primary,
  },
  text:{
    fontFamily: 'regular',
    textAlign: 'center',
    fontSize: themeSize.medium,
  },
  midView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,    
    marginHorizontal: 10,    
  },
  inputStyle:{
    flexDirection:'row',
    borderWidth: 1,
    borderRadius: themeSize.small1,
    width: '90%',
    height: 50,
    alignItems: "center",
    borderColor: themeColors.primary,
    marginTop: 15,
  },
  inputStyleIcon:{
    margin: 8,
    color: themeColors.primary,
  },
  inputStyleText:{
    fontFamily: 'regular',
    fontWeight: 'bold',
    color: themeColors.primary,
    fontSize: themeSize.medium,
    width: '85%',
    paddingHorizontal: 10,
  },
  bottomView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 5,    
    marginHorizontal: 10,
  },
  signInStyle:{  
    flexDirection:'row',
    backgroundColor: themeColors.primary,
    height: 50,
    alignItems: "center",   
    justifyContent: 'center',   
    borderRadius: 10,
  },
  signInStyleText:{
    width: '85%',
    fontFamily:'medium',
    textAlign: 'center',
    color: themeColors.textColor,
    fontSize: themeSize.large,
  },
  bottomViewText:{  
    marginBottom: 15,
    flexDirection:'row',
    alignItems: "center",   
    justifyContent: 'center',
  },
  terms:{
    width:'100%',
    flexDirection: 'row',
    alignItems: "center",
    justifyContent: 'flex-start',
    height: 50,
    // backgroundColor: themeColors.black,
  },
  termsText:{   
    height: 50,
    top: 5,
  },
  swicthText:{
    height: 50,
    marginRight: 10,
  },
  bottomViewText:{
    color: themeColors.primary,
  }
});

export default styles