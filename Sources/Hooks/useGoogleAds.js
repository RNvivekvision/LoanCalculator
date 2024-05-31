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
    interstitialClosed: false,
    index: 0,
  });

  const appOpenId = __DEV__ ? TestIds.APP_OPEN : Admob?.appOpen;
  const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : State.interstitial;
  const rewardId = __DEV__ ? TestIds.REWARDED : Admob?.rewarded;

  const appOpenAd =
    appOpenId?.length > 0
      ? AppOpenAd.createForAdRequest(appOpenId)
      : defaultMethods;
  const interstitialAd =
    interstitialId?.length > 0
      ? InterstitialAd.createForAdRequest(interstitialId)
      : defaultMethods;
  const rewardAd =
    rewardId?.length > 0
      ? RewardedAd.createForAdRequest(rewardId)
      : defaultMethods;

  useEffect(() => {
    if (
      appOpenAd?.loaded == undefined ||
      interstitialAd?.loaded == undefined ||
      rewardAd?.loaded == undefined
    )
      return;

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
    console.log('AppOpen ad loaded -> ', appOpenAd?.loaded);
    if (appOpenId?.loaded == undefined) return;
    if (appOpenAd?.loaded) {
      if (adData?.splashAd) {
        appOpenAd.show();
      }
      return;
    } else {
      appOpenAd.load();
      wait(400).then(showingAppOpenAds);
    }
  };

  const showingIntestitialAds = async onboarding => {
    try {
      // console.log('Interstitial ad loaded -> ', interstitialAd?.loaded);
      if (interstitialAd?.loaded == undefined) return;
      if (interstitialAd?.loaded) {
        console.log({
          clickAds,
        });
        if (clickAds || onboarding || true) {
          dispatch(showAdLoader(true));
          await wait(1000);
          await interstitialAd.show();
          await dispatch(showAdLoader(false));
        }
        return;
      } else {
        interstitialAd.load();
        await wait(500);
        await showingIntestitialAds(onboarding);
      }
    } catch (e) {
      console.log('Error showingIntestitialAds -> ', e);
    }
  };

  const showingRewadAds = () => {
    console.log('Reward ad loaded -> ', rewardAd?.loaded);
    if (rewardAd?.loaded == undefined) return;
    if (rewardAd?.loaded) {
      return rewardAd.show();
    } else {
      rewardAd.load();
      wait(500).then(showingRewadAds);
    }
  };

  if (adData?.showAdInApp || true) {
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
const defaultMethods = {
  load: () => {},
  show: () => {},
};
export default useGoogleAds;
