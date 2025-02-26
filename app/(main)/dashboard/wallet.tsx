import Colors from '@assets/CustomeColors/colors';
import Ionicons from '@expo/vector-icons/Ionicons';
import { FlashList } from '@shopify/flash-list';
import { TouchableOpacity } from '@src/components/libraries';
import Bank from 'assets/images/bank.svg';
import Card from 'assets/images/card.svg';
import profile from 'assets/images/Frame 83.png';
import Back from 'assets/images/left-back-blue.svg';
import Transfer from 'assets/images/transfer.svg';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Animated, {
  FadeIn,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import { hs, ms, vs } from '../../../utils/design/design';

type ListItem = {
  id: string;
  title: string;
  date: string;
  amount: string;
};

const Wallet = () => {
  const flip = useSharedValue(180);
  const frontside = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateX: `${flip.value}deg` }],
      opacity: flip.value < 90 ? 1 : 0,
    };
  });
  const backside = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateX: `${flip.value + 180}deg` }],
      opacity: flip.value >= 90 ? 1 : 0,
    };
  });
  const handelflip = () => {
    flip.value = withSpring(flip.value < 10 ? 180 : 0);
  };
  const router = useRouter();
  const [amountVisible, setamountVisible] = useState(true);

  const data = [
    {
      id: '1',
      title: 'Delivery fee',
      date: 'july7, 2022',
      amount: '-N3,000.00',
    },
    {
      id: '2',
      title: 'Delivery fee',
      date: 'july7, 2022',
      amount: '-N3,000.00',
    },
    { id: '3', title: 'Top up', date: 'july7, 2022', amount: '-N3,000.00' },
    {
      id: '4',
      title: 'Delivery fee',
      date: 'july7, 2022',
      amount: '-N3,000.00',
    },
    { id: '5', title: 'Bank', date: 'july7, 2022', amount: '-N3,000.00' },
    { id: '6', title: 'Top up', date: 'july7, 2022', amount: '-N3,000.00' },
    {
      id: '7',
      title: 'Delivery fee',
      date: 'july7, 2022',
      amount: '-N3,000.00',
    },
    { id: '8', title: 'Top up', date: 'july7, 2022', amount: '-N3,000.00' },
  ];
  const renderItem = ({ item }: { item: ListItem }) => (
    <View
      style={styles.card}
      className="flex-row justify-between dark:bg-customdarkCard"
    >
      <View className="flex-column">
        <Text className="font-bold dark:text-white" style={styles.title}>
          {item.title}
        </Text>
        <Text className="text-customGray">{item.date}</Text>
      </View>
      <Text className="text-red-500 self-center">{item.amount}</Text>
    </View>
  );
  return (
    <Animated.View
      className="flex-1 bg-white dark:bg-customBlack"
      entering={FadeIn.duration(1000)}
    >
      <View className="flex-row" style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Back style={styles.image} />
        </TouchableOpacity>

        <Text
          style={styles.headertext}
          className="text-customGray font-medium text-center self-center justify-center"
        >
          Wallet
        </Text>
      </View>
      <View style={styles.hrLine} />

      <View className="flex-row  " style={styles.profilebox}>
        <Image source={profile} style={styles.profile} />
        <View className="justify-center">
          <Text className="font-bold dark:text-white" style={styles.name}>
            Ken Nwaeze
          </Text>
          <View
            className="flex-row  "
            style={{ justifyContent: 'space-evenly' }}
          >
            <Text className="dark:text-white">Current balance: </Text>
            {amountVisible ? (
              <Text className="text-customBlue font-bold">******</Text>
            ) : (
              <Text className="text-customBlue font-bold">N10,712:00</Text>
            )}
          </View>
        </View>
        <TouchableOpacity
          style={styles.eye}
          onPress={() => setamountVisible(!amountVisible)}
        >
          <Ionicons
            // style={styles.eye}
            name={amountVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="black"
            className="dark:color-white "
          />
        </TouchableOpacity>
      </View>
      <Animated.View
        style={[styles.middelcard, [backside]]}
        className="items-center bg-customlightGray dark:bg-customdarkCard"
      >
        <View>
          <TouchableOpacity onPress={handelflip}>
            <Text
              className="font-bold dark:text-white"
              style={styles.midelheader}
            >
              Top Up
            </Text>
          </TouchableOpacity>
        </View>

        <View className="flex-row ">
          <View className="items-center">
            {/* <Image source={bank} style={styles.logos} /> */}
            <Bank />
            <Text className="dark:text-white">Bank</Text>
          </View>
          <View className="items-center" style={{ marginHorizontal: hs(50) }}>
            <Transfer />
            <Text className="dark:text-white">Transfer</Text>
          </View>
          <View className="items-center">
            <Card />
            <Text className="dark:text-white">Card</Text>
          </View>
        </View>
      </Animated.View>
      <Animated.View
        style={[styles.backmiddelcard, [frontside]]}
        className="items-center bg-customlightGray dark:bg-customdarkCard"
      >
        <TouchableOpacity onPress={handelflip}>
          <Text
            className="font-bold dark:text-white"
            style={styles.midelheader}
          >
            Top Up
          </Text>
        </TouchableOpacity>

        <View className="flex-row ">
          <View className="items-center">
            {/* <Image source={bank} style={styles.logos} /> */}
            <Bank />
            <Text className="dark:text-white">Bank</Text>
          </View>
          <View className="items-center" style={{ marginHorizontal: hs(50) }}>
            <Transfer />
            <Text className="dark:text-white">Transfer</Text>
          </View>
          <View className="items-center">
            <Card />
            <Text className="dark:text-white">Card</Text>
          </View>
        </View>
      </Animated.View>
      <Text
        style={styles.historyheading}
        className="font-medium dark:text-white"
      >
        Transection History
      </Text>
      <View className="flex-1" style={styles.listcontainer}>
        <FlashList
          data={data}
          renderItem={renderItem}
          estimatedItemSize={80} // Optimize performance
          keyExtractor={item => item.id}
          numColumns={1}
          showsVerticalScrollIndicator={false}
        />
      </View>
    </Animated.View>
  );
};
const styles = StyleSheet.create({
  image: {
    marginLeft: hs(20),
  },
  header: {
    marginTop: vs(50),
    marginBottom: vs(5),
  },
  headertext: {
    marginLeft: hs(129),
    fontSize: ms(15),
  },
  hrLine: {
    borderBottomWidth: 1,
    marginBottom: vs(40),
    borderBottomColor: Colors.customlightGray,
    marginVertical: 10, // Adds space around the line
    width: '100%',
  },
  profile: {
    width: hs(56),
    height: vs(56),
    marginRight: hs(10),
    borderRadius: ms(23),
  },
  profilebox: {
    marginHorizontal: hs(20),
    // backgroundColor: Colors.customBlue,
  },
  name: {
    fontSize: ms(18),
  },
  eye: {
    position: 'absolute',
    right: hs(0),
    top: vs(10),
  },
  logos: {
    height: vs(49),
    width: hs(47),
  },
  middelcard: {
    marginHorizontal: hs(20),
    borderRadius: ms(10),
    marginTop: vs(50),
    paddingBottom: vs(10),
  },
  backmiddelcard: {
    position: 'absolute',
    marginHorizontal: hs(20),
    borderRadius: ms(10),
    marginTop: vs(50),
    paddingBottom: vs(10),
  },
  midelheader: {
    marginTop: vs(8),
    marginBottom: vs(10),
    fontSize: ms(15),
  },
  historyheading: {
    fontSize: ms(20),
    marginTop: vs(30),
    marginLeft: hs(20),
    marginBottom: vs(10),
  },
  card: {
    borderBottomWidth: 1,
    paddingHorizontal: hs(8),
    paddingVertical: vs(5),
    marginBottom: vs(10),
    // backgroundColor: Colors.customBlue,
    borderBottomColor: Colors.customlightGray,
    shadowOpacity: 0.5,
    shadowColor: Colors.customeGray,
  },
  title: {
    fontSize: ms(15),
  },
  listcontainer: {
    marginHorizontal: hs(20),
  },
});
export default Wallet;
