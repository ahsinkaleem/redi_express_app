import { ms } from '@utils/design/design';
import { useRouter } from 'expo-router';
import { Button, Text } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Welcome = () => {
  const router = useRouter();

  return (
    <SafeAreaView>
      <Text
        style={{
          fontSize: ms(20),
        }}
      >
        Welcome
      </Text>

      <Button onPress={() => router.push('signin')} title="signin" />
    </SafeAreaView>
  );
};

export default Welcome;
