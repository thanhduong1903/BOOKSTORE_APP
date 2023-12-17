import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../constants/theme';

export const styles = StyleSheet.create({
  container:{
    backgroundColor: themeColors.white,
  },
  _appBarWrapper:{
    marginHorizontal: 10,
    marginTop: themeSize.small1,
  },
  appBar:{
    flexDirection:'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  textHiden:{
    color: 'transparent',
  },
  locationText:{
    fontSize: 20,
    fontFamily:'medium',
    color: themeColors.primary,
  },
});