import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

export const styles = StyleSheet.create({
  container:{
    marginTop: 12,
    padding: 5,
    marginHorizontal: 15,    
    backgroundColor: themeColors.secondary,
    borderRadius: 5,
  },
  header:{
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
   
    // marginVertical: 10,
  },

  headrerTitle:{
    fontFamily: 'bold',
    fontSize: themeSize.large,
    color: themeColors.primary,
  },
});