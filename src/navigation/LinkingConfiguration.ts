/* eslint-disable import/prefer-default-export */
/**
 * Learn more about deep linking with React Navigation
 * https://reactnavigation.org/docs/deep-linking
 * https://reactnavigation.org/docs/configuring-links
 */

import { LinkingOptions } from '@react-navigation/native';
import * as Linking from 'expo-linking';

import { RootStackParamList } from '../../types';

export const userLinking: LinkingOptions<RootStackParamList> = {
  prefixes: [Linking.createURL('/')],
  config: {
    screens: {
      Root: {
        screens: {
          Home: {
            screens: {},
          },
          Account: {
            screens: {},
          },
          Card: {
            screens: {},
          },
        },
      },
      Auth: {
        screens: {
          Signin: {},
          Signup: {},
          ForgotPassword: {},
        },
      },
      Modal: 'modal',
      NotFound: '*',
    },
  },
};
