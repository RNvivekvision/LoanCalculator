import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import {
  LanguageSelection,
  Onboarding,
  TermsAndCondition,
  Welcome,
} from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={NavConfigs.screenOptions}>
        <Stack.Screen name={NavRoutes.Onboarding} component={Onboarding} />
        <Stack.Screen
          name={NavRoutes.TermsAndCondition}
          component={TermsAndCondition}
        />
        <Stack.Screen
          name={NavRoutes.LanguageSelection}
          component={LanguageSelection}
        />

        <Stack.Screen name={NavRoutes.Welcome} component={Welcome} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Routes;
