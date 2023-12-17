import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
   marginTop: 12,
    padding: 5,
    marginHorizontal: 15,    
    backgroundColor: themeColors.secondary,
    borderRadius: 5,
  },
  header:{
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },

  headrerTitle:{
    fontFamily: 'bold',
    fontSize: themeSize.large,
    color: themeColors.primary,
  },
})

export default styles