import { Dimensions } from "react-native";
const {width, height} = Dimensions.get('window');

export const themeColors = {
  primary:'#600382',
  secondary: '#e9dcf5',
  tertiary: '#0e6f4a',
  textColor: "#fff",
  grey_1:"#43484d",
  grey_2:"#5e6977",
  grey_3:"#86939e",
  grey_4:"#bdc6df",
  grey_5:"#e1e8ee",
  cardComment:"#86939e",
  cardBackground:"#86939e",
  statusbar: "#0e6f4a",
  headerText: "#fff",
  bgColor: "#181f3d",
  black: '#000',
  white: '#fff',
  lightWhite: '#FAF9F8',
  dark: '#050301',
  blue: '#23138f',
  blackO: '#20212457',
};
export const themeShadow = {
  small:{
    shadowColor: '#000',
    shadowOffest:{
      width: 0,
      height: 2,
    },
    shadowOpacity: .25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium:{
    shadowColor: '#000',
    shadowOffest:{
      width: 0,
      height: 2,
    },
    shadowOpacity: .25,
    shadowRadius: 5.84,
    elevation: 5,
  }
}
export const themeSize = {
  xSmall: 10,
  small1: 12,
  small2: 14,
  medium: 16,
  large: 20,
  xLarge:24,
  xxLarge:44,
  sSquare: 100,
};