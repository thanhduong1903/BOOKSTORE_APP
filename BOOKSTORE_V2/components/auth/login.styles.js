import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
    // flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  topView:{
    marginVertical: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  topViewLogo:{
    width: 70,
    height: 70,
  },
  topViewtext:{
    marginTop: 40,
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
    marginVertical: 10,
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
    marginVertical: 10,    
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
  forgotStyle:{  
    flexDirection:'row',
    height: 50,
    alignItems: "center",   
    justifyContent: 'center',
  },
  forgotText:{
    width: '85%',
    fontFamily:'medium',
    textAlign: 'center',
    color: themeColors.primary,
    fontSize: themeSize.large - 2,
    textDecorationLine: 'underline',
  },
  square:{
    marginVertical: 40,
    width: 100,
    height: 100,
    backgroundColor: themeColors.primary,
  }
});

export default styles