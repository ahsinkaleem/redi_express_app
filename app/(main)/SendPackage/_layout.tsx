/* eslint-disable no-underscore-dangle */
import { Stack } from 'expo-router';

const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SendPackage/index" />
    </Stack>
  );
};

export default _layout;
