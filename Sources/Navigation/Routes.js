import React, { useCallback, useEffect, useRef } from 'react';
import { AppState } from 'react-native';
import SplashScreen from 'react-native-splash-screen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavConfigs, NavRoutes } from './index';
import { useGoogleAds, useLocalStorage } from '../Hooks';
import { Strings } from '../Constants';
import Drawer from './Drawer';
import {
  AboutUs,
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
import { useDispatch, useSelector } from 'react-redux';
import { getAdData } from '../Redux/ExtraReducers';
import { requestTrackingPermission } from 'react-native-tracking-transparency';
import { Settings, AppEventsLogger } from 'react-native-fbsdk-next';

Settings.initializeSDK();

// import { DummyData } from '../Utils';
// import { setLoveinAdsLoaded } from '../Redux/Actions';
// import { AdSettings } from 'react-native-fbads';
// import { AppLovinMAX } from 'react-native-applovin-max';

const Stack = createStackNavigator();

const Routes = () => {
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const { showAppOpenAd } = useGoogleAds();
  const { localdata } = useLocalStorage();
  const dispatch = useDispatch();

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        showAppOpenAd();
      }
      appState.current = nextAppState;
    });
    return () => subscription.remove();
  }, [adData]);

  useEffect(() => {
    localdata?.lang && Strings.setLanguage(localdata?.lang);
  }, [localdata?.lang]);

  useEffect(() => {
    (async () => {
      await dispatch(getAdData());
      setTimeout(() => {
        SplashScreen.hide();
      }, 1000);
    })();
  }, []);

  useEffect(() => {
    requestPermission();
  }, []);

  const requestPermission = async () => {
    try {
      const status = await requestTrackingPermission();
    } catch (e) {
      console.log('Error requestPermission -> ', e);
    }
  };

  // useEffect(() => {
  //   initAppLoveinAds();
  //   initFacebookAds();
  //   return () => AdSettings.clearTestDevices();
  // }, []);

  // const initFacebookAds = async () => {
  //   try {
  //     // console.log('currentDeviceHash -> ', AdSettings.currentDeviceHash);
  //     AdSettings.setLogLevel('debug');
  //     AdSettings.addTestDevice(AdSettings.currentDeviceHash);
  //     const requestedStatus = await AdSettings.requestTrackingPermission();
  //     if (
  //       requestedStatus === 'authorized' ||
  //       requestedStatus === 'unavailable'
  //     ) {
  //       AdSettings.setAdvertiserIDCollectionEnabled(true);
  //       AdSettings.setAdvertiserTrackingEnabled(true);
  //     }
  //   } catch (e) {
  //     console.log('Error Init facebook -> ', e);
  //   }
  // };

  // const initAppLoveinAds = async () => {
  //   const AppOpenAd = () => {
  //     const showAdIfReady = async () => {
  //       const isAppOpenAdReady = await AppOpenAd.isAdReady(
  //         DummyData.adKeys.appLovein.android.appOpen,
  //       );
  //       if (isAppOpenAdReady) {
  //         AppOpenAd.showAd(DummyData.adKeys.appLovein.android.appOpen);
  //       } else {
  //         AppOpenAd.loadAd(DummyData.adKeys.appLovein.android.appOpen);
  //       }
  //     };
  //     AppOpenAd.addAdLoadedEventListener(v => {
  //       console.log('AppOpen addAdLoadedEventListener -> ', v);
  //       // showAdIfReady();
  //     });
  //     AppOpenAd.addAdLoadFailedEventListener(e => {
  //       console.log('AppOpen addAdLoadFailedEventListener -> ', e);
  //     });
  //     // showAdIfReady();
  //   };
  //   try {
  //     const config = await AppLovinMAX.initialize(
  //       DummyData.adKeys.appLovein.SDK,
  //     );
  //     dispatch(setLoveinAdsLoaded(true));
  //     // AppOpenAd();
  //   } catch (e) {
  //     dispatch(setLoveinAdsLoaded(false));
  //     console.error('Error initAppLoveinAds -> ', e);
  //   }
  // };

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
        <Stack.Screen name={NavRoutes.AllCalculatorTheory} component={Theory} />
        <Stack.Screen name={NavRoutes.FAQ} component={FAQ} />
        <Stack.Screen name={NavRoutes.AboutUs} component={AboutUs} />
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
