// eslint-disable-next-line import/order
import { useDummyDataQuery } from '@/store/api/dummy';
import { FlashList } from '@shopify/flash-list';
import { Text, View } from 'react-native';

interface datatype {
  id: string;
  name: string;
  data?: Record<string, unknown>;
}
const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data } = useDummyDataQuery();
  const renderitem = ({ item }: { item: datatype }) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View className="flex-1">
      <Text>index</Text>
      <FlashList data={data} renderItem={renderitem} />
    </View>
  );
};

export default index;
