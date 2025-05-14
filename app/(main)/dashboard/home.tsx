// eslint-disable-next-line import/order
import { usePostdumyMutation } from '@/store/api/dummy';
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
import Animated, {
  Extrapolate,
  FadeIn,
  FadeOut,
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from 'react-native-reanimated';
import Scroolview from 'src/components/libraries/ScrollView';
import fram1 from '../../../assets/frames/Frame 50.png';
import fram2 from '../../../assets/frames/Frame 51.png';
import arrow from '../../../assets/images/arrow-golden.png';
import Text from '../../../src/components/libraries/Text/index';
import { hs, ms, vs } from '../../../utils/design/design';

// const BACKGROUND_FETCH_TASK = 'background-fetch';

// // 1. Define the task by providing a name and the function that should be executed
// // Note: This needs to be called in the global scope (e.g outside of your React components)
// TaskManager.defineTask(BACKGROUND_FETCH_TASK, async () => {
//   const now = Date.now();

//   console.log(
//     `Got background fetch call at date: ${new Date(now).toISOString()}`,
//   );

//   // Be sure to return the successful result type!
//   return BackgroundFetch.BackgroundFetchResult.NewData;
// });

// // 2. Register the task at some point in your app by providing the same name,
// // and some configuration options for how the background fetch should behave
// // Note: This does NOT need to be in the global scope and CAN be used in your React components!
// async function registerBackgroundFetchAsync() {
//   return BackgroundFetch.registerTaskAsync(BACKGROUND_FETCH_TASK, {
//     minimumInterval: 60 * 15, // 15 minutes
//     stopOnTerminate: false, // android only,
//     startOnBoot: true, // android only
//   });
// }

// // 3. (Optional) Unregister tasks by specifying the task name
// // This will cancel any future background fetch calls that match the given name
// // Note: This does NOT need to be in the global scope and CAN be used in your React components!
// async function unregisterBackgroundFetchAsync() {
//   return BackgroundFetch.unregisterTaskAsync(BACKGROUND_FETCH_TASK);
// }

const Home = () => {
  // const [isRegistered, setIsRegistered] = useState(false);
  // // const [status, setStatus] =
  // //   useState<BackgroundFetch.BackgroundFetchStatus | null>(null);

  // useEffect(() => {
  //   checkStatusAsync();
  // }, []);

  // const checkStatusAsync = async () => {
  //   const statuse = await BackgroundFetch.getStatusAsync();
  //   const isRegisterede = await TaskManager.isTaskRegisteredAsync(
  //     BACKGROUND_FETCH_TASK,
  //   );

  // setStatus(statuse);

  //   setIsRegistered(isRegisterede);
  // };

  // const toggleFetchTask = async () => {
  //   if (isRegistered) {
  //     await unregisterBackgroundFetchAsync();
  //   } else {
  //     await registerBackgroundFetchAsync();
  //   }

  //   checkStatusAsync();
  // };
  const [postDummyData] = usePostdumyMutation();
  const postmydata = async () => {
    try {
      const response = await postDummyData({
        name: 'Apple MacBook Pro 16',
        data: {
          year: 2019,
          price: 1849.99,
          'CPU model': 'Intel Core i9',
          'Hard disk size': '1 TB',
        },
      }).unwrap();

      console.log('Data posted successfully:', response);
    } catch (err) {
      console.error('Error posting data:', err);
    }
  };
  const scrooly = useSharedValue(0);
  const flip = useSharedValue(0);
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const frontanimate = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${flip.value}deg` }],
      opacity: flip.value < 90 ? 1 : 0,
    };
  });
  const backamimate = useAnimatedStyle(() => {
    return {
      transform: [{ perspective: 1000 }, { rotateY: `${flip.value + 180}deg` }],
      opacity: flip.value >= 90 ? 1 : 0,
    };
  });
  const handleflip = () => {
    flip.value = withSpring(flip.value < 10 ? 180 : 0);
    console.log(flip.value);
  };
  const itemWidth = hs(400);
  const scrollNext = () => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({ x: itemWidth, animated: true });
    }
  };
  const scrollHandler = useAnimatedScrollHandler(event => {
    scrooly.value = event.contentOffset.y;
  });

  const animatedHeaderStyle = useAnimatedStyle(() => {
    return {
      opacity: interpolate(
        scrooly.value,
        [0, 150],
        [1, 0.5],
        Extrapolate.CLAMP,
      ),
      transform: [
        {
          scale: interpolate(
            scrooly.value,
            [0, 150],
            [1, 0.9],
            Extrapolate.CLAMP,
          ),
        },
        {
          translateY: interpolate(
            scrooly.value,
            [0, 150],
            [0, -50],
            Extrapolate.CLAMP,
          ),
        },
      ],
    };
  });
  const [serch, setserch] = useState('');
  const [cardpress1, setcardPressed1] = useState(false);
  const [cardpress2, setcardPressed2] = useState(false);
  const [cardpress3, setcardPressed3] = useState(false);
  const [cardpress4, setcardPressed4] = useState(false);
  const [cardpress5, setcardPressed5] = useState(false);
  const [cardpress6, setcardPressed6] = useState(false);
  return (
    //   <View style={styles.screen}>
    //   <View style={styles.textContainer}>
    //     <Text>
    //       Background fetch status:{' '}
    //       <Text style={styles.boldText}>
    //         {status && BackgroundFetch.BackgroundFetchStatus[status]}
    //       </Text>
    //     </Text>
    //     <Text>
    //       Background fetch task name:{' '}
    //       <Text style={styles.boldText}>
    //         {isRegistered ? BACKGROUND_FETCH_TASK : 'Not registered yet!'}
    //       </Text>
    //     </Text>
    //   </View>
    //   <View style={styles.textContainer} />
    //   <Button
    //     title={
    //       isRegistered
    //         ? 'Unregister BackgroundFetch task'
    //         : 'Register BackgroundFetch task'
    //     }
    //     onPress={toggleFetchTask}
    //   />
    // </View>
    <Animated.View
      className="flex-1 bg-white dark:bg-customBlack "
      entering={FadeIn.duration(1000)}
      exiting={FadeOut.duration(1000)}
    >
      <Animated.View style={[animatedHeaderStyle]}>
        <TextInput
          className="self-center dark:bg-customdarkCard bg-customlightGray  dark:text-white"
          style={styles.serchbar}
          placeholder="Serch services"
          placeholderTextColor={Colors.customeGray}
          value={serch}
          onChangeText={value => setserch(value)}
        />

        <Animated.View
          className="flex-row bg-customBlue dark:bg-customdarkCard text-white justify-between self-center "
          style={[styles.nameCard, [frontanimate]]}
        >
          <View>
            <Text style={styles.name} className="text-white font-bold">
              Hello Ken
            </Text>
            <Text className="text-white ">
              We trust you are having a great time
            </Text>
          </View>
          <TouchableOpacity onPress={handleflip}>
            <Image source={notification} style={styles.notification} />
          </TouchableOpacity>
        </Animated.View>
        <Animated.View
          className="flex-row bg-customGray dark:bg-customdarkCard text-white justify-between self-center "
          style={[styles.backnameCard, [backamimate]]}
        >
          <View>
            <Text style={styles.name} className="text-white font-bold ">
              Hello Ahsin
            </Text>
            <Text className="text-white ">
              We trust you are having a great time
            </Text>
          </View>
          <TouchableOpacity>
            <Image source={notification} style={styles.notification} />
          </TouchableOpacity>
        </Animated.View>
        <TouchableOpacity onPress={handleflip}>
          <Text>press tp flip</Text>
        </TouchableOpacity>
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
      </Animated.View>
      <View className="text-left items-left" style={styles.bottomscroolbox}>
        <Text
          className="text-customBlue font-bold "
          style={{ marginBottom: vs(10) }}
        >
          What would you like to do
        </Text>
        <Animated.ScrollView
          showsVerticalScrollIndicator={false}
          onScroll={scrollHandler}
        >
          <View className="flex-row justify-between">
            <Pressable
              className="bg-customOffwhite dark:bg-customdarkCard"
              onPressIn={() => setcardPressed1(true)}
              onPressOut={() => setcardPressed1(false)}
              onPress={postmydata}
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
              onPress={() => router.push('/(main)/refer_and_earn')}
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
        </Animated.ScrollView>
      </View>
    </Animated.View>
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
  backnameCard: {
    position: 'absolute',
    width: vs(360),
    marginTop: vs(120),
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
  screen: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  textContainer: {
    margin: 10,
  },
  boldText: {
    fontWeight: 'bold',
  },
});
export default Home;
