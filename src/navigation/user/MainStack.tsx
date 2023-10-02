import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Colors from '@src/constants/Colors';
import Account from '@src/screens/user/main/Account';
import Card from '@src/screens/user/main/Card';
import Home from '@src/screens/user/main/Home';
import { getRespValue, hp } from '@utils/design/design';
import { Image, Platform, StyleSheet } from 'react-native';
import { RootTabParamList } from 'types';

// Icons
import accountActive from '@assets/icons/bottom-tabs/account-active.png';
import account from '@assets/icons/bottom-tabs/account.png';
import cardActive from '@assets/icons/bottom-tabs/card-active.png';
import card from '@assets/icons/bottom-tabs/card.png';
import homeActive from '@assets/icons/bottom-tabs/home-active.png';
import home from '@assets/icons/bottom-tabs/home.png';

const MainStack = createBottomTabNavigator<RootTabParamList>();
const MainStackTabs = () => {
  return (
    <MainStack.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarStyle: styles.tabBarStyle,
        tabBarActiveTintColor: Colors.light.textYellow,
        tabBarInactiveTintColor: Colors.light.textGray,
        tabBarLabelStyle: styles.tabBarLabelStyle,
        headerShown: false,
      }}
    >
      <MainStack.Screen
        name="Home"
        component={Home}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? homeActive : home}
              style={styles.iconSquare}
              resizeMode="contain"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="Account"
        component={Account}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components
          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? accountActive : account}
              style={styles.iconSquare}
              resizeMode="contain"
            />
          ),
        })}
      />
      <MainStack.Screen
        name="Card"
        component={Card}
        options={() => ({
          // eslint-disable-next-line react/no-unstable-nested-components

          tabBarIcon: ({ focused }) => (
            <Image
              source={focused ? cardActive : card}
              style={styles.iconHorizontal}
              resizeMode="contain"
            />
          ),
        })}
      />
    </MainStack.Navigator>
  );
};

export default MainStackTabs;

const styles = StyleSheet.create({
  iconSquare: {
    width: getRespValue(35),
    height: getRespValue(35),
  },
  iconHorizontal: {
    width: getRespValue(45),
    height: getRespValue(45),
  },
  tabBarStyle: {
    backgroundColor: Colors.light.background,
    height: hp('11%'),
    paddingTop: hp('2%'),
    paddingBottom: Platform.OS === 'ios' ? hp('3.5%') : hp('2%'),
  },
  tabBarLabelStyle: {
    fontSize: getRespValue(13),
    fontFamily: 'aeonik',
  },
});
