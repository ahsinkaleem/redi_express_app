import { useRouter } from 'expo-router';
import { SetStateAction, useState } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import Colors from '../../../assets/CustomeColors/colors';
import Touchableopacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  const [email, setemail] = useState('');
  const router = useRouter();
  return (
    <View className="bg-white flex-1 dark:bg-black">
      <Text className="font-medium dark:text-white" style={styles.heading}>
        Forgot Password
      </Text>
      <Text className="text-customGray" style={styles.subtext}>
        Enter your email adress
      </Text>
      <View style={styles.inputContainer}>
        <Text className="text-customGray font-medium" style={styles.label}>
          Email Address
        </Text>

        <TextInput
          style={styles.input}
          onChangeText={(value: SetStateAction<string>) => setemail(value)}
          placeholder="**********@mail.com"
          value={email}
          placeholderTextColor={Colors.customeGray}
        />
        <View style={styles.bottomsection}>
          <Touchableopacity
            className="bg-customBlue items-center text-center justify-center"
            onPress={() => router.push('/(auth)/otp_verification')}
            style={styles.signupButton}
          >
            <Text className="text-white dark:text-white font-bold">
              Send OTP
            </Text>
          </Touchableopacity>
          <View className="flex-row justify-center" style={styles.bottomtext}>
            <Text className="text-customGray">Remember password? Back to </Text>
            <Touchableopacity onPress={() => router.push('/signin')}>
              <Text className="text-customBlue font-bold">Sign in</Text>
            </Touchableopacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  heading: {
    fontSize: ms(25),
    marginTop: vs(150),
    marginLeft: hs(20),
  },
  subtext: {
    marginTop: vs(5),
    marginLeft: hs(20),
    marginBottom: vs(10),
  },
  input: {
    borderRadius: ms(3),
    borderWidth: ms(1),
    marginTop: vs(5),
    borderColor: Colors.customeGray,
    marginBottom: vs(2),
    padding: ms(10),
  },
  inputContainer: {
    marginHorizontal: hs(20),
  },
  label: {
    marginTop: vs(40),
  },
  bottomtext: {
    marginTop: vs(5),
  },
  signupButton: {
    width: hs(340),
    height: vs(40),
    borderRadius: ms(4),
  },
  bottomsection: {
    marginTop: vs(90),
  },
});
