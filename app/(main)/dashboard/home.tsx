import Colors from '@assets/CustomeColors/colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from '@src/components/libraries';
import notification from 'assets/icons/notification.png';
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import {
  Image,
  Pressable,
  ScrollView,
  StyleSheet,
  TextInput,
  View,
} from 'react-native';
import Scroolview from 'src/components/libraries/ScrollView';
import fram1 from '../../../assets/frames/Frame 50.png';
import fram2 from '../../../assets/frames/Frame 51.png';
import arrow from '../../../assets/images/arrow-golden.png';
import Text from '../../../src/components/libraries/Text/index';
import { hs, ms, vs } from '../../../utils/design/design';

const Home = () => {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const itemWidth = hs(400);
  const scrollNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: itemWidth, animated: true });
    }
  };
  const [serch, setserch] = useState('');
  const [cardpress1, setcardPressed1] = useState(false);
  const [cardpress2, setcardPressed2] = useState(false);
  const [cardpress3, setcardPressed3] = useState(false);
  const [cardpress4, setcardPressed4] = useState(false);
  const [cardpress5, setcardPressed5] = useState(false);
  const [cardpress6, setcardPressed6] = useState(false);
  return (
    <View className="flex-1 bg-white dark:bg-customBlack ">
      <TextInput
        className="self-center dark:bg-customdarkCard bg-customlightGray "
        style={styles.serchbar}
        placeholder="Serch services"
        placeholderTextColor={Colors.customeGray}
        value={serch}
        onChangeText={value => setserch(value)}
      />
      <View
        className="flex-row bg-customBlue dark:bg-customdarkCard text-white justify-between self-center "
        style={styles.nameCard}
      >
        <View>
          <Text style={styles.name} className="text-white font-bold">
            Hello Ken
          </Text>
          <Text className="text-white ">
            We trust you are having a great time
          </Text>
        </View>
        <Image source={notification} style={styles.notification} />
      </View>
      <View style={styles.specialbox}>
        <View className="flex-row justify-between" style={styles.specialtext}>
          <Text style={styles.goldencolor} className="font-bold">
            Special for you
          </Text>
          <TouchableOpacity onPress={scrollNext}>
            <Image source={arrow} style={styles.arrow} />
          </TouchableOpacity>
        </View>
        <Scroolview
          horizontal
          showsHorizontalScrollIndicator={false}
          ref={scrollViewRef}
        >
          <View style={styles.specialitem}>
            <Image source={fram1} />
          </View>
          <View style={styles.specialitem}>
            <Image source={fram2} />
          </View>
          <View style={styles.specialitem}>
            <Image source={fram1} />
          </View>
          <View style={styles.specialitem}>
            <Image source={fram2} />
          </View>
        </Scroolview>
      </View>
      <View className="text-left items-left" style={styles.bottomscroolbox}>
        <Text
          className="text-customBlue font-bold "
          style={{ marginBottom: vs(10) }}
        >
          What would you like to do
        </Text>
        <Scroolview showsVerticalScrollIndicator={false}>
          <View className="flex-row justify-between">
            <Pressable
              className="bg-customOffwhite dark:bg-customdarkCard"
              onPressIn={() => setcardPressed1(true)}
              onPressOut={() => setcardPressed1(false)}
              style={[
                styles.scroolcard,
                cardpress1 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
              ]}
            >
              <Ionicons
                name="call"
                size={30}
                color={cardpress1 ? 'white' : Colors.customBlue}
              />
              <Text
                style={[
                  styles.cardheading,
                  cardpress1 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="text-customBlue font-bold"
              >
                Customer Care
              </Text>
              <Text
                style={[
                  styles.smalltext,
                  cardpress1 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="dark:text-white"
              >
                our customer care service line is available from 8-9pm week days
                and 9-5 weekends - tap to call us today
              </Text>
            </Pressable>
            <Pressable
              onPressIn={() => setcardPressed2(true)}
              onPressOut={() => setcardPressed2(false)}
              onPress={() => router.push('/(main)/SendPackage/')}
              style={[
                styles.scroolcard,
                cardpress2 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
              ]}
              className="bg-customOffwhite dark:bg-customdarkCard"
            >
              <Ionicons
                name="cube-outline"
                size={30}
                color={cardpress2 ? 'white' : Colors.customBlue}
              />
              <Text
                style={[
                  styles.cardheading,
                  cardpress2 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="text-customBlue font-bold"
              >
                Send a package
              </Text>
              <Text
                style={[
                  styles.smalltext,
                  cardpress2 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="dark:text-white"
              >
                Requiest for a driver to pick up or deliver your package for you
              </Text>
            </Pressable>
          </View>
          <View className="flex-row justify-between">
            <Pressable
              onPressIn={() => setcardPressed3(true)}
              onPressOut={() => setcardPressed3(false)}
              onPress={() => router.push('/(main)/dashboard/wallet')}
              style={[
                styles.scroolcard,
                cardpress3 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
              ]}
              className="bg-customOffwhite dark:bg-customdarkCard"
            >
              <Ionicons
                name="wallet"
                size={30}
                color={cardpress3 ? 'white' : Colors.customBlue}
              />
              <Text
                style={[
                  styles.cardheading,
                  cardpress3 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="text-customBlue font-bold"
              >
                Fund your Wallet
              </Text>
              <Text
                style={[
                  styles.smalltext,
                  cardpress3 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="dark:text-white"
              >
                To fund your wallet is as easy as aBC, make shure use of our
                fast technalogy and top-up your wallet today
              </Text>
            </Pressable>
            <Pressable
              onPressIn={() => setcardPressed4(true)}
              onPressOut={() => setcardPressed4(false)}
              onPress={() => router.push('/(main)/BookRIde/')}
              style={[
                styles.scroolcard,
                cardpress4 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
              ]}
              className="bg-customOffwhite dark:bg-customdarkCard"
            >
              <Ionicons
                name="car-outline"
                size={30}
                color={cardpress4 ? 'white' : Colors.customBlue}
              />
              <Text
                style={[
                  styles.cardheading,
                  cardpress4 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="text-customBlue font-bold"
              >
                Book a rider
              </Text>
              <Text
                style={[
                  styles.smalltext,
                  cardpress4 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="dark:text-white"
              >
                Search for available rider within your area
              </Text>
            </Pressable>
          </View>
          <View className="flex-row justify-between">
            <Pressable
              onPressIn={() => setcardPressed5(true)}
              onPressOut={() => setcardPressed5(false)}
              style={[
                styles.scroolcard,
                cardpress5 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
              ]}
              className="bg-customOffwhite dark:bg-customdarkCard"
            >
              <Ionicons
                name="cube-outline"
                size={30}
                color={cardpress5 ? 'white' : Colors.customBlue}
              />
              <Text
                style={[
                  styles.cardheading,
                  cardpress5 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="text-customBlue font-bold"
              >
                Enroll as a rider
              </Text>
              <Text
                style={[
                  styles.smalltext,
                  cardpress5 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="dark:text-white"
              >
                Se
              </Text>
            </Pressable>
            <Pressable
              onPressIn={() => setcardPressed6(true)}
              onPressOut={() => setcardPressed6(false)}
              style={[
                styles.scroolcard,
                cardpress6 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
              ]}
              className="bg-customOffwhite dark:bg-customdarkCard"
            >
              <Ionicons
                name="cube-outline"
                size={30}
                color={cardpress6 ? 'white' : Colors.customBlue}
              />
              <Text
                className="text-customBlue font-bold"
                style={[
                  styles.cardheading,
                  cardpress6 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
              >
                Refe and earn
              </Text>
              <Text
                style={[
                  styles.smalltext,
                  cardpress6 ? styles.cardPressed : styles.cardDefault, // Toggle the styles
                ]}
                className="dark:text-white"
              >
                our customer care service line is available from 8-9pm week days
                and 9-5 weekends - tap to call us today
              </Text>
            </Pressable>
          </View>
        </Scroolview>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  serchbar: {
    fontSize: ms(15),
    marginTop: vs(50),
    width: vs(360),
    padding: ms(10),
    borderRadius: ms(5),
  },
  nameCard: {
    width: vs(360),
    marginTop: vs(25),
    borderRadius: ms(8),
    padding: ms(20),
    paddingBottom: vs(30),
  },
  notification: {
    height: vs(25),
    width: hs(25),
    marginTop: vs(20),
  },
  name: {
    fontSize: ms(20),
    marginTop: vs(10),
  },
  specialitem: {
    marginRight: hs(10),
  },
  specialbox: {
    marginHorizontal: hs(20),
    marginTop: vs(40),
    height: vs(120),
  },
  arrow: {
    height: vs(20),
    width: hs(20),
  },
  specialtext: {
    marginBottom: vs(10),
  },
  goldencolor: {
    color: Colors.customeFilled,
  },
  bottomscroolbox: {
    marginHorizontal: hs(20),
    height: vs(400),
  },
  scroolcard: {
    height: vs(170),
    paddingTop: vs(15),
    width: hs(160),
    padding: ms(10),
    borderRadius: ms(8),
    marginBottom: vs(15),
  },
  carimage: {
    height: vs(37),
    width: hs(40),
  },
  cardheading: {
    fontSize: ms(17),
    marginTop: vs(10),
    marginBottom: vs(5),
  },
  smalltext: {
    fontSize: ms(9),
  },
  cardPressed: {
    backgroundColor: Colors.customBlue,
    color: 'white',
  },
  cardDefault: {},
});
export default Home;
