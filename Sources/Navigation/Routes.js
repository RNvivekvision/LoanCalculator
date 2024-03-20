import React, { useCallback, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import Drawer from './Drawer';
import { useLocalStorage } from '../Hooks';
import {
  LanguageSelection,
  Onboarding,
  TermsAndCondition,
  Welcome,
} from '../Screens';

const Stack = createStackNavigator();

const Routes = () => {
  const { localdata } = useLocalStorage();

  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  const Screens = useCallback(() => {
    return (
      <Stack.Navigator
        screenOptions={NavConfigs.screenOptions}
        initialRouteName={
          localdata?.hasUser ? NavRoutes.Welcome : NavRoutes.Onboarding
        }>
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
        <Stack.Screen name={NavRoutes.Home} component={Drawer} />
      </Stack.Navigator>
    );
  }, [localdata?.hasUser]);

  return (
    <NavigationContainer>
      <Screens />
    </NavigationContainer>
  );
};

export default Routes;
