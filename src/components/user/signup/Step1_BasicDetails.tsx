/* eslint-disable react/jsx-props-no-spreading */
/* eslint-disable camelcase */
import Button from '@src/components/globals/Button';
import Checkbox from '@src/components/globals/Checkbox';
import Input from '@src/components/globals/Input';
// import MotiView from '@src/components/globals/MotiView';

import PhoneInput from '@src/components/globals/PhoneInput';
import Screen from '@src/components/globals/Screen';
import Switch from '@src/components/globals/Switch';
import Colors from '@src/constants/Colors';
import { MultiStepFormProps } from '@src/hooks/useMultiStepForm';
import { animationConfig } from '@utils/animation/animation';
import { getRespValue } from '@utils/design/design';
import { MotiView } from 'moti';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

// eslint-disable-next-line camelcase
const Step1_BasicDetails = ({ next }: MultiStepFormProps) => {
  const [toggleIsOn, setToggle] = useState(false);
  const [checkIsOn, setCheck] = useState('off');

  return (
    <Screen
      className={`bg-[${Colors.light.theme.yellow}]`}
      topColor={Colors.light.theme.yellow}
    >
      <MotiView
        key="createAccount"
        {...(animationConfig as object)}
        from={{
          opacity: 0,
          translateY: -100,
        }}
        animate={{
          opacity: 1,
          translateY: 0,
        }}
        exit={{
          opacity: 0,
          translateY: -100,
        }}
        transition={{
          type: 'timing',
          delay: 100,
          duration: 500,
        }}
      >
        <View className="px-4 pt-8 pb-8">
          <Text
            style={{
              fontSize: getRespValue(45),
            }}
            className="font-aeonik w-3/4"
          >
            Let&apos;s create your account
          </Text>
          <Text
            style={{
              fontSize: getRespValue(30),
            }}
            className="font-aeonik pt-4 pb-4"
          >
            Please complete the information below
          </Text>
        </View>
      </MotiView>

      <View
        className={`bg-[${Colors.light.theme.darkYellow}] h-full flex-1 w-full flex-col items-start justify-start`}
      >
        <MotiView
          key="createAccountDetails"
          {...(animationConfig as object)}
          exit={{
            opacity: 0,
            translateY: 100,
          }}
          style={{
            backgroundColor: Colors.light.theme.darkYellow,
          }}
          className="bg-none h-full flex-1 w-full flex-col items-start justify-start"
        >
          <Input placeholder="Name" />
          <Input placeholder="Email" />
          <PhoneInput placeholder="Enter phone Number" />
          <Input placeholder="Create Password" password />
          <Switch
            isOn={toggleIsOn}
            onToggle={() => {
              setToggle(!toggleIsOn);
            }}
            label="Enable face ID"
          />
          <Checkbox
            className="mt-auto"
            label="I agree to the Terms of Service and Privacy Policy"
            value={checkIsOn}
            onChange={() => {
              setCheck(preVal => (preVal === 'on' ? 'off' : 'on'));
            }}
          />
          <Button onPress={() => next && next()}>Continue</Button>
        </MotiView>
      </View>
    </Screen>
  );
};

export default Step1_BasicDetails;

const styles = StyleSheet.create({});
