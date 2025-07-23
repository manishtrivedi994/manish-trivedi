import React, {useState} from 'react';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import AppNavigator from './src/navigation/AppNavigator';
import {ThemeProvider} from './src/components/Theme/ThemeContext';
import SplashScreen from './src/components/Splash/SplashScreen';

function App(): React.JSX.Element {
  const [isSplashVisible, setIsSplashVisible] = useState(true);

  const handleSplashFinish = () => {
    setIsSplashVisible(false);
  };

  if (isSplashVisible) {
    return <SplashScreen onFinish={handleSplashFinish} />;
  }

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
