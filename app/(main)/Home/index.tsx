// import PhoneInput from '@src/components/globals/PhoneInput';
import ScreenAuth from '@src/components/globals/ScreenAuth';
import Button from '@stable/Button';

import { Text } from 'react-native';

const Index = () => {
  return (
    <ScreenAuth className="bg-[#D0FFE6] flex-1">
      <Text>Home</Text>
      <Button>Check</Button>
    </ScreenAuth>
  );
};

export default Index;
