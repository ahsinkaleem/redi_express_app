// eslint-disable-next-line import/extensions
import SpaceMonoFont from '@assets/fonts/SpaceMono-Regular.ttf';
import store from '@store/store';
import { useFonts } from 'expo-font';
import { Slot, SplashScreen } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { useEffect } from 'react';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';

const persistor = persistStore(store);

const ReduxWrapper = () => {
  // const Layout = Component.layout || (({ children }) => <>{children}</>);
  return (
    <SafeAreaProvider>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <Slot />
          <StatusBar />
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

const RootLayout = () => {
  const [loaded, error] = useFonts({
    SpaceMono: SpaceMonoFont,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <ReduxWrapper />;
};

export default RootLayout;
