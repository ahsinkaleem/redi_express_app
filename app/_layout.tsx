import store from '@store/store';
import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import { NativeBaseProvider } from 'native-base';
import 'react-native-gesture-handler';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Provider } from 'react-redux';
import { persistStore } from 'redux-persist';
import { PersistGate } from 'redux-persist/integration/react';
// import { LogBox } from 'react-native';

// LogBox.ignoreLogs(['Warning: ...']); // Hide warnings

// LogBox.ignoreAllLogs(); // Hide all warning notifications on front-end
const persistor = persistStore(store);
// const Layout = () => {
//   const isLoadingComplete = useCachedResources();
//   const colorScheme = useColorScheme();

//   if (!isLoadingComplete) {
//     return null;
//   }
//   return (
//     <SafeAreaProvider>
//       <NativeBaseProvider>
//         <Stack
//           screenOptions={{
//             headerShown: false,
//             gestureEnabled: false,
//           }}
//           initialRouteName="welcome"
//         />
//         <StatusBar />
//       </NativeBaseProvider>
//     </SafeAreaProvider>
//   );
// };

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
            />
            <StatusBar />
          </NativeBaseProvider>
        </PersistGate>
      </Provider>
    </SafeAreaProvider>
  );
};

export default ReduxWrapper;
