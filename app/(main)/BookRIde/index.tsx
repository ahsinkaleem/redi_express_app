/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
// eslint-disable-next-line import/order
import { useDummyDataQuery } from '@/store/api/dummy';
import { useGetjokesQuery } from '@/store/api/jokes';
import { FlashList } from '@shopify/flash-list';
import { useFocusEffect } from 'expo-router';
import { useCallback } from 'react';
import { Text, View } from 'react-native';

interface datatype {
  id: string;
  name: string;
  data?: Record<string, unknown>;
}
const index = () => {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { data: jokes, refetch: refetchJokes } = useGetjokesQuery();

  const { data, refetch: refechdummy } = useDummyDataQuery();
  useFocusEffect(
    useCallback(() => {
      refetchJokes();
      refechdummy();
    }, [refechdummy, refetchJokes]),
  );
  const renderitem = ({ item }: { item: datatype }) => (
    <View>
      <Text>{item.id}</Text>
      <Text>{item.name}</Text>
    </View>
  );
  return (
    <View className="flex-1">
      <Text>index</Text>
      <Text>{jokes?.setup}</Text>
      <Text>{jokes?.punchline}</Text>
      <FlashList data={data} renderItem={renderitem} />

      <Text />
    </View>
  );
};

export default index;
