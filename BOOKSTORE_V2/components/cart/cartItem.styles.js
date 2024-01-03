import { StyleSheet } from "react-native";
import {themeColors, themeSize} from '../../constants/theme'

const styles = StyleSheet.create({
  row:{
    flexDirection: 'row',
    alignItems: 'center',
  },
  container:{
    width: '100%',
    flexDirection:'row',
    alignItems: "center",
    height: 130,
    marginVertical: 10,
    borderRadius: 15,
    backgroundColor: themeColors.lightWhite,   
    shadowColor: '#171717',
    shadowOffset: {width: 2, height: 4},
    shadowOpacity: 0.2,
    shadowRadius: 3, 
  },
  imageContainer:{
    flex: 1,
    width: 0,    
    overflow:'hidden',
    marginLeft: 5,

  },
  image:{
    height:"100%",
    aspectRatio: 1,
    resizeMode: 'stretch',    
    borderRadius: 10,
  },
  details:{
    padding: 12,
  },
  title:{
    fontFamily: 'medium',
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
    color: themeColors.primary
  },
  addBtn:{
    position: 'absolute',
    bottom: 11,
    right: 7,
  },
  flexEnd:{
    alignItems: 'flex-end',
  },
  totalContainer:{
    flexDirection: 'row',
  }
  
});

export default styles