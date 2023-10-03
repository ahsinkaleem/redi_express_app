/* eslint-disable camelcase */
/* eslint-disable react/jsx-pascal-case */
import Step1_BasicDetails from '@src/components/user/signup/Step1_BasicDetails';
import Step2_OTP from '@src/components/user/signup/Step2_OTP';
import useMultistepForm from '@src/hooks/useMultiStepForm';
import { AnimatePresence } from 'moti';
import React from 'react';
import { StyleSheet } from 'react-native';
import { AuthProps } from 'types';

const Signup = ({ navigation }: AuthProps) => {
  const { step } = useMultistepForm([<Step1_BasicDetails />, <Step2_OTP />]);

  return <AnimatePresence exitBeforeEnter>{step}</AnimatePresence>;
};

export default Signup;

const styles = StyleSheet.create({});
