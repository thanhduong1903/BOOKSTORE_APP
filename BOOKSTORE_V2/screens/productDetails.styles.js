import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../constants/theme'

const styles = StyleSheet.create({
  flexDirec:{
    flexDirection: 'row',
  },
  container:{
    flex: 1,
    backgroundColor: themeColors.white,
  },
  upperRow:{
    marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    position: 'absolute',
    width: '91%',
    top: 40,
    zIndex: 999,
  },
  image:{
    aspectRatio: 1,
    resizeMode: "cover",
  },
  details:{
    marginTop: -30,
    backgroundColor: themeColors.lightWhite,
    width: '100%',
    borderTopLeftRadius: themeSize.medium,
    borderTopRightRadius: themeSize.medium,
  },
  titleRow:{
    marginHorizontal: 10,
    paddingBottom: themeSize.small1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '94%',
    top: 20,
  },
  title:{
    paddingHorizontal: 5,
    fontFamily:'bold',
    fontSize: themeSize.large,

  },
  priceWrapper:{
    backgroundColor: themeColors.primary,
    borderRadius: themeSize.large,
    alignItems: 'flex-end'
  },
  price:{
    paddingHorizontal: 5,
    fontFamily:'bold',
    color: themeColors.white,
    fontSize: themeSize.small2,
  },
  ratingRow:{
    paddingHorizontal: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '98%',
    top: 5,
  },
  rating:{
    top: themeSize.large,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginHorizontal: themeSize.large,
  },
  textRating:{
    color: themeColors.grey_1,
    fontFamily: 'medium',
  },

  desciptionWrapper:{
    marginTop: themeSize.large*2,
    marginHorizontal: themeSize.large,
  },
  desciption:{
    fontFamily: 'medium',
    fontSize: themeSize.large-2,
  },
  descText:{
    fontFamily: 'light',
    fontSize: themeSize.medium,
    textAlign: 'justify',
    marginBottom: 10,
  },
  location:{
    flexDirection: 'row',
    justifyContent: "space-between",
    alignItems: 'center',
    marginHorizontal: 5,
    backgroundColor: themeColors.secondary,
    padding: 10,
    borderRadius:themeSize.large,
  },
  cardRow:{
    // marginHorizontal: 10,
    paddingBottom: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '91%',
  },
  cartBtn:{
    width: '85%',
    backgroundColor: themeColors.primary,
    padding: 2,
    borderRadius: themeSize.large,
    marginLeft: 17,
    alignItems: "center",
  },
  cartTitle:{
    fontFamily: 'black',
    fontSize: themeSize.medium,
    color: themeColors.lightWhite,
    marginLeft: themeSize.small1,
  },
  addCart:{
    width: 37,
    height: 37,
    borderRadius: 100,
    backgroundColor: themeColors.blue,
    alignItems: 'center',
    justifyContent: "center",
    marginLeft: 20,
  },
})

export default styles