import { useEffect, useState } from 'react';
import { StatusBar } from 'expo-status-bar'
import { useFonts } from 'expo-font'
import * as Splashscreen from 'expo-splash-screen'
import * as FileSystem from 'expo-file-system'
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
import OnboardingScreen from './screens/Onboarding'
import PrivacyPolicy from './screens/PrivacyPolicy'
import ResetPassword from './screens/ResetPassword'
import Settings from './screens/Settings'
import SignIn from './screens/SignIn'
import SignUp from './screens/Signup'
import TermsCondition from './screens/TermsCondition'
import Theme from './screens/Theme';
import VerifyCode from './screens/VerifyCode'
import ViewCard from './screens/ViewCard'
import WriteCard from './screens/WriteCard'

// utils
import { color } from './utils/color'
import { ThemeContext } from './utils/theme'
import { ProfilePictureContext } from './utils/profilePicture';
import { UserContext } from './utils/user'
import { verticalScale } from './utils/metrics';
import { errorToast } from './utils/toasts';

const Stack = createNativeStackNavigator()

Splashscreen.preventAutoHideAsync()

export default function App() {

  const [theme, setTheme] = useState(null)
  const [user, setUser] = useState(null)
  const [profilePicture, setProfilePicture] = useState(null)
  const [isFirstTime, setIsFirstTime] = useState(false)

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
          setTheme('light')
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

  // check for user first time
  const checkFirstTime = async () => {
    try {
      const getFirstTime = await AsyncStorage.getItem('firstTime')
      if (getFirstTime) {
        if (getFirstTime !== 'false') {
          setIsFirstTime(true)
        } else {
          setIsFirstTime(false)
        }
      } else {
        await AsyncStorage.setItem('firstTime', 'true')
        setIsFirstTime(true)
      }

    } catch (error) {
      console.log('Error checking user first time', error)
      errorToast('An error occured. Please try again later')
      return
    }
  }

  // load user
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

    checkFirstTime()

  }, [])

  useEffect(() => {
    if (user) {
      AsyncStorage.setItem('user', JSON.stringify(user))
    } else {
      AsyncStorage.removeItem('user')
    }

    loadProfilePicture()
  }, [user])

  // load profile picture
  const loadProfilePicture = async () => {
    if (user && user.profilepicture !== 'default.jpg') {
      try {
        const getProfilPic = await AsyncStorage.getItem('profilePicture')

        if (getProfilPic) {
          setProfilePicture(getProfilPic)
        } else {
          const imageURL = `https://wecithelpdesk.tech/weccare/profilePictures/${user.profilepicture}`
          try {
            const fileName = imageURL.split('/').pop();

            // download the image
            const newPath = FileSystem.documentDirectory + fileName
            await FileSystem.downloadAsync(imageURL, newPath)

            console.log('Image downloaded:', newPath)

            await AsyncStorage.setItem('profilePicture', newPath)
              .then(async () => {
                await FileSystem.copyAsync({ from: localUri, to: newPath })
                  .then(async () => {
                    setProfilePicture(newPath)
                  })
                  .catch((err) => {
                    console.log('error copying picture', err)
                    errorToast("An error occured. Please try again later")
                    return
                  })
              })
              .catch((err) => {
                console.log('error saving name to async', err)
                errorToast("An error occured. Please try again later")
                return
              })

            setProfilePicture(localUri);
          }
          catch (error) {
            console.log('Error downloading image:', error);
            return
          };
        }

      } catch (error) {
        console.error('Error reading image:', error)
        errorToast("An error occured. Please try again later")
        return
      }
    }
  }

  if (!fontsLoaded) {
    return (
      <ThemeContext.Provider value={{ theme }}>
        <Loading />
      </ThemeContext.Provider>
    )
  } else {
    Splashscreen.hideAsync();
  }

  return (
    <>
      <UserContext.Provider value={{ user, setUser }}>
        <ProfilePictureContext.Provider value={{ profilePicture, setProfilePicture }}>
          <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            <StatusBar style={theme === 'light' ? 'dark' : 'light'} backgroundColor={theme === 'light' ? color.background : color.darkBackground} />
            <NavigationContainer>
              <Stack.Navigator initialRouteName={isFirstTime && !user ? 'onboarding' : 'signin'}>
                {user ?
                  <Stack.Group>
                    <Stack.Screen name='home' component={Home} options={{ headerShown: false, animation: 'slide_from_left' }} />
                    <Stack.Screen name='cards' component={Cards} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name='writeCard' component={WriteCard} options={{ headerShown: false, animation: 'slide_from_bottom' }} />
                    <Stack.Screen name='settings' component={Settings} options={{ headerShown: false, animation: 'slide_from_right' }} />
                    <Stack.Screen name='theme' component={Theme} options={{ headerShown: false, animation: 'slide_from_right' }} />
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
                    <Stack.Screen name='onboarding' component={OnboardingScreen} options={{ headerShown: false, animation: 'simple_push' }} />
                  </Stack.Group>
                }
              </Stack.Navigator>
            </NavigationContainer>
            <FlashMessage position='top' statusBarHeight={verticalScale(30)} floating={true} />
          </ThemeContext.Provider>
        </ProfilePictureContext.Provider>
      </UserContext.Provider>
    </>
  );
}
