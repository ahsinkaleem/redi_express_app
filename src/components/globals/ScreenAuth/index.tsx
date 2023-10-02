/* eslint-disable react/jsx-props-no-spreading */
import AppBar from '@src/components/user/AppBar';
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
}

const ScreenAuth = (props: Props) => {
  const { scroll, className, children, ...rest } = props;

  if (scroll)
    return (
      <SafeAreaView edges={['top']}>
        <ScrollView>
          <ViewDef {...rest}>{children}</ViewDef>
        </ScrollView>
      </SafeAreaView>
    );

  return (
    <SafeAreaView edges={['top']} className={className}>
      <AppBar />
      {children}
    </SafeAreaView>
  );
};

ScreenAuth.defaultProps = {
  scroll: false,
};

export default ScreenAuth;

const styles = StyleSheet.create({});
