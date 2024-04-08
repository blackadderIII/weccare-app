import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'
import AsyncStorage from '@react-native-async-storage/async-storage'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import FlashMessage from 'react-native-flash-message'

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
import { UserContext } from './utils/user'
import { verticalScale } from './utils/metrics';

const Stack = createNativeStackNavigator()

Splashscreen.preventAutoHideAsync()

export default function App() {

  const [theme, setTheme] = useState(null)
  const [user, setUser] = useState(null)

  const [fontsLoaded] = useFonts({
    'poppins': require('./assets/fonts/Poppins-Regular.ttf'),
    'poppins-l': require('./assets/fonts/Poppins-Light.ttf'),
    'poppins-m': require('./assets/fonts/Poppins-Medium.ttf'),
    'poppins-s': require('./assets/fonts/Poppins-SemiBold.ttf'),
    'poppins-b': require('./assets/fonts/Poppins-Bold.ttf'),
  })

  // load theme
  useEffect(() => {
    const loadTheme = async () => {
      try {
        const storedTheme = await AsyncStorage.getItem('theme')
        if (storedTheme) {
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
  }, [theme])

  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  useEffect(() => {
    const loadUser = async () => {
      try {
        const storedUser = await AsyncStorage.getItem('user')
        if (storedUser) {
          setUser(JSON.parse(storedUser))
        } else {
          setUser(null)
        }
      }
      catch (error) {
        console.log("Error loading user", error)
      }
    }

    loadUser()

  }, [])

  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user))
    }
  }, [user])

  console.log(user)

  if (!fontsLoaded) {
    return <Loading />
  } else {
    Splashscreen.hideAsync();
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <ThemeContext.Provider value={{ theme, toggleTheme }}>
          <StatusBar style={theme === 'light' ? 'dark' : 'light'} backgroundColor={theme === 'light' ? color.background : color.darkBackground} />
          <NavigationContainer>
            <Stack.Navigator>
              {user ?
                <Stack.Group>
                  <Stack.Screen name='home' component={Home} options={{ headerShown: false, animation: 'fade' }} />
                  <Stack.Screen name='cards' component={Cards} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='writeCard' component={WriteCard} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
                  <Stack.Screen name='settings' component={Settings} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='terms' component={TermsCondition} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='privacy' component={PrivacyPolicy} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='about' component={About} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='changePass' component={ChangePassword} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='editProfile' component={EditProfile} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='viewCard' component={ViewCard} options={{ headerShown: false, animation: 'slide_from_right' }} />
                </Stack.Group>
                :
                <Stack.Group>
                  <Stack.Screen name='signin' component={SignIn} options={{ headerShown: false, animation: 'simple_push' }} />
                  <Stack.Screen name='signup' component={SignUp} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='forgotPassword' component={Forgot} options={{ headerShown: false, animation: 'fade_from_bottom' }} />
                  <Stack.Screen name='verifyCode' component={VerifyCode} options={{ headerShown: false, animation: 'slide_from_right' }} />
                  <Stack.Screen name='resetPassword' component={ResetPassword} options={{ headerShown: false, animation: 'slide_from_right' }} />
                </Stack.Group>
              }
            </Stack.Navigator>
          </NavigationContainer>
          <FlashMessage position='top' statusBarHeight={verticalScale(30)} floating={true} />
        </ThemeContext.Provider>
      </UserContext.Provider>
    </>
  );
}
