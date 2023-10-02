import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { PersistGate } from 'redux-persist/integration/react';

import useCachedResources from '@hooks/useCachedResources';
import useColorScheme from '@hooks/useColorScheme';
import Navigation from '@src/navigation';
import store from '@store/store';
import { NativeBaseProvider } from 'native-base';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';

// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Hide warnings

// LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end
const persistor = persistStore(store);
const App = () => {
  const isLoadingComplete = useCachedResources();
  const colorScheme = useColorScheme();

  if (!isLoadingComplete) {
    return null;
  }
  return (
    <SafeAreaProvider>
      <NativeBaseProvider>
        <Navigation colorScheme={colorScheme} />
        <StatusBar />
      </NativeBaseProvider>
    </SafeAreaProvider>
  );
};

const ReduxWrapper = () => {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  );
};

export default ReduxWrapper;
