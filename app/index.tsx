import { Redirect } from 'expo-router';
import { LogBox } from 'react-native';

LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); // Ignore all log notifications

const Index = () => {
  console.log('Redirecting to /feeds');
  return <Redirect href="/(auth)/Signup" />;
};
export default Index;
