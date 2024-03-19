import React, { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { Login, Onboarding } from '../Screens';

const { Navigator, Screen } = createStackNavigator();

const Routes = () => {
  useEffect(() => {
    setTimeout(() => {
      SplashScreen.hide();
    }, 2000);
  }, []);

  return (
    <NavigationContainer>
      <Navigator screenOptions={NavConfigs.screenOptions}>
        <Screen name={NavRoutes.Onboarding} component={Onboarding} />
      </Navigator>
    </NavigationContainer>
  );
};

export default Routes;
