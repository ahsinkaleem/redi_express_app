import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from 'types';
import Forgot from '../../app/(auth)/Forgot';
import Signin from '../../app/(auth)/Signin';
import Signup from '../../app/(auth)/Signup';
import Welcome from '../../app/(auth)/Welcome';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
export default function Layout() {
  return (
    <>
      <AuthStack.Screen name='Welcome' component={Welcome} />
      <AuthStack.Screen name='Signin' component={Signin} />
      <AuthStack.Screen name='Signup' component={Signup} />
      <AuthStack.Screen name='ForgotPassword' component={Forgot} />
    </>
  );
}
