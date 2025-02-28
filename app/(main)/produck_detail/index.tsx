// eslint-disable-next-line import/order
import { RootState } from '@/store';
import { hs, ms, vs } from '@utils/design/design';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { useSelector } from 'react-redux';

const Index = () => {
  const product = useSelector(
    (state: RootState) => state.product.selectedProduct,
  );

  return (
    <View className="flex-1 bg-white" style={styles.main}>
      <ScrollView>
        <Image
          style={styles.image}
          source={{
            uri: product?.image,
          }}
        />
        <View style={styles.textcontainer}>
          <Text className="font-bold" style={styles.title}>
            {product?.title}
          </Text>
          <View className="flex-row ">
            <Text className="font-bold text-customGray flex-1">
              Product Catogory
            </Text>
            <Text className="font-bold flex-1">{product?.category}</Text>
          </View>
          <View className="flex-row " style={styles.price}>
            <Text className="font-bold text-customGray flex-1">Price</Text>
            <Text className="flex-1 font-bold">{product?.price}$</Text>
          </View>

          <Text className="font-bold ">Description</Text>
          <Text className="text-customGray">{product?.description}</Text>
          <View style={styles.line} className="bg-customGray" />
          <View className="flex-row" style={styles.ratingcontainer}>
            <Text className="font-bold flex-1">Rating</Text>
            <Text className="flex-1 bg-customGray" style={styles.ratting}>
              {product?.rating.rate}*
            </Text>
          </View>
          <View className="flex-row" style={styles.ratingcontainer}>
            <Text className="font-bold flex-1">Number of Reviews</Text>
            <Text className="flex-1 bg-customGray" style={styles.ratting}>
              {product?.rating.count}
            </Text>
          </View>

          <Text />
        </View>
        <TouchableOpacity
          style={styles.button}
          className="bg-customBlue items-center text-center justify-center items-center"
        >
          <Text className="text-center text-white font-bold ">Buy Now</Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default Index;
const styles = StyleSheet.create({
  image: {
    width: '100%', // Set width of the image
    height: vs(300), // Set height of the image
    borderRadius: 10,
    resizeMode: 'contain',
  },
  main: {
    paddingTop: vs(40),
  },
  textcontainer: {
    marginTop: vs(20),
    marginHorizontal: hs(20),
  },
  title: {
    fontSize: ms(18),
  },
  price: {
    marginVertical: vs(10),
  },
  line: {
    marginVertical: vs(10),
    height: vs(1),
  },
  ratting: {
    height: vs(20),
    width: hs(20),
    borderRadius: ms(10),
    textAlign: 'center',
  },
  ratingcontainer: {
    marginTop: vs(40),
  },
  button: {
    width: hs(300),
    height: vs(30),
    borderRadius: ms(20),
    alignSelf: 'center',
    marginBottom: vs(40),
  },
});
