/* eslint-disable react/jsx-props-no-spreading */
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import { Checkbox as CheckboxDef, ICheckboxProps } from 'native-base';
import React from 'react';
import { Text, View } from 'react-native';

interface MyCheckboxProps extends ICheckboxProps {
  label?: any;
  size?: 'sm' | 'md' | 'lg';
}
const Checkbox = (props: MyCheckboxProps) => {
  const { className, value, size, label, ...others } = props;

  return (
    <View
      style={{
        height: getRespValue(70),
      }}
      className={`flex-row justify-center items-center px-4 ${className}`}
    >
      <CheckboxDef
        {...others}
        style={{
          borderColor: '#000',
          borderWidth: 1,
          backgroundColor:
            value === 'on' ? '#000' : Colors.light.theme.darkYellow,
        }}
        value={value}
        color="#fff"
        size={size}
      />
      <Text
        style={{
          fontSize: getRespValue(14),
        }}
        className="ml-4 font-aeonik  text-black"
      >
        {label}
      </Text>
    </View>
  );
};

export default Checkbox;
Checkbox.defaultProps = {
  label: '',
  size: 'md',
};
