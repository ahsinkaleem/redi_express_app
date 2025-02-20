import { Stack } from 'expo-router';

// eslint-disable-next-line no-underscore-dangle
const _layout = () => {
  return (
    <Stack>
      <Stack.Screen name="SendPackage/index" />
    </Stack>
  );
};

export default _layout;
