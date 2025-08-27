// App.js
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { useFonts } from 'expo-font';
import { View, Text } from 'react-native';
import SplashScreen from './screens/SplashScreen';
import Onboarding from './screens/Onboarding';
import Auth from './screens/Auth';
import Register from './screens/Register'; 
import NewAccount from './screens/NewAccount';
import Dashboard from './screens/Dashboard';
import Transactions from './screens/account/Transactions'
import Receipt from './screens/account/Receipt';
import Airtime from './screens/account/Airtime';
import Successful from './screens/account/Successful'
import Data from './screens/account/Data' 
import Bills from './screens/account/Bills';
import Profile from './screens/Profile';
import Notifications from './screens/Notifications';
import SendMoney from './screens/account/SendMoney';
import Success from './screens/account/Succcess';
const Stack = createStackNavigator();

export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    'CalSans-Regular': require('./assets/fonts/CalSans-Regular.ttf'),
    'Varela-Regular': require('./assets/fonts/Varela-Regular.ttf'),
  });

  const [showSplash, setShowSplash] = React.useState(true);

  React.useEffect(() => {
    if (fontsLoaded || fontError) {
      // Show splash for 3 seconds after fonts load or error
      const timer = setTimeout(() => {
        setShowSplash(false);
      }, 4000);
      return () => clearTimeout(timer); // Cleanup timer
    }
  }, [fontsLoaded, fontError]);

  React.useEffect(() => {
    if (fontError) {
      console.error('Font loading error:', fontError);
    }
   
  }, [fontsLoaded, fontError]);

  if (showSplash || (!fontsLoaded && !fontError)) {
    return <SplashScreen />;
  }


  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Onboarding">
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Auth"
          component={Auth}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Register"
          component={Register}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="NewAccount"
          component={NewAccount}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Dashboard"
          component={Dashboard}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Transactions"
          component={Transactions}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Receipt"
          component={Receipt}
          
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Airtime"
          component={Airtime}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Successful"
          component={Successful}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Data"
          component={Data}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Bills"
          component={Bills}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Profile"
          component={Profile}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Notifications"
          component={Notifications}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="SendMoney"
          component={SendMoney}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Success"
          component={Success}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}