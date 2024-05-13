import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  AdEventType,
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import { showAdLoader } from '../Redux/Actions';

const useGoogleAds = () => {
  const { adData, Admob, clickAds, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const dispatch = useDispatch();
  const [State, setState] = useState({
    interstitial: Admob?.interstitial,
    index: 0,
  });

  const appOpenId = __DEV__ ? TestIds.APP_OPEN : Admob?.appOpen;
  const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : State.interstitial;
  const rewardId = __DEV__ ? TestIds.REWARDED : Admob?.rewarded;

  const appOpenAd = AppOpenAd.createForAdRequest(appOpenId);
  const interstitialAd = InterstitialAd.createForAdRequest(interstitialId);
  const rewardAd = RewardedAd.createForAdRequest(rewardId);

  useEffect(() => {
    const error_interstitial = interstitialAd.addAdEventListener(
      AdEventType.ERROR,
      e => {
        console.log('Error Interstitial Ad -> ', e);
        const newIndex = State.index + 1;
        if (newIndex == 1) {
          setState(p => ({
            ...p,
            interstitial: Admanager1?.interstitial,
            index: newIndex,
          }));
        } else if (newIndex == 2) {
          setState(p => ({
            ...p,
            interstitial: Admanager2?.interstitial,
            index: newIndex,
          }));
        }
      },
    );

    appOpenAd.load();
    interstitialAd.load();
    rewardAd.load();

    return () => {
      error_interstitial();
    };
  }, [adData]);

  const showingAppOpenAds = () => {
    console.log('AppOpen ad loaded -> ', appOpenAd.loaded);

    if (appOpenAd.loaded) {
      if (adData?.splashAd) {
        appOpenAd.show();
      }
      return;
    } else {
      appOpenAd.load();
      wait(400).then(showingAppOpenAds);
    }
  };

  const showingIntestitialAds = onboarding => {
    try {
      console.log('Interstitial ad loaded -> ', interstitialAd.loaded);

      if (interstitialAd.loaded) {
        if (clickAds || onboarding) {
          dispatch(showAdLoader(true));
          wait(1000).then(() => {
            interstitialAd.show();
            dispatch(showAdLoader(false));
          });
        }
        return;
      } else {
        interstitialAd.load();
        wait(500).then(() => showingIntestitialAds(onboarding));
      }
    } catch (e) {
      console.log('Error showingIntestitialAds -> ', e);
    }
  };

  const showingRewadAds = () => {
    console.log('Reward ad loaded -> ', rewardAd.loaded);

    if (rewardAd.loaded) {
      return rewardAd.show();
    } else {
      rewardAd.load();
      wait(500).then(showingRewadAds);
    }
  };

  if (adData?.showAdInApp) {
    return {
      showAppOpenAd: showingAppOpenAds,
      showInterstitialAd: showingIntestitialAds,
      showRewardAd: showingRewadAds,
    };
  }

  return {
    showAppOpenAd: () => console.log('showAdInApp: ', adData?.showAdInApp),
    showInterstitialAd: () => console.log('showAdInApp: ', adData?.showAdInApp),
    showRewardAd: () => console.log('showAdInApp: ', adData?.showAdInApp),
  };
};

const wait = ms => new Promise(r => setTimeout(r, ms));

export default useGoogleAds;
