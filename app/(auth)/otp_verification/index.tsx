/* eslint-disable react/no-unescaped-entities */
import { useRouter } from 'expo-router';
import { useRef, useState } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import Colors from '../../../assets/CustomeColors/colors';
import TouchableOpacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  const router = useRouter();
  const inputRefs = useRef<TextInput[]>([]);
  const [otp, setOtp] = useState<string[]>(Array(6).fill(''));
  const handleInputChange = (text: string, index: number) => {
    if (/^\d$/.test(text)) {
      const newOtp = [...otp];
      newOtp[index] = text;
      setOtp(newOtp);

      if (index < 5 && text) {
        inputRefs.current[index + 1].focus();
      }

      if (index === 5 && text) {
        onComplete(newOtp.join(''));
      }
    }
  };
  const onComplete = (enterdotp: string) => {
    Alert.alert('OTP Submitted', `OTP: ${enterdotp}`);
  };
  const handleKeyPress = (
    event: { nativeEvent: { key: string } },
    index: number,
  ) => {
    if (event.nativeEvent.key === 'Backspace') {
      const newOtp = [...otp];
      if (otp[index]) {
        newOtp[index] = '';
      } else if (index > 0) {
        newOtp[index - 1] = '';
        inputRefs.current[index - 1].focus();
      }
      setOtp(newOtp);
    }
  };
  return (
    <View className="bg-white dark:bg-black flex-1">
      <Text className="font-medium dark:text-white" style={styles.heading}>
        OTP Verification
      </Text>
      <Text className="text-customGray font-bold" style={styles.subtext}>
        Enter the 6 digit numbers sent to your email
      </Text>
      <View className="flex-row  justify-center" style={styles.otpcontainer}>
        {otp.map((digit, index) => (
          <TextInput
            // eslint-disable-next-line react/no-array-index-key
            key={index}
            ref={ref => {
              inputRefs.current[index] = ref as TextInput;
            }}
            className="text-center dark:text-white"
            style={[styles.otpBox, digit ? styles.filledOtpBox : null]}
            keyboardType="numeric"
            maxLength={1}
            value={digit}
            onChangeText={text => handleInputChange(text, index)}
            onKeyPress={e => handleKeyPress(e, index)}
            selectTextOnFocus
          />
        ))}
      </View>
      <View className="flex-row  justify-center" style={styles.bottomtext}>
        <Text className="text-customGray">if you didn't receive code,</Text>
        <TouchableOpacity>
          <Text className="text-customBlue">Resend</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        className="bg-customBlue items-center text-center justify-center "
        onPress={() => router.push('/(auth)/set_new_password')}
        style={styles.signupButton}
      >
        <Text className="text-white dark:text-white font-bold ">
          Set New Password
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;

const styles = StyleSheet.create({
  heading: {
    fontSize: ms(25),
    marginTop: hs(150),
    marginLeft: vs(20),
  },
  subtext: {
    marginTop: hs(5),
    marginLeft: vs(20),
    marginBottom: hs(10),
  },
  signupButton: {
    width: vs(350),
    height: hs(40),
    borderRadius: ms(4),
    alignSelf: 'center',
  },
  container: {
    justifyContent: 'center',
    alignItems: 'center',
  },

  otpBox: {
    width: hs(35),
    height: vs(35),
    borderWidth: 1,
    borderColor: Colors.customBlue,
    fontSize: 18,
    marginHorizontal: hs(10),
  },
  otpcontainer: {
    marginTop: vs(50),
  },
  bottomtext: {
    marginTop: vs(10),
    marginBottom: vs(100),
  },
  filledOtpBox: {
    borderColor: Colors.customeFilled,
    borderWidth: 2,
  },
});
