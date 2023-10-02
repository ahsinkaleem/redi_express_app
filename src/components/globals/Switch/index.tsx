/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable react/forbid-prop-types */
import Colors from '@src/constants/Colors';
import { getRespValue } from '@utils/design/design';
import PropTypes from 'prop-types';
import * as React from 'react';
import {
  Animated,
  Easing,
  GestureResponderEvent,
  StyleSheet,
  SwitchProps,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

interface Props extends SwitchProps {
  onColor?: string;
  offColor?: string;
  label?: string;
  labelStyle?: object;
  isOn?: boolean;
  onToggle?: ((event: GestureResponderEvent) => void) | undefined;
}

const Toggle = (props: Props) => {
  const animatedValue = new Animated.Value(0);

  const moveToggle = animatedValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 16],
  });

  const { isOn, onColor, offColor, style, onToggle, labelStyle, label } = props;

  // const color = isOn ? onColor : offColor;

  animatedValue.setValue(isOn ? 0 : 1);

  Animated.timing(animatedValue, {
    toValue: isOn ? 1 : 0,
    duration: 300,
    easing: Easing.linear,
    useNativeDriver: false,
  }).start();

  return React.useMemo(
    () => (
      <View
        style={styles.container}
        className="px-4 justify-start flex-row items-center"
      >
        <TouchableOpacity
          onPress={typeof onToggle === 'function' ? onToggle : undefined}
        >
          <View
            style={[
              styles.toggleContainer,
              style,
              { backgroundColor: 'black' },
            ]}
          >
            <Animated.View
              style={[
                styles.toggleWheelStyle,
                {
                  marginLeft: moveToggle,
                },
              ]}
            />
          </View>
        </TouchableOpacity>

        {!!label && (
          <Text
            style={[styles.label, labelStyle]}
            className="font-aeonik text-black ml-5"
          >
            {label}
          </Text>
        )}
      </View>
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [isOn],
  );
};

Toggle.propTypes = {
  onColor: PropTypes.string,
  offColor: PropTypes.string,
  label: PropTypes.string,
  onToggle: PropTypes.func,
  style: PropTypes.object,
  labelStyle: PropTypes.object,
};

Toggle.defaultProps = {
  onColor: '#4cd137',
  offColor: '#ecf0f1',
  label: '',
  onToggle: () => {},
  style: {},
  isOn: false,
  labelStyle: {},
};

export default Toggle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    height: getRespValue(70),
  },
  toggleContainer: {
    width: 45,
    height: 30,
    paddingLeft: 2,
    borderRadius: 15,
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  label: {
    marginRight: 2,
    fontSize: getRespValue(20),
  },
  toggleWheelStyle: {
    width: 25,
    height: 25,
    backgroundColor: Colors.light.theme.darkYellow,
    borderRadius: 12.5,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});
