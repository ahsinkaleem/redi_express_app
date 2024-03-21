import { Stack } from 'expo-router';

const WelcomeLayout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }} initialRouteName="welcome" />
  );
};

export default WelcomeLayout;
