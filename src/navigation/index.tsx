/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable react/no-unstable-nested-components */
/* eslint-disable @typescript-eslint/no-use-before-define */
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import * as React from 'react';
import { ColorSchemeName } from 'react-native';

import NotFoundScreen from '@screens/NotFoundScreen';
import { RootStackParamList } from '../../types';
import { userLinking } from './LinkingConfiguration';
import Auth from './user/AuthStack';
import MainStackTabs from './user/MainStack';

const Stack = createNativeStackNavigator<RootStackParamList>();

const Navigation = ({ colorScheme }: { colorScheme: ColorSchemeName }) => {
  const user = false;
  return (
    <NavigationContainer
      linking={userLinking}
      // theme={colorScheme === 'dark' ? DarkTheme : DefaultTheme}
    >
      {/* {user == null && <Loading />} */}
      {user === false && <Auth />}
      {user === true && <MainStackTabs />}

      <Stack.Screen
        name="NotFound"
        component={NotFoundScreen}
        options={{ title: 'Oops!' }}
      />
    </NavigationContainer>
  );
};

export default Navigation;
