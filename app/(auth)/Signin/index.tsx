import Button from '@src/components/globals/Button';
import { useRouter } from 'expo-router';

import { Text, View } from 'react-native';

const Signin = () => {
  const router = useRouter();
  return (
    <View>
      <Text>Signin</Text>
      <Button light onPress={() => router.push('(main)/home')}>
        Login
      </Button>
    </View>
  );
};

export default Signin;
