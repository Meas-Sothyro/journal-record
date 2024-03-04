import {Dimensions} from 'react-native';
import colors from './Colors';
const {width, height} = Dimensions.get('window');


export const shadow = {
  light: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.1,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  dark: {
    shadowColor: colors.black,
    shadowRadius: 4,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
};

export const sizes = {
  width,
  height,
  title: 28,
  h2: 24,
  h3: 18,
  body: 14,
  radius: 16,
  thirdWidth: width * 0.3,
  thirdHeight: height * 0.3,
  fortyfiveWidth:width * 0.045
};

export const spacing = {
  s: 1,
  m: 18,
  l: 26,
  xl: 40,
};