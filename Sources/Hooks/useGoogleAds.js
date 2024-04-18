import { useEffect, useMemo, useRef } from 'react';
import { AppState } from 'react-native';
import {
  AdEventType,
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  RewardedAdEventType,
  TestIds,
} from 'react-native-google-mobile-ads';
import { useSelector } from 'react-redux';

const useGoogleAds = () => {
  const { adData, Admob } = useSelector(({ UserReducer }) => UserReducer);

  const appOpenId = __DEV__ ? TestIds.APP_OPEN : Admob?.appOpen;
  const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : Admob?.interstitial;
  const rewardId = __DEV__ ? TestIds.REWARDED : Admob?.appOpen;

  const appOpenAd = AppOpenAd.createForAdRequest(appOpenId);
  const interstitialAd = InterstitialAd.createForAdRequest(interstitialId);
  const rewardAd = RewardedAd.createForAdRequest(rewardId);

  const appState = useRef(AppState.currentState);

  useEffect(() => {
    const subscription = AppState.addEventListener('change', nextAppState => {
      if (
        appState.current.match(/inactive|background/) &&
        nextAppState === 'active'
      ) {
        show(appOpenAd);
      }
      // console.log('App state -> ', nextAppState);
      appState.current = nextAppState;
    });

    return () => {
      subscription.remove();
    };
  }, []);

  useEffect(() => {
    const interstitialLoaded = interstitialAd.addAdEventListener(
      AdEventType.LOADED,
      v => {
        // console.log('interstitial ad Loaded -> ', v);
      },
    );

    const rewardedLoad = rewardAd.addAdEventListener(
      RewardedAdEventType.LOADED,
      v => {
        // console.log('rewarded ad Loaded -> ', v);
      },
    );
    const rewardedEarn = rewardAd.addAdEventListener(
      RewardedAdEventType.EARNED_REWARD,
      r => {
        // console.log('rewardedEarn -> ', r);
      },
    );

    appOpenAd.load();
    interstitialAd.load();
    rewardAd.load();

    return () => {
      interstitialLoaded();
      rewardedLoad();
      rewardedEarn();
    };
  }, []);

  const show = method => {
    console.log('adData -> ', JSON.stringify(adData?.showAdInApp, null, 2));
    if (method.loaded) {
      method.show();
    } else {
      method.load();
    }
  };

  const showAds = useMemo(() => {
    return {
      showAppOpenAd: () => adData?.showAdInApp && show(appOpenAd),
      showInterstitialAd: () => adData?.showAdInApp && show(interstitialAd),
      showRewardAd: () => adData?.showAdInApp && show(rewardAd),
    };
  }, [adData?.showAdInApp]);

  return showAds;
};

export default useGoogleAds;
