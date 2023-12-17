import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  container:{
    width: '100%',
    height: '100%',
    marginEnd: 5,
    borderRadius: 15,
    backgroundColor: themeColors.white,  
    justifyContent: 'space-between',
  },
  imageContainer:{
    flex: 1,
    width: 170,
    marginLeft: 5,
    marginRight: 5,
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

export default styles