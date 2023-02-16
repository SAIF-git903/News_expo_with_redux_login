import 'react-native-gesture-handler';
import * as React from 'react';
import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store, persistor } from './redux/store';
import { PersistGate } from 'redux-persist/integration/react';
import { useSelector } from 'react-redux';
import { AntDesign } from '@expo/vector-icons';
import { useFonts } from 'expo-font';
import HomeScreen from './Screens/HomeScreen';
import SearchScreen from './Screens/SearchScreen';
import ContactScreen from './Screens/ContactScreen';
import SplashScreen from './Screens/SplashScreen';
import Login from './Screens/Login';
import SignUp from './Screens/SignUp';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const AuthStack = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackVisible: false,
        headerShown: false,
      }}>
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};
 

const MyStack = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        tabBarShowLabel: false,
        tabBarActiveBackgroundColor: 'lightblue',
        headerTitleAlign: 'center',
        headerTitleStyle: {
          fontSize: 30,
          fontFamily: 'instaReg',
          fontWeight: '200',
        },
        tabBarActiveTintColor: 'black',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: () => <AntDesign name="home" size={25} />,
        }}
      />
      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: () => <AntDesign name="search1" size={25} />,
        }}
      />
      <Tab.Screen
        name="Contact"
        component={ContactScreen}
        options={{
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: 'bold',
          },
          tabBarIcon: () => <AntDesign name="user" size={25} />,
        }}
      />
    </Tab.Navigator>
  );
};

const RootNavigation = () => {
  const token = useSelector(state => state.token);

  return (
    <NavigationContainer>
      {token === null ? <AuthStack /> : <MyStack />}
    </NavigationContainer>
  );
};

export default function App() {
  const [splash, setSplash] = useState(true);

  let [fontsLoaded] = useFonts({
    instaBold: require('./assets/fonts/instaBold.otf'),
    instaReg: require('./assets/fonts/instaReg.otf'),
  });

  let randomSplash = Math.floor(Math.random() * 4000);

  setTimeout(() => {
    setSplash(false);
  }, randomSplash);

  if (!fontsLoaded) {
    return false;
  } else {
    return splash ? (
      <SplashScreen />
    ) : (
      <Provider store={store}>
        <PersistGate persistor={persistor}>
          <RootNavigation />
        </PersistGate>
      </Provider>
    );
  }
}
