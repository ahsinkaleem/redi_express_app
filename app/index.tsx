import { Redirect } from 'expo-router';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); // Ignore all log notifications

const Index = () => {
  console.log('Redirecting to /feeds');
  return <Redirect href="/Welcome" />;
};
export default Index;
