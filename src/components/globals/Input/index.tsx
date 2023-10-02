/* eslint-disable import/extensions */
/* eslint-disable react/jsx-props-no-spreading */
import warningIcon from '@assets/icons/signup/warning.png';
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import React, { useCallback } from 'react';
import { Image, StyleSheet } from 'react-native';
import {
  TextInput as TextInputPaper,
  TextInputProps,
} from 'react-native-paper';

interface MyTextInputProps extends TextInputProps {
  error?: boolean;
  password?: boolean;
}

const Input = (props: MyTextInputProps) => {
  const { className, style, value, password, right, error, ...others } = props;
  const [checked, setChecked] = React.useState(true);

  const handleRightValues = useCallback(() => {
    if (error) {
      return <Image source={warningIcon} className="w-9 h-9" />;
    }
    if (password) {
      return (
        <TextInputPaper.Icon
          icon="eye"
          onPress={() => {
            setChecked(!checked);
          }}
        />
      );
    }

    return right;
  }, [checked, error, password, right]);

  return (
    <TextInputPaper
      {...others}
      style={{
        backgroundColor: Colors.light.theme.darkYellow,
        height: getRespValue(70),
        ...(style as object),
      }}
      underlineStyle={{ backgroundColor: 'transparent' }}
      className={`w-full  text-xl border-b-2 border-white  ${
        value ? 'font-aeonik' : 'font-aeonik-light font-extralight'
      } ${error ? 'bg-red-400' : ''} ${className}`}
      secureTextEntry={password ? !!checked : false}
      right={handleRightValues() as React.ReactFragment}
    />
  );
};

export default Input;

const styles = StyleSheet.create({});

Input.defaultProps = {
  error: false,
  password: false,
};
