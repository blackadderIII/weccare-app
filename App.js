import { StatusBar } from 'expo-status-bar';
import { useFonts } from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'

// screens
import About from './screens/About';
import Cards from './screens/Cards';
import ChangePassword from './screens/ChangePassword';
import EditProfile from './screens/EditProfile';
import Forgot from './screens/Forgot';
import Home from './screens/Home';
import Loading from './screens/Loading'
import PrivacyPolicy from './screens/PrivacyPolicy';
import ResetPassword from './screens/ResetPassword';
import Settings from './screens/Settings';
import SignIn from './screens/SignIn';
import SignUp from './screens/Signup';
import TermsCondition from './screens/TermsCondition';
import VerifyCode from './screens/VerifyCode';
import ViewCard from './screens/ViewCard';
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
      {/* <ResetPassword /> */}
      {/* <VerifyCode /> */}
      {/* <Forgot /> */}
      {/* <SignUp /> */}
      {/* <SignIn /> */}
      {/* <Cards /> */}
      {/* <ViewCard /> */}
      {/* <EditProfile /> */}
      <ChangePassword />
      {/* <About /> */}
      {/* <PrivacyPolicy /> */}
      {/* <TermsCondition /> */}
      {/* <Settings /> */}
      {/* <WriteCard /> */}
      {/* <Home /> */}
    </>
  );
}
