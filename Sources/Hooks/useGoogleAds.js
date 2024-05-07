import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import {
  AdEventType,
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  TestIds,
} from 'react-native-google-mobile-ads';

const useGoogleAds = () => {
  const { adData, Admob, innerPageClickCount, Admanager1, Admanager2 } =
    useSelector(({ UserReducer }) => UserReducer);
  const [State, setState] = useState({
    interstitial: Admob?.interstitial,
    index: 0,
  });

  // console.log({ innerPageClickCount });
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

  const showingAppOpenAds = async () => {
    console.log('AppOpen ad loaded -> ', appOpenAd.loaded);

    if (appOpenAd.loaded) {
      await appOpenAd.show();
      return;
    } else {
      await appOpenAd.load();
      await wait(400);
      showingAppOpenAds();
    }
  };

  const innerPage = innerPageClickCount % adData?.innerPageAdClickCount === 0;
  const showingIntestitialAds = async () => {
    try {
      // console.log('Interstitial ad loaded -> ', interstitialAd.loaded);
      // console.log('count -> ', innerPageClickCount);
      // console.log('innerPage -> ', innerPage);
      // return;

      if (interstitialAd.loaded) {
        if (innerPage) {
          await interstitialAd.show();
        }
        return;
      } else {
        await interstitialAd.load();
        await wait(500);
        showingIntestitialAds();
      }
    } catch (e) {
      console.log('Error showingIntestitialAds -> ', e);
    }
  };

  const showingRewadAds = () => {
    console.log('Reward ad loaded -> ', rewardAd.loaded);

    if (rewardAd.loaded) {
      if (innerPage) {
        rewardAd.show();
      }
      return;
    } else {
      rewardAd.load();
      setTimeout(() => showingRewadAds(), 300);
    }
  };

  return {
    showAppOpenAd: showingAppOpenAds,
    showInterstitialAd: showingIntestitialAds,
    showRewardAd: showingRewadAds,
  };
};

const wait = mili => new Promise(resolve => setTimeout(resolve, mili));

export default useGoogleAds;
