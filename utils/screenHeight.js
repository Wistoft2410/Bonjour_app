import { Dimensions, Platform } from 'react-native';

export function isIphone8() {
  const dim = Dimensions.get('window');
  
  if (Platform.OS === 'ios' && dim.height == 667 || dim.width == 667) {
      return true;
  } else {
      return false;
  }
}