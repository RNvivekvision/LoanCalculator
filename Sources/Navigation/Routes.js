import React, { useCallback, useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { useLocalStorage } from '../Hooks';
import { Strings } from '../Constants';
import Drawer from './Drawer';
import {
  ATMFinder,
  BankFinder,
  CompareLoans,
  CurrencyConversion,
  DiscountCalculator,
  EMI,
  EquityLinkedScheme,
  FAQ,
  FixedDeposit,
  LanguageSelection,
  LoanEligibility,
  Lumpsum,
  MarginCalculator,
  MarginWithSales,
  MarkupCalculator,
  Onboarding,
  OperatingMargin,
  PriceCalculator,
  PublicProvidentFund,
  RecurringDeposit,
  SIP,
  SWP,
  SimpleAndCompound,
  TaxCalculation,
  TermsAndCondition,
  Theory,
  Welcome,
} from '../Screens';
import { useDispatch } from 'react-redux';
import { getAdData } from '../Redux/ExtraReducers';
import { AdSettings } from 'react-native-fbads';

const Stack = createStackNavigator();

const Routes = () => {
  const { localdata } = useLocalStorage();
  const dispatch = useDispatch();

  useEffect(() => {
    localdata?.lang && Strings.setLanguage(localdata?.lang);
  }, [localdata?.lang]);

  useEffect(() => {
    dispatch(getAdData());
    setTimeout(() => {
      SplashScreen.hide();
    }, 1000);
  }, []);

  useEffect(() => {
    Init();
    return () => AdSettings.clearTestDevices();
  }, []);

  const Init = async () => {
    try {
      // console.log('currentDeviceHash -> ', AdSettings.currentDeviceHash);
      AdSettings.setLogLevel('debug');
      AdSettings.addTestDevice(AdSettings.currentDeviceHash);
      const requestedStatus = await AdSettings.requestTrackingPermission();
      // console.log('requestedStatus -> ', requestedStatus);
      if (
        requestedStatus === 'authorized' ||
        requestedStatus === 'unavailable'
      ) {
        AdSettings.setAdvertiserIDCollectionEnabled(true);
        // Both calls are not related to each other
        // FB won't deliver any ads if this is set to false or not called at all.
        AdSettings.setAdvertiserTrackingEnabled(true);
      }
    } catch (e) {
      console.log('Error Init facebook -> ', e);
    }
  };

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
        <Stack.Screen name={NavRoutes.FixedDeposit} component={FixedDeposit} />
        <Stack.Screen
          name={NavRoutes.RecurringDeposit}
          component={RecurringDeposit}
        />
        <Stack.Screen
          name={NavRoutes.PublicProvidentFund}
          component={PublicProvidentFund}
        />
        <Stack.Screen
          name={NavRoutes.SimpleAndCompound}
          component={SimpleAndCompound}
        />
        <Stack.Screen
          name={NavRoutes.CurrencyConversion}
          component={CurrencyConversion}
        />
        <Stack.Screen
          name={NavRoutes.DiscountCalculator}
          component={DiscountCalculator}
        />
        <Stack.Screen
          name={NavRoutes.PriceCalculator}
          component={PriceCalculator}
        />
        <Stack.Screen
          name={NavRoutes.MarginCalculator}
          component={MarginCalculator}
        />
        <Stack.Screen
          name={NavRoutes.MarkupCalculator}
          component={MarkupCalculator}
        />
        <Stack.Screen
          name={NavRoutes.OperatingMargin}
          component={OperatingMargin}
        />
        <Stack.Screen
          name={NavRoutes.MarginWithSales}
          component={MarginWithSales}
        />
        <Stack.Screen name={NavRoutes.BankFinder} component={BankFinder} />
        <Stack.Screen name={NavRoutes.ATMFinder} component={ATMFinder} />
        <Stack.Screen name={NavRoutes.AllCalculatorTheory} component={Theory} />
        <Stack.Screen name={NavRoutes.FAQ} component={FAQ} />
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
