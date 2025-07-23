/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {ThemeProvider} from './src/components/Theme/ThemeContext';

function App(): React.JSX.Element {
  return (
    <ThemeProvider>
      <SafeAreaProvider>
        <GestureHandlerRootView style={{flex: 1}}>
          <AppNavigator />
        </GestureHandlerRootView>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}

export default App;
