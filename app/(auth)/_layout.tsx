import { Stack } from 'expo-router';
// const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Layout = () => {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <Stack.Screen name="welcome/index" />
      <Stack.Screen name="signin/index" />
      <Stack.Screen name="signup/index" />
    </Stack>
  );
};

export default Layout;
