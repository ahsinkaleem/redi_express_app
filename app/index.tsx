import { useAppSelector } from '@src/hooks/useReduxHooks';
import { Redirect } from 'expo-router';

// LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
// LogBox.ignoreAllLogs(); // Ignore all log notifications

const Index = () => {
  const user = useAppSelector(state => state.user);

  if (user.data.email) {
    return <Redirect href="/home/" />;
  }
  return <Redirect href="/(auth)/welcome" />;
};
export default Index;
