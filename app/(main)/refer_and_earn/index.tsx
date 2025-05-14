/* eslint-disable import/order */
/* eslint-disable react-hooks/rules-of-hooks */
import {
  useGetallcatogoriesQuery,
  useGetallproductsQuery,
  useLazyGetsingleitemQuery,
} from '@/store/api/storeapi/storeapi';
import { setSelectedProduct } from '@/store/slices/selected_product/selestedproduct';
import { FlashList } from '@shopify/flash-list';
import { hs, ms, vs } from '@utils/design/design';
import { router } from 'expo-router';
import { useMemo, useState } from 'react';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import { useDispatch } from 'react-redux';

interface Rating {
  rate: number;
  count: number;
}

interface Product {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}
const index = () => {
  const dispatch = useDispatch();
  const [trigger] = useLazyGetsingleitemQuery();
  const handleitem = async (id: number) => {
    try {
      const res = await trigger(id).unwrap();
      if (res) {
        router.push('/produck_detail');
        dispatch(setSelectedProduct(res));
      }
    } catch (error) {
      console.log('Error');
    }
  };
  const { data: storeproducts } = useGetallproductsQuery();
  const { data: catogorys } = useGetallcatogoriesQuery();
  const [selectedcatagory, setselectedcatagory] = useState('');
  const filteredProducts = useMemo(() => {
    if (!storeproducts || !Array.isArray(storeproducts)) return []; // Ensure data is available
    if (!selectedcatagory) return storeproducts; // Show all products if no category is selected
    return storeproducts.filter(
      product => product.category === selectedcatagory,
    );
  }, [storeproducts, selectedcatagory]); // ✅ Added `storeproducts` as a dependency

  const renderitem = ({ item }: { item: Product }) => (
    <View
      style={styles.itemstyle}
      className="self-center items-center text-center bg-customOffwhite"
    >
      <TouchableOpacity onPress={() => handleitem(item.id)}>
        <Text className="font-bold">{item.title}</Text>
        <Image
          style={styles.image}
          source={{
            uri: item.image,
          }}
        />

        <Text className="bg-customBlack text-customGray">
          only in {item.price}$
        </Text>
        <View>
          <Text className="font-bold">Description</Text>
          <Text>{item.description}</Text>
        </View>
      </TouchableOpacity>
    </View>
  );

  return (
    <View className="flex-1 items-center bg-white ">
      <Text style={[styles.header, styles.headertext]}>Shopping store </Text>
      <Text className="font-bold text-customGray">Produts</Text>
      <Dropdown
        data={
          catogorys?.map((category: unknown) => ({
            label: category,
            value: category,
          })) || []
        }
        labelField="label"
        valueField="value"
        placeholder="Select Category"
        value={selectedcatagory}
        onChange={item => {
          setselectedcatagory(item.value);
        }}
        style={styles.dropdown}
      />
      <View className=" flex-1" style={{ width: hs(400) }}>
        <FlashList
          data={filteredProducts}
          renderItem={renderitem}
          estimatedItemSize={80}
        />
      </View>
    </View>
  );
};

export default index;

const styles = StyleSheet.create({
  header: {
    marginTop: vs(50),
    marginBottom: vs(5),
  },
  headertext: {
    fontSize: ms(20),
  },
  image: {
    width: hs(350), // Set width of the image
    height: vs(200), // Set height of the image
    borderRadius: 10,
    marginVertical: vs(10),
  },
  itemstyle: {
    width: hs(350),
    marginTop: vs(10),
    marginBottom: vs(10),
    paddingHorizontal: hs(10),
    paddingBottom: vs(20),
    borderRadius: ms(20),
  },
  dropdown: {
    width: hs(300),
    height: vs(50),
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
});
