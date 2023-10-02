/* eslint-disable import/prefer-default-export */
import { Dimensions } from 'react-native';

const { width, height } = Dimensions.get('window');

export {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp,
} from 'react-native-responsive-screen';

export const getRespValue = (percentage: number) => {
  //   console.log(width, height);
  if (height > 800) return Math.round(height * (percentage / 1000));
  return Math.round((height + 60) * (percentage / 1000));
};
