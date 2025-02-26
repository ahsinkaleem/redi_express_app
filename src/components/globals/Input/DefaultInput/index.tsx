/* eslint-disable @typescript-eslint/no-unused-vars */
import { Text } from '@src/components/libraries';
import { hs, ms, vs } from '@utils/design/design';
import Colors from 'assets/CustomeColors/colors';
import { AnimatePresence, MotiView } from 'moti';
import React, { useState } from 'react';
import { TextInput } from 'react-native';
import { TextInput as TextInputPaper } from 'react-native-paper';
import { DefaultTextInputProps } from '../type';

const DefaultInput = React.forwardRef<TextInput, DefaultTextInputProps>(
  (props, ref) => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);
    // const [checked] = React.useState(true);

    const {
      className,
      style,
      contentStyle,
      value,
      password,
      errorText,
      last,
      backgroundColor,
      borderTopColor,
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      borderBottomColor,
      borderBottomHeight,
      lineHeight,
      roundedRadius,
      ...others
    } = props;
    const togglePasswordVisibility = () => {
      setIsPasswordVisible(!isPasswordVisible);
    };
    return (
      <>
        <TextInputPaper
          {...others}
          ref={ref}
          autoCorrect={false}
          value={value}
          underlineStyle={{
            backgroundColor: 'transparent',
          }}
          contentStyle={{
            paddingLeft: hs(16),
            fontFamily: 'poppins',
            fontSize: ms(14),
            ...(contentStyle as object),
          }}
          style={{
            backgroundColor: errorText
              ? backgroundColor
              : backgroundColor || 'white',

            height: vs(30),
            lineHeight,
            borderRadius: ms(10),
            borderColor: Colors.customeGray,
            paddingVertical: vs(10),
            borderWidth: ms(1),
            ...(style as object),
          }}
          secureTextEntry={password ? !isPasswordVisible : false}
          right={
            password && (
              <TextInputPaper.Icon
                icon={!isPasswordVisible ? 'eye-off' : 'eye'}
                size={20}
                forceTextInputFocus={false}
                onPress={() => {
                  togglePasswordVisibility();
                }}
              />
            )
          }
        />
        <AnimatePresence>
          {errorText && (
            <MotiView
              key={errorText}
              from={{
                height: 0,
                marginTop: 0,
              }}
              animate={{
                height: 20,
                marginTop: vs(8),
              }}
              exit={{
                height: 0,
                marginTop: 0,
              }}
              //   transition={{
              //     type: 'timing',
              //   }}
              style={{
                width: '100%',
                justifyContent: 'flex-start',
                alignItems: 'flex-start',
                paddingLeft: hs(8),
                paddingRight: hs(8),
              }}
            >
              <Text
                style={{
                  fontSize: 14,
                  color: '#FC5555',
                }}
              >
                {errorText}
              </Text>
            </MotiView>
          )}
        </AnimatePresence>
      </>
    );
  },
);

DefaultInput.defaultProps = {
  password: false,
  errorText: '',
  last: false,
  backgroundColor: '',
  borderTopColor: '',
  borderBottomColor: 'transparent',
  borderBottomHeight: 0,
  lineHeight: 23,
  type: 'default',
  roundedRadius: 'xl',
};

export default DefaultInput;
