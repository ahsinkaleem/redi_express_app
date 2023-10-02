import Button from '@src/components/globals/Button';
import MotiView from '@src/components/globals/MotiView';
import Screen from '@src/components/globals/Screen';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { AuthProps } from 'types';

const Welcome = ({ navigation }: AuthProps) => {
  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        from={{
          opacity: 0,
          translateY: -100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
      >
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            Welcome to Stable
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            Let&apos;s get started!
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-end justify-end`}
      >
        <MotiView
          from={{
            opacity: 0,
            translateY: 100,
          }}
          animate={{
            opacity: 1,
            translateY: 0,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-end justify-end"
        >
          <Button onPress={() => navigation.navigate('Signup')}>
            Create my account
          </Button>
          <Button light onPress={() => navigation.navigate('Signin')}>
            Login
          </Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Welcome;

const styles = StyleSheet.create({});
