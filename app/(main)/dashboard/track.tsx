// eslint-disable-next-line import/order
import { useDummyDataQuery } from '@/store/api/dummy';
import { FlashList } from '@shopify/flash-list';
import { Text } from '@src/components/libraries';
import Mappic from 'assets/images/magpic.svg';
import World from 'assets/images/worldlogo.svg';
import { StyleSheet, View } from 'react-native';
import { hs, vs } from '../../../utils/design/design';

interface typeofdata {
  id: string;
  name: string;
  data?: Record<string, unknown>; // Optional 'data' field
}
const track = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useDummyDataQuery();
  const renderItem = ({ item }: { item: typeofdata }) => (
    <View style={styles.textcontainer}>
      <Text>Number of Mobile: {item.id}</Text>
      <Text> Mobile Name: {item.name}</Text>
    </View>
  );

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
      <FlashList data={data} renderItem={renderItem} />
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
