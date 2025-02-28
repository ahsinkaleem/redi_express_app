import { Stack } from 'expo-router';

// eslint-disable-next-line no-underscore-dangle
const _layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="produck_detail/index" />
    </Stack>
  );
};

export default _layout;
