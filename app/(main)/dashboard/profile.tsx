import Colors from '@assets/CustomeColors/colors';
import { Ionicons } from '@expo/vector-icons';
import { TouchableOpacity } from '@src/components/libraries';
import Aboutus from 'assets/images/about.svg';
import Editprofile from 'assets/images/editprofile.svg';
import Extend from 'assets/images/extend.svg';
import profile from 'assets/images/Frame 83.png';
import Back from 'assets/images/left-back-blue.svg';
import Logout from 'assets/images/logout.svg';
import Notification from 'assets/images/notification.svg';
import Refral from 'assets/images/refral.svg';
import Statement from 'assets/images/statememnt.svg';
import Card from 'assets/images/wallet-2.svg';
import { useRouter } from 'expo-router';
import { useState } from 'react';
import { Image, StyleSheet, Switch, Text, View } from 'react-native';
import { hs, ms, vs } from '../../../utils/design/design';

const Profile = () => {
  const [amountVisible, setamountVisible] = useState(true);
  const router = useRouter();
  const [darkmode, setdarkmode] = useState(false);
  const toggleSwitch = () => setdarkmode(prev => !prev);
  return (
    <View className="flex-1 bg-white dark:bg-customBlack">
      <View className="flex-row" style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Back style={styles.image} />
        </TouchableOpacity>

        <Text
          style={styles.headertext}
          className="text-customGray font-medium text-center self-center justify-center"
        >
          Profile
        </Text>
      </View>
      <View style={styles.hrLine} />

      <View className="flex-row  " style={styles.profilebox}>
        <Image source={profile} style={styles.profile} />
        <View className="justify-center ">
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
            name={amountVisible ? 'eye-off-outline' : 'eye-outline'}
            size={20}
            color="black"
            className="dark:color-white "
          />
        </TouchableOpacity>
      </View>
      <View style={styles.switchcontainer} className="flex-row">
        <Text
          style={styles.swithtext}
          className=" flex-1 font-bold dark:text-white"
        >
          Enable dark Mode
        </Text>
        <Switch
          trackColor={{ false: '#ccc', true: Colors.customBlue }}
          thumbColor={darkmode ? '#fff' : '#fff'}
          onValueChange={toggleSwitch}
          value={darkmode}
        />
      </View>
      <View style={styles.cardcontainer}>
        <View
          className="flex-row items-center dark:bg-customdarkCard bg-white"
          style={styles.card}
        >
          <Editprofile />
          <View className="flex-1" style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              Edit Profile
            </Text>
            <Text className="text-customGray">
              Name, phone no, address, email...
            </Text>
          </View>
          <Extend />
        </View>
        <View
          className="flex-row items-center dark:bg-customdarkCard bg-white"
          style={styles.card}
        >
          <Statement />
          <View className="flex-1" style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              Statements & Reports
            </Text>
            <Text className="text-customGray">
              Download transaction details, or
            </Text>
          </View>
          <Extend />
        </View>
        <View
          className="flex-row items-center dark:bg-customdarkCard bg-white"
          style={styles.card}
        >
          <Notification />
          <View className="flex-1" style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              Notification Settings
            </Text>
            <Text className="text-customGray">
              mute,umute, set location & tracking setting
            </Text>
          </View>
          <Extend />
        </View>
        <View
          className="flex-row items-center dark:bg-customdarkCard bg-white"
          style={styles.card}
        >
          <Card />
          <View className="flex-1" style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              Card & Bank account settings
            </Text>
            <Text className="text-customGray">
              change cards, delete card details
            </Text>
          </View>
          <Extend />
        </View>
        <View
          className="flex-row items-center dark:bg-customdarkCard bg-white"
          style={styles.card}
        >
          <Refral />
          <View className="flex-1" style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              Referrals
            </Text>
            <Text className="text-customGray">
              check no of friends and earn
            </Text>
          </View>
          <Extend />
        </View>
        <View
          className="flex-row items-center dark:bg-customdarkCard bg-white"
          style={styles.card}
        >
          <Aboutus />
          <View className="flex-1" style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              About Us
            </Text>
            <Text className="text-customGray">
              know more about us, terms and condition
            </Text>
          </View>
          <Extend />
        </View>
        <View
          className="flex-row items-center dark:text-white dark:bg-customdarkCard bg-white"
          style={[styles.card, styles.logout]}
        >
          <Logout />
          <View style={styles.textcontainer}>
            <Text
              style={styles.cardheading}
              className="font-medium dark:text-white"
            >
              Log Out
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default Profile;
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

  switchcontainer: {
    marginHorizontal: hs(20),
    marginTop: vs(30),
  },
  swithtext: {
    fontSize: ms(17),
  },
  cardcontainer: {
    marginHorizontal: hs(20),
    marginTop: vs(20),
  },
  cardheading: {
    fontSize: ms(15),
  },
  textcontainer: {
    marginLeft: hs(5),
  },
  card: {
    marginVertical: vs(5.5),
    elevation: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    paddingHorizontal: hs(10),
    paddingVertical: vs(10),
  },
  logout: {
    paddingVertical: vs(15),
  },
});
