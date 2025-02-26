/* eslint-disable import/order */
import { useSignupMutation } from '@/store/api/user';
import Ionicons from '@expo/vector-icons/Ionicons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FormikInput from '@src/components/globals/FormikInput';
import { useRouter } from 'expo-router';
import { useFormik } from 'formik';
import { useState } from 'react';
import {
  Alert,
  Image,
  KeyboardAvoidingView,
  StyleSheet,
  View,
} from 'react-native';
import * as Yup from 'yup';
import Colors from '../../../assets/CustomeColors/colors';
import apple from '../../../assets/logos/apple-logo.png';
import facebook from '../../../assets/logos/facbook_logo.png';
import google from '../../../assets/logos/google-logo.png';
import Text from '../../../src/components/libraries/Text/index';
import TouchableOpacity from '../../../src/components/libraries/TouchableOpacity';
import { hs, ms, vs } from '../../../utils/design/design';

const Index = () => {
  const [signup] = useSignupMutation();

  const handleSubmmits = async (values: FormValues) => {
    console.log('clicked', values);
    try {
      const responce = await signup(values).unwrap();
      Alert.alert('Success', responce.message);
    } catch (err) {
      Alert.alert(
        'Error',
        `Signup failed! ${
          err.data?.err?.description || err.message || 'Unknown error'
        }`,
      );
    }
  };
  interface FormValues {
    name: string;
    phoneNumber: string;
    email: string;
    password: string;
    termsAccepted: boolean;
  }

  const formik = useFormik({
    initialValues: {
      name: '',
      phoneNumber: '',
      email: '',
      password: '',
      termsAccepted: false,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Name is required'),
      phoneNumber: Yup.string()
        .matches(/^[0-9]{10}$/, 'Phone number must be exactly 10 digits')
        .required('Phone Number is required'),
      email: Yup.string()
        .email('Invalid email format')
        .required('Email is required'),
      password: Yup.string()
        .min(6, 'Password must be at least 6 characters')
        .required('Password is required'),
      termsAccepted: Yup.boolean().oneOf(
        [true],
        'You must accept the terms and conditions',
      ),
    }),
    onSubmit: values => {
      console.log('clicked1');
      setTimeout(() => {
        handleSubmmits(values);
      }, 600);
    },
  });

  const [passwordVisible, setpasswordVisible] = useState(true);

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
        <View style={styles.inputContainer}>
          <Text className="text-customGray font-medium" style={styles.label}>
            Full Name
          </Text>
          <FormikInput
            formik={formik}
            name="name"
            inputProps={{
              placeholder: 'Abecd  fsgh',
              returnKeyType: 'next',
              placeholderTextColor: Colors.customlightGray,
              onSubmitEditing: () => {},
            }}
          />
          {/* {touched.name && error.name && (
            <Text className="text-red-500">{Error.name}</Text>
          )} */}
        </View>

        <View style={styles.inputContainer}>
          <Text className="text-customGray font-medium" style={styles.label}>
            Phone Number
          </Text>
          <FormikInput
            formik={formik}
            name="phoneNumber"
            inputProps={{
              placeholder: '00000000000',
              returnKeyType: 'next',
              placeholderTextColor: Colors.customlightGray,
              onSubmitEditing: () => {},
            }}
          />
          {/* {Touch.phnNumber && Error.phnNumber && (
            <Text className="text-red-500">{Error.phone}</Text>
          )} */}
        </View>

        <View style={styles.inputContainer}>
          <Text className="text-customGray font-medium" style={styles.label}>
            Email Address
          </Text>
          <FormikInput
            formik={formik}
            name="email"
            inputProps={{
              placeholder: '**********@mail.com',
              returnKeyType: 'next',
              placeholderTextColor: Colors.customlightGray,
              onSubmitEditing: () => {},
            }}
          />
          {/* {touched.email && errors.email && (
            <Text className="text-red-500">{errors.email}</Text>
          )} */}
        </View>

        <View style={styles.inputContainer}>
          <Text className="text-customGray font-medium" style={styles.label}>
            Password
          </Text>
          <FormikInput
            formik={formik}
            name="password"
            inputProps={{
              placeholder: '************',
              placeholderTextColor: Colors.customlightGray,
              returnKeyType: 'next',
              secureTextEntry: true,
              onSubmitEditing: () => {},
            }}
          />
          {/* {touched.password && errors.password && (
            <Text className="text-red-500">{errors.password}</Text>
          )} */}
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
              formik.setFieldValue(
                'termsAccepted',
                !formik.values.termsAccepted,
              )
            }
          >
            <MaterialIcons
              name={
                formik.values.termsAccepted
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

        <View className="items-center">
          <TouchableOpacity
            onPress={() => formik.handleSubmit()}
            className="bg-customBlue items-center text-center justify-center"
            style={styles.signup}
            disabled={!formik.values.termsAccepted}
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
