import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from '@hooks/useCachedResources';
import useColorScheme from '@hooks/useColorScheme';
import store from '@store/store';
import { Stack } from 'expo-router';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Hide warnings

// LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end
const persistor = persistStore(store);
const Layout = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
          initialRouteName='Welcome'
        />
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

const ReduxWrapper = () => {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <SafeAreaProvider>
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
      
      <NativeBaseProvider>
        <Stack
          screenOptions={{
            headerShown: false,
            gestureEnabled: false,
          }}
          initialRouteName='Welcome'
        />
        <StatusBar />
      </NativeBaseProvider>
      </PersistGate>
    </Provider>
    </SafeAreaProvider>
  );
};

export default ReduxWrapper;
