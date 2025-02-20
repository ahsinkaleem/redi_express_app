import { Text } from '@src/components/libraries';
import Mappic from 'assets/images/magpic.svg';
import World from 'assets/images/worldlogo.svg';
import { StyleSheet, View } from 'react-native';
import { hs, vs } from '../../../utils/design/design';

const track = () => {
  return (
    <View className="flex-1 bg-white dark:bg-customBlack">
      <Mappic />
      <View style={styles.textcontainer}>
        <Text style={styles.heading} className="font-bold">
          Tracking Number
        </Text>
        <View
          className="flex-row items-center text-center"
          style={styles.packingid}
        >
          <World />
          <Text className="text-customBlue">R-7458-4567-4434-5854</Text>
        </View>
        <Text className="text-customGray">Package Status</Text>
      </View>
    </View>
  );
};

export default track;
const styles = StyleSheet.create({
  heading: {},
  textcontainer: {
    marginHorizontal: hs(20),
    marginTop: vs(30),
  },
  packingid: {
    marginTop: vs(20),
    marginBottom: vs(20),
  },
});
