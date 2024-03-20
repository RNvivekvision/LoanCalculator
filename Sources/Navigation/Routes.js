import React, { useCallback, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import Drawer from './Drawer';
import { useLocalStorage } from '../Hooks';
import {
  CompareLoans,
  EMI,
  EquityLinkedScheme,
  LanguageSelection,
  LoanEligibility,
  Lumpsum,
  Onboarding,
  SIP,
  SWP,
  TaxCalculation,
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
        <Stack.Screen name={NavRoutes.EMI} component={EMI} />
        <Stack.Screen
          name={NavRoutes.LoanEligibility}
          component={LoanEligibility}
        />
        <Stack.Screen name={NavRoutes.CompareLoans} component={CompareLoans} />
        <Stack.Screen
          name={NavRoutes.TaxCalculation}
          component={TaxCalculation}
        />
        <Stack.Screen name={NavRoutes.SWP} component={SWP} />
        <Stack.Screen name={NavRoutes.SIP} component={SIP} />
        <Stack.Screen
          name={NavRoutes.EquityLinkedScheme}
          component={EquityLinkedScheme}
        />
        <Stack.Screen name={NavRoutes.Lumpsum} component={Lumpsum} />
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
