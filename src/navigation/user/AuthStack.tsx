import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { AuthStackParamList } from 'types';
import Forgot from '../../../app/(user)/(auth)/Forgot';
import Signin from '../../../app/(user)/(auth)/Signin';
import Signup from '../../../app/(user)/(auth)/Signup';
import Welcome from '../../../app/(user)/(auth)/Welcome';

const AuthStack = createNativeStackNavigator<AuthStackParamList>();
const Auth = () => {
  return (
    <AuthStack.Navigator
      screenOptions={{
        headerShown: false,
      }}
      initialRouteName="Welcome"
    >
      <AuthStack.Screen name="Welcome" component={Welcome} />
      <AuthStack.Screen name="Signin" component={Signin} />
      <AuthStack.Screen name="Signup" component={Signup} />
      <AuthStack.Screen name="ForgotPassword" component={Forgot} />
    </AuthStack.Navigator>
  );
};

export default Auth;
