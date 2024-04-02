import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'

// screens
import Home from './screens/Home';
import Loading from './screens/Loading'
import WriteCard from './screens/WriteCard';

// utils
import { color } from './utils/color';

Splashscreen.preventAutoHideAsync()

export default function App() {

  const [fontsLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-l': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-m': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-s': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-b': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  if (!fontsLoaded) {
    return <Loading />
  } else {
    Splashscreen.hideAsync();
  }

  return (
    <>
      <StatusBar style='dark' backgroundColor={color.background} />
      <WriteCard />
      {/* <Home /> */}
    </>
  );
}
