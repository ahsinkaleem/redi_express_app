/* eslint-disable react/no-unescaped-entities */
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Formik } from 'formik';
import { useState } from 'react';
import { Image, StyleSheet, Text, TextInput, View } from 'react-native';
import * as Yup from 'yup';
import Colors from '../../../assets/CustomeColors/colors';
import apple from '../../../assets/logos/apple-logo.png';
import facebook from '../../../assets/logos/facbook_logo.png';
import google from '../../../assets/logos/google-logo.png';
import TouchableOpacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  interface FormValues {
    email: string;
    password: string;
    rememberPassword: boolean;
  }
  const router = useRouter();
  const validationschema = Yup.object().shape({
    email: Yup.string()
      .email('Invalid email format')
      .required('Email is required'),
    password: Yup.string()
      .min(6, 'Password must be at least 6 characters')
      .required('Password is required'),
    rememberPassword: Yup.boolean().oneOf(
      [true],
      'You must accept the terms and conditions',
    ),
  });

  const onSubmit = (values: FormValues) => {
    console.log(values);
  };
  const [passwordVisible, setpasswordVisible] = useState(true);
  return (
    <View className="bg-white dark:bg-black flex-1">
      <Text className="font-medium dark:text-white" style={styles.heading}>
        Welcome Back
      </Text>
      <Text className="text-customGray" style={styles.subtext}>
        Fill in your email and password to continue
      </Text>

      <Formik
        initialValues={{ email: '', password: '', rememberPassword: false }}
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
                style={styles.input}
                className="dark:text-white"
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
                />
              </TouchableOpacity>
            </View>

            <View
              style={styles.checkbox}
              className="flex-row justify-between w-full  items-center"
            >
              <View className="flex-row items-center">
                <TouchableOpacity
                  onPress={() =>
                    setFieldValue('rememberPassword', !values.rememberPassword)
                  }
                >
                  <MaterialIcons
                    name={
                      values.rememberPassword
                        ? 'check-box'
                        : 'check-box-outline-blank'
                    }
                    size={22}
                    color={Colors.customBlue}
                  />
                </TouchableOpacity>

                <Text
                  className="text-customGray font-bold"
                  style={styles.smalltext}
                >
                  Remember password
                </Text>
              </View>
              <TouchableOpacity
                onPress={() => router.push('/(auth)/forgot_password')}
              >
                <Text
                  className="text-customBlue font-bold"
                  style={styles.smalltext}
                >
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
      <View className="items-center">
        <TouchableOpacity
          style={styles.loginbt}
          onPress={() => router.push('/(auth)/signin')}
          className="bg-customBlue items-center text-center justify-center"
        >
          <Text className="text-white dark:text-white font-bold">Log in</Text>
        </TouchableOpacity>
        <View className="flex-row justify-center">
          <Text className="text-customGray">Don't have an account?</Text>
          <TouchableOpacity onPress={() => router.push('/(auth)/signup')}>
            <Text className="text-customBlue font-bold">Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View>
      <Text className="text-customGray  text-center" style={styles.bottomtext}>
        or log in using{' '}
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
    marginTop: vs(20),
  },
  checkbox: {
    marginHorizontal: hs(20),
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    width: hs(338),
    marginTop: vs(5),
  },
  eye: {
    position: 'absolute',
    marginTop: vs(50),
    right: hs(20),
  },
  loginbt: {
    width: hs(340),
    height: vs(40),
    borderRadius: ms(4),
    marginTop: vs(180),
    marginBottom: vs(5),
  },
  smalltext: {
    fontSize: ms(12),
  },
  bottomtext: {
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
