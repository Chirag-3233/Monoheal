import React, { useState, useEffect } from 'react';
import { View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';

import FontAwesome from 'react-native-vector-icons/FontAwesome';

import AsyncStorage from '@react-native-community/async-storage';
import OnboardingScreen from './src/screen/OnboardingScreen';
import LoginScreen from './src/screen/LoginScreen';
import { NavigationContainer } from '@react-navigation/native';
import colors from './src/helpers/colors';
import SignupScreen from './src/screen/SignupScreen'
import OtpScreen from './src/screen/OtpScreen';
import NameScreen from './src/screen/NameScreen';
import { createDrawerNavigator, } from "@react-navigation/drawer";
import HomeScreen from './src/screen/HomeScreen';
import MenuDrawer from './src/components/MenuDrawer';
import Garageservice from './src/screen/Garageservice';
import HomeService from './src/screen/HomeService';
import CategoryList from './src/screen/CategoryList';
import Cardetails from './src/screen/Cardetails';
import RadiusDetails from './src/screen/RadiusDetails';
import ServiceAll from './src/screen/ServiceAll';
import AddGarageService from './src/screen/AddGarageService';
import GarageProfile from './src/screen/GarageProfile';
import ModelScreen from './src/screen/ModelScreen';
import FuelTypeScreen from './src/screen/FuelTypeScreen';
import ServiceListScreen from './src/screen/ServiceListScreen';
import BikeDetails from './src/screen/BikeDetails';
import BikeModelScreen from './src/screen/BikeModelScreen';
import PaymentScreen from './src/screen/PaymentScreen';
import InsuranceScreen from './src/screen/InsuranceScreen';
import ReferEarnScreen from './src/screen/ReferEarnScreen';
import HelpSupportPage from './src/screen/HelpSupportPage';
import NotificationScreen from './src/screen/NotificationScreen';
const Stack = createStackNavigator();
const drawer = createDrawerNavigator();

const DrawerScreens = () => {

  return (
    <drawer.Navigator
      drawerType="front"
      initialRouteName="Home"
      drawerContent={(props) => <MenuDrawer {...props} />}
    >
      <drawer.Screen name={'Home'}
        component={HomeScreen}
      //         options={({ navigation }) => ({
      //           drawerLabel: 'Dashboard',
      //           title: 'Home',
      //           activeTintColor: colors.primary,
      //           headerShown: false,
      //           headerStyle: { backgroundColor: colors.primary_dark, },
      //           headerTintColor: 'white',
      // 
      //         })}
      />
    </drawer.Navigator>
  )
}
const App = () => {
  const [isFirstLaunch, setIsFirstLaunch] = useState(null);
  let routeName;

  useEffect(() => {
    AsyncStorage.getItem('alreadyLaunched').then((value) => {
      if (value == null) {
        AsyncStorage.setItem('alreadyLaunched', 'true'); // No need to wait for `setItem` to finish, although you might want to handle errors
        setIsFirstLaunch(true);
      } else {
        setIsFirstLaunch(false);
      }
    }); // Add some error handling, also you can simply do setIsFirstLaunch(null)

  }, []);

  if (isFirstLaunch === null) {
    return null; // This is the 'tricky' part: The query to AsyncStorage is not finished, but we have to present something to the user. Null will just render nothing, so you can also put a placeholder of some sort, but effectively the interval between the first mount and AsyncStorage retrieving your data won't be noticeable to the user. But if you want to display anything then you can use a LOADER here
  } else if (isFirstLaunch == true) {
    routeName = 'Onboarding';
  } else {
    routeName = 'Login';
  }

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName={'NotificationScreen'}>
        <Stack.Screen
          name={'Onboarding'}
          component={OnboardingScreen}
          options={{ header: () => null }}

        />
        <Stack.Screen
          name={'NotificationScreen'}
          component={NotificationScreen}
          options={{ header: () => null }}

        />
        <Stack.Screen
          name="Login"
          component={LoginScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="OTPScreen"
          component={OtpScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen
          name="NameScreen"
          component={NameScreen}
          options={{ header: () => null }}
        />
        <Stack.Screen name={'Home'}
          component={DrawerScreens}
          options={{ headerShown: false }}
        />
        <Stack.Screen name={'HomeScreen'}
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Signup"
          component={SignupScreen}
          options={({ navigation }) => ({
            title: '',
            headerStyle: {
              backgroundColor: '#f9fafd',
              shadowColor: '#f9fafd',
              elevation: 0,
            },
            headerLeft: () => (
              <View style={{ marginLeft: 10 }}>
                <FontAwesome.Button
                  name="long-arrow-left"
                  size={25}
                  backgroundColor="#f9fafd"
                  color="#333"
                  onPress={() => navigation.navigate('Login')}
                />
              </View>
            ),
          })}
        />
        <Stack.Screen
          name="AddGarageService"
          component={AddGarageService}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Garage services ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="Servicelist"
          component={ServiceListScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Services List ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="GarageProfile"
          component={GarageProfile}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Garage Profile ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="CategoryList"
          component={CategoryList}
          options={{ headerShown: true, }}
        />
        <Stack.Screen
          name="Garage"
          component={Garageservice}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Company Details ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />

        <Stack.Screen
          name="Bikedetail"
          component={BikeDetails}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Company Details ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="BikeModel"
          component={BikeModelScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Model Details ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />

        <Stack.Screen
          name="ModelScreen"
          component={ModelScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Model Details ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="FuelTypeScreen"
          component={FuelTypeScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Company Details ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="HomeService"
          component={HomeService}
          options={{ headerShown: true, }}
        />
        <Stack.Screen
          name="Cardetails"
          component={Cardetails}
          options={{ headerShown: true, }}
        />
        <Stack.Screen
          name="RadiusDetails"
          component={RadiusDetails}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Near by Garages Find ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="ServiceAll"
          component={ServiceAll}
          options={{ headerShown: true, }}
        />
        <Stack.Screen
          name="Payment"
          component={PaymentScreen}
          options={{
            headerShown: true,
            headerStyle: { backgroundColor: '#ffcc00' },
            headerTitle: 'Payment Method ',
            headerTintColor: 'white',
            headerBackTitle: 'Back'
          }}
        />
        <Stack.Screen
          name="Insurance"
          component={InsuranceScreen}
          options={{ headerShown: true, }}
        />
        <Stack.Screen
          name="ReferEarn"
          component={ReferEarnScreen}
          options={{ headerShown: true, }}
        />
        <Stack.Screen
          name="HelpSupport"
          component={HelpSupportPage}
          options={{ headerShown: true, }}
        />
      </Stack.Navigator>
    </NavigationContainer>

  );
};

export default App;