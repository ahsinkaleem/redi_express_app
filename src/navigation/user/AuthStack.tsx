import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Forgot from '@src/screens/user/auth/Forgot';
import Signin from '@src/screens/user/auth/Signin';
import Signup from '@src/screens/user/auth/Signup';
import Welcome from '@src/screens/user/auth/Welcome';
import { AuthStackParamList } from 'types';

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
