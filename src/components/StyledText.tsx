import React from 'react';
import { Text, TextProps } from './Themed';

// eslint-disable-next-line import/prefer-default-export
export const MonoText = (props: TextProps) => {
  const { style, ...otherProps } = props;
  return (
    // eslint-disable-next-line react/jsx-props-no-spreading
    <Text {...otherProps} style={[style, { fontFamily: 'space-mono' }]} />
  );
};
