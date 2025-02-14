/* eslint-disable no-underscore-dangle */
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack
      screenOptions={{ headerShown: false }}
      initialRouteName="welcome/index"
    >
      <Stack.Screen name="signin/index" />
      <Stack.Screen name="signup/index" />
      <Stack.Screen name="set-new-password/index" />
      <Stack.Screen name="otp_verification/index" />
      <Stack.Screen name="forgot_password/index" />
    </Stack>
  );
};

export default _layout;
