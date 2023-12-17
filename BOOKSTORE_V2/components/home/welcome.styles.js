import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
    width: '100%',
    alignItems: 'center',
    justifyContent: "center",
  },
  welcomeText:{
    fontFamily: 'black',
    fontSize: 35,
    marginTop: themeSize.xSmall,
    marginHorizontal: 12,
  },
  searchContainer:{
    flexDirection:'row',
    justifyContent: 'center',
    alignContent: 'center',
    alignItems: 'center',
    backgroundColor: themeColors.secondary,
    borderRadius: 17,
    borderWidth: 1,
    borderColor: themeColors.primary,
    marginVertical: themeSize.medium,
    height: 50,
    marginHorizontal: 20,
  },
  searchIcon:{
    marginHorizontal: 10,
    color: themeColors.primary,
  },
  searchWrapper:{
    flex:1,
    backgroundColor: themeColors.secondary,
    marginRight: themeSize.small1,
    borderRadius: themeSize.small1,
  },
  searchInput:{
    fontFamily: 'regular',
    width: '100%',
    height: '100%',
    paddingHorizontal: 10,
    fontSize: 14,
  },
  searchBtn:{
    width: 50,
    height: '100%',
    borderRadius: 16,
    justifyContent: 'center',
    alignItems:'center',
    backgroundColor: themeColors.primary,
  },
  
})

export default styles