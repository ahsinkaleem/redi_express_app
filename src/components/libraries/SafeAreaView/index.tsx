import { forwardRef } from 'react';
import {
  SafeAreaView as Lib,
  SafeAreaViewProps,
} from 'react-native-safe-area-context';

const SafeAreaView = forwardRef((props: SafeAreaViewProps) => {
  return <Lib {...props} />;
});

export default SafeAreaView;
