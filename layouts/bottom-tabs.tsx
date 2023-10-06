import { BottomTabNavigationOptions, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { withLayoutContext } from "expo-router";
import { RootTabParamList } from 'types';
  
  
  const MainStack = createBottomTabNavigator<RootTabParamList>();
  
  export const BottomTabs = withLayoutContext<
  BottomTabNavigationOptions,
    typeof MainStack
  >(MainStack);
  