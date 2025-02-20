import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { useState } from 'react';
import { Image, KeyboardAvoidingView, StyleSheet, View } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import * as Yup from 'yup';
import Colors from '../../../assets/CustomeColors/colors';
import apple from '../../../assets/logos/apple-logo.png';
import facebook from '../../../assets/logos/facbook_logo.png';
import google from '../../../assets/logos/google-logo.png';
import Text from '../../../src/components/libraries/Text/index';
import TouchableOpacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  interface FormValues {
    name: string;
    phone: string;
    email: string;
    password: string;
    isAccepted: boolean;
  }
  const validationschema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    phone: Yup.string()
      .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
      .required('Phone Number is required'),
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    isAccepted: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions',
    ),
  });
  const [passwordVisible, setpasswordVisible] = useState(true);
  const onSubmit = (values: FormValues) => {
    console.log('credentails', values);
  };
  const router = useRouter();
  return (
    <View className="flex-1 bg-white dark:bg-black">
      <Text className="font-medium dark:text-white" style={styles.heading}>
        Create an account
      </Text>
      <Text className="text-customGray" style={styles.subtext}>
        complete the sign up process to get started
      </Text>
      <KeyboardAvoidingView>
        <Formik
          initialValues={{
            name: '',
            phone: '',
            email: '',
            password: '',
            isAccepted: false,
          }}
          validationSchema={validationschema}
          onSubmit={onSubmit}
        >
          {({
            handleChange,
            handleBlur,
            values,
            touched,
            errors,
            setFieldValue,
          }) => (
            <>
              <View style={styles.inputContainer}>
                <Text
                  className="text-customGray font-medium"
                  style={styles.label}
                >
                  Full Name
                </Text>

                <TextInput
                  className="dark:text-white"
                  style={styles.input}
                  onChangeText={handleChange('name')}
                  onBlur={handleBlur('name')}
                  placeholder="Abecd  fsgh"
                  value={values.name}
                  placeholderTextColor={Colors.customeGray}
                />
                {touched.name && errors.name && (
                  <Text className="text-red-500">{errors.name}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text
                  className="text-customGray font-medium"
                  style={styles.label}
                >
                  Phone Number
                </Text>

                <TextInput
                  className="dark:text-white"
                  style={styles.input}
                  onChangeText={handleChange('phone')}
                  onBlur={handleBlur('phone')}
                  placeholder="00000000000"
                  value={values.phone}
                  placeholderTextColor={Colors.customeGray}
                />
                {touched.phone && errors.phone && (
                  <Text className="text-red-500">{errors.phone}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text
                  className="text-customGray font-medium"
                  style={styles.label}
                >
                  Email Address
                </Text>

                <TextInput
                  className="dark:text-white"
                  style={styles.input}
                  onChangeText={handleChange('email')}
                  onBlur={handleBlur('email')}
                  placeholder="**********@mail.com"
                  value={values.email}
                  placeholderTextColor={Colors.customeGray}
                />
                {touched.email && errors.email && (
                  <Text className="text-red-500">{errors.email}</Text>
                )}
              </View>

              <View style={styles.inputContainer}>
                <Text
                  className="text-customGray font-medium"
                  style={styles.label}
                >
                  Password
                </Text>

                <TextInput
                  className="dark:text-white"
                  style={styles.input}
                  onChangeText={handleChange('password')}
                  onBlur={handleBlur('password')}
                  placeholder="************"
                  value={values.password}
                  placeholderTextColor={Colors.customeGray}
                  secureTextEntry={passwordVisible}
                />
                {touched.password && errors.password && (
                  <Text className="text-red-500">{errors.password}</Text>
                )}
                <TouchableOpacity
                  onPress={() => setpasswordVisible(!passwordVisible)}
                  style={styles.eye}
                >
                  <Ionicons
                    name={passwordVisible ? 'eye-off-outline' : 'eye-outline'}
                    size={24}
                    color="black"
                    className="dark:color-white "
                  />
                </TouchableOpacity>
              </View>

              <View style={styles.checkbox} className="flex-row ">
                <TouchableOpacity
                  onPress={() =>
                    setFieldValue('isAccepted', !values.isAccepted)
                  }
                >
                  <MaterialIcons
                    name={
                      values.isAccepted
                        ? 'check-box'
                        : 'check-box-outline-blank'
                    }
                    size={22}
                    color={Colors.customBlue}
                  />
                </TouchableOpacity>
                <View className="flex-row" style={styles.checktext}>
                  <Text className="text-customGray text-center">
                    By ticking this box you agree to our
                    <Text className="text-customGolden">
                      Terms and condition and privacy policy
                    </Text>
                  </Text>
                </View>
              </View>
            </>
          )}
        </Formik>

        <View className="items-center">
          <TouchableOpacity
            onPress={() => router.push('/(auth)/signin')}
            className="bg-customBlue items-center text-center justify-center"
            style={styles.signup}
          >
            <Text className="text-white dark:text-white font-bold">
              Sign Up
            </Text>
          </TouchableOpacity>
          <View className="flex-row justify-center">
            <Text className="text-customGray">Already have an account?</Text>
            <TouchableOpacity onPress={() => router.push('/(auth)/signin')}>
              <Text className="text-customBlue font-bold">Sign in</Text>
            </TouchableOpacity>
          </View>
        </View>
      </KeyboardAvoidingView>

      <Text style={styles.otheroptions} className="text-center text-customGray">
        or sign in using{' '}
      </Text>
      <View className="flex-row  justify-center">
        <TouchableOpacity>
          <Image style={styles.image} source={facebook} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={google} />
        </TouchableOpacity>
        <TouchableOpacity>
          <Image style={styles.image} source={apple} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  heading: {
    fontSize: ms(25),
    marginTop: vs(70),
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
    marginTop: vs(20),
  },
  eye: {
    position: 'absolute',
    marginTop: vs(50),
    right: hs(20),
  },
  checkbox: {
    marginLeft: hs(20),
    marginRight: hs(20),
    marginTop: vs(5),
  },
  checktext: {
    width: hs(300),
    marginLeft: hs(10),
  },
  signup: {
    width: hs(340),
    height: vs(40),
    borderRadius: ms(4),
    marginTop: vs(70),
    marginBottom: vs(5),
  },
  otheroptions: {
    marginTop: vs(30),
    marginBottom: vs(10),
  },
  image: {
    height: vs(20),
    width: hs(18),
    marginHorizontal: hs(5),
  },
});

export default Index;
