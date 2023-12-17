
import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
    // flex: 1,
    flexDirection: 'column',
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
  midView:{
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,    
    marginHorizontal: 10,    
  },
  midViewImage:{
    maxWidth: 350,
    maxHeight: 277,    
    
  },
  wellcomeText:{
    fontFamily: 'black',
    fontSize: themeSize.xxLarge,
    color: themeColors.primary,    
  },
  text:{
    fontFamily: 'regular',
    textAlign: 'center',
    fontSize: themeSize.medium
  },
  carouselContainer:{
    marginVertical: 20,
  },
  slideStyle:{
    borderRadius: 20, 
    width: '90%',     
  },
  bottomView:{
    marginVertical: 80,
  },
  touchText1:{
    backgroundColor: themeColors.primary,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 30,
  },
  touchTextStyle1:{
    fontFamily: 'bold',
    fontSize: 20,
    color: themeColors.textColor,
  },

  touchText2:{
    backgroundColor: themeColors.white,
    height: 50,
    alignItems: 'center',
    justifyContent: 'center',
    marginHorizontal: 20,
    marginVertical: 8,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: themeColors.primary,
  },
  touchTextStyle2:{
    fontFamily: 'bold',
    fontSize: 20,
    color: themeColors.primary,
  }
});

export default styles
