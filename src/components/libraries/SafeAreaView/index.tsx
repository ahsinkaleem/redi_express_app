import {
  SafeAreaView as Lib,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const index = (props: SafeAreaViewProps) => {
  return <Lib {...props} />;
};

export default index;
