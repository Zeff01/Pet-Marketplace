import { useState, useEffect } from 'react';
import { Provider } from 'react-redux';
import * as SplashScreen from 'expo-splash-screen';
import Navigator from '@navigator';
import store from '@utils/store';
import { loadImages, loadFonts } from '@theme';
import 'react-native-gesture-handler';
import { PostFeedProvider } from './src/providers/PostFeedsProvider';
import { ThemeProvider } from './src/providers/ThemeProvider';

// keep the splash screen visible while we fetch resources
SplashScreen.preventAutoHideAsync();

export default function App() {
  const [isReady, setReady] = useState<boolean>(false);

  // assets preloading
  const preloadAssets = async () => {
    try {
      await Promise.all([loadImages(), loadFonts()]);
    } finally {
      setReady(true);
      SplashScreen.hideAsync();
    }
  };

  useEffect(() => {
    preloadAssets();
  }, []);

  if (!isReady) return null;
  return (
    <PostFeedProvider>
      <Provider store={store}>
        <ThemeProvider>
          <Navigator />
        </ThemeProvider>
      </Provider>
    </PostFeedProvider>
  );
}
