import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { Alert, StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import Colors from '../../../assets/CustomeColors/colors';
import TouchableOpacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  const router = useRouter();
  const validationSchema = Yup.object({
    newPassword: Yup.string()
      .min(8, 'Password must be at least 8 characters long')
      .required('New password is required'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('newPassword'), ''], 'Passwords must match')
      .required('Confirm password is required'),
  });
  const handleSubmit = (values: {
    newPassword: string;
    confirmPassword: string;
  }) => {
    Alert.alert('Password changed', `New password: ${values.newPassword}`);
  };
  return (
    <View>
      <Text className="font-medium" style={styles.heading}>
        New Password
      </Text>
      <Text className="text-customGray" style={styles.subtext}>
        Enter new Password
      </Text>
      <Formik
        initialValues={{ newPassword: '', confirmPassword: '' }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ handleChange, handleBlur, values, errors, touched }) => (
          <View>
            <View style={styles.inputContainer}>
              <Text
                className="text-customGray font-medium"
                style={styles.label}
              >
                Password
              </Text>

              <TextInput
                style={styles.input}
                className="dark:text-white"
                onChangeText={handleChange('newPassword')}
                onBlur={handleBlur('newPassword')}
                placeholder="************"
                value={values.newPassword}
                placeholderTextColor={Colors.customeGray}
                secureTextEntry
              />
              {touched.newPassword && errors.newPassword && (
                <Text className="text-red-500">{errors.newPassword}</Text>
              )}
            </View>
            <View style={styles.inputContainer}>
              <Text
                className="text-customGray font-medium"
                style={styles.label}
              >
                Confirm Password
              </Text>

              <TextInput
                style={styles.input}
                className="dark:text-white"
                onChangeText={handleChange('confirmPassword')}
                onBlur={handleBlur('confirmPassword')}
                placeholder="************"
                value={values.confirmPassword}
                placeholderTextColor={Colors.customeGray}
                secureTextEntry
              />
              {touched.confirmPassword && errors.confirmPassword && (
                <Text className="text-red-500">{errors.confirmPassword}</Text>
              )}
            </View>
          </View>
        )}
      </Formik>
      <TouchableOpacity
        style={styles.loginbt}
        onPress={() => router.push('/(auth)/signin')}
        className="bg-customBlue items-center text-center self-center justify-center "
      >
        <Text className="text-white dark:text-white font-bold">Log in</Text>
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
    marginTop: vs(20),
  },
  loginbt: {
    width: hs(340),
    height: vs(40),
    borderRadius: ms(4),
    marginTop: vs(100),
    marginBottom: vs(5),
    marginHorizontal: hs(20),
  },
});
