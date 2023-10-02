/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {
  ScrollView,
  StyleSheet,
  View as ViewDef,
  ViewProps,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props extends ViewProps {
  scroll?: boolean;
  topColor?: string;
  bottomColor?: string;
}

const Screen = (props: Props) => {
  const { style, topColor, bottomColor, scroll, className, children, ...rest } =
    props;

  if (scroll)
    return (
      <SafeAreaView edges={['top', 'bottom']} style={{ flex: 1 }}>
        <ScrollView>
          <ViewDef {...rest}>{children}</ViewDef>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <>
      <SafeAreaView
        edges={['top']}
        style={{
          backgroundColor: topColor,
        }}
      />
      <SafeAreaView
        edges={['bottom']}
        style={{ flex: 1, backgroundColor: bottomColor }}
      >
        <ViewDef
          {...rest}
          style={{ flex: 1, ...(style as object) }}
          className={className}
        >
          {children}
        </ViewDef>
      </SafeAreaView>
    </>
  );
};

Screen.defaultProps = {
  scroll: false,
  topColor: '#000',
  bottomColor: '#000',
};

export default Screen;

const styles = StyleSheet.create({});
