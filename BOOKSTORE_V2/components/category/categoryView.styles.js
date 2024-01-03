import { StyleSheet } from "react-native";
import { themeColors, themeSize } from "../../constants/theme";

export const styles = StyleSheet.create({
  container:{
    width: 190,
    height: 300,
    // marginEnd: 5,
    margin: 8,
    borderRadius: 15,
    backgroundColor: themeColors.secondary,    
    justifyContent:'center',
  },
  imageContainer:{
    flex: 3,
    width: 180,
    height: 300,  
    margin: 5,
    justifyContent: 'center',    
    borderBottomWidth: 1,
    borderColor: themeColors.black,
    overflow:'hidden',
  },
  image:{
    aspectRatio: 1,
    resizeMode:'cover',   
    borderRadius: 10,
  },
  details:{
    flex: 1,
    padding: 12,
  },
  title:{
    fontFamily: 'bold',
    fontSize: themeSize.medium,
    marginBottom: 2,
  },
  supplier:{
    fontFamily: 'regular',
    fontSize: themeSize.xSmall,
    marginBottom: 2,
  },
  price:{
    fontFamily: 'bold',
    fontSize: themeSize.small2,
    marginBottom: 2,
  },
  addBtn:{
    position: 'absolute',
    bottom: 11,
    right: 7,
  }
});