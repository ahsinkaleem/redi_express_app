import { Stack } from 'expo-router';

// eslint-disable-next-line no-underscore-dangle
const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="refer_and_earn/index" />
    </Stack>
  );
};

export default _layout;
