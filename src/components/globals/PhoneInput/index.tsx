/* eslint-disable react/jsx-props-no-spreading */
import { getRespValue } from '@utils/design/design';
import React, { useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';

import CountryPicker, {
  CountryCode,
  DARK_THEME,
} from 'react-native-country-picker-modal';
import PhoneInputDef, {
  ReactNativePhoneInputProps,
} from 'react-native-phone-input';

interface Props extends ReactNativePhoneInputProps {
  style?: object;
  placeholder?: string;
  theme?: typeof DARK_THEME;
}

const PhoneInput = (props: Props) => {
  const {
    textStyle,
    placeholder,
    textProps,
    flagStyle,
    initialCountry,
    style,
    theme,
    ...rest
  } = props;

  const [cca2, setCca2] = useState('CO');
  const phoneRef = useRef<PhoneInputDef>(null);
  const [showCountryPicker, setShowCountryPicker] = useState(false);

  const onPressFlag = () => {
    setShowCountryPicker(true);
  };

  const selectCountry = (country: { cca2: string }) => {
    phoneRef.current?.selectCountry(country.cca2.toLowerCase());
    setCca2(country.cca2);
    setShowCountryPicker(false);
  };

  return (
    <View>
      <PhoneInputDef
        {...rest}
        ref={phoneRef}
        flagStyle={{
          width: getRespValue(40),
          height: getRespValue(25),
          ...flagStyle,
        }}
        onPressFlag={onPressFlag}
        initialCountry={initialCountry || 'co'}
        textProps={{
          placeholder,
          ...textProps,
        }}
        style={{
          width: '100%',
          height: getRespValue(70),
          backgroundColor: '#FDEEA4',
          borderBottomColor: '#fff',
          borderBottomWidth: getRespValue(2),
          paddingHorizontal: getRespValue(20),
          ...(style as object),
        }}
        textStyle={{
          fontSize: getRespValue(20),
          fontFamily: 'aeonik',
          ...(textStyle as object),
        }}
      />
      <CountryPicker
        theme={DARK_THEME || theme}
        onSelect={selectCountry}
        countryCode={cca2 as CountryCode}
        visible={showCountryPicker}
        withFilter
        withCallingCode
        withAlphaFilter
        containerButtonStyle={{
          display: 'none',
        }}
      />
    </View>
  );
};

PhoneInput.defaultProps = {
  style: {},
  placeholder: '',
  theme: DARK_THEME,
};

const styles = StyleSheet.create({});

export default PhoneInput;
