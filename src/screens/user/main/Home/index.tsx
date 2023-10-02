// import PhoneInput from '@src/components/globals/PhoneInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Button from '@stable/Button';
import React from 'react';
import { StyleSheet, Text } from 'react-native';

const Home = () => {
  return (
    <ScreenAuth className="bg-[#D0FFE6] flex-1">
      <Text>Home</Text>
      <Button>Check</Button>
    </ScreenAuth>
  );
};

export default Home;

const styles = StyleSheet.create({});
