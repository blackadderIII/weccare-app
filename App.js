import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'

// screens
import About from './screens/About'
import Cards from './screens/Cards'
import ChangePassword from './screens/ChangePassword'
import EditProfile from './screens/EditProfile'
import Forgot from './screens/Forgot'
import Home from './screens/Home'
import Loading from './screens/Loading'
import PrivacyPolicy from './screens/PrivacyPolicy'
import ResetPassword from './screens/ResetPassword'
import Settings from './screens/Settings'
import SignIn from './screens/SignIn'
import SignUp from './screens/Signup'
import TermsCondition from './screens/TermsCondition'
import VerifyCode from './screens/VerifyCode'
import ViewCard from './screens/ViewCard'
import WriteCard from './screens/WriteCard'

// utils
import { color } from './utils/color'
import { ThemeContext } from './utils/theme'

Splashscreen.preventAutoHideAsync()

export default function App() {


  const [theme, setTheme] = useState(null)

  const [fontsLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-l': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-m': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-s': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-b': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme')
        if (storedTheme !== null) {
          setTheme(JSON.parse(storedTheme))
        } else {
          setTheme('dark')
        }
      }
      catch (error) {
        console.log('Error loading theme from asyncstorgae', error)
      }
    }

    loadTheme();

  }, [])

  useEffect(() => {
    if (theme !== null) {
      AsyncStorage.setItem('theme', JSON.stringify(theme))
    }

    console.log(theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  if (!fontsLoaded) {
    return <Loading />
  } else {
    Splashscreen.hideAsync();
  }

  return (
    <>
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <StatusBar style={theme === 'light' ? 'dark' : 'light'} backgroundColor={theme === 'light' ? color.background : color.darkBackground} />
        <ResetPassword />
        {/* <VerifyCode /> */}
        {/* <Forgot /> */}
        {/* <SignUp /> */}
        {/* <SignIn /> */}
        {/* <Cards /> */}
        {/* <ViewCard /> */}
        {/* <EditProfile /> */}
        {/* <ChangePassword /> */}
        {/* <About /> */}
        {/* <PrivacyPolicy /> */}
        {/* <TermsCondition /> */}
        {/* <Settings /> */}
        {/* <WriteCard /> */}
        {/* <Home /> */}
      </ThemeContext.Provider>
    </>
  );
}
