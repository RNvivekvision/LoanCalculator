import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import {
  AppOpenAd,
  InterstitialAd,
  RewardedAd,
  TestIds,
} from 'react-native-google-mobile-ads';

const wait = mili => new Promise(resolve => setTimeout(resolve, mili));

const useGoogleAds = () => {
  const { adData, Admob, innerPageClickCount } = useSelector(
    ({ UserReducer }) => UserReducer,
  );

  console.log({ innerPageClickCount });
  const appOpenId = __DEV__ ? TestIds.APP_OPEN : Admob?.appOpen;
  const interstitialId = __DEV__ ? TestIds.INTERSTITIAL : Admob?.interstitial;
  const rewardId = __DEV__ ? TestIds.REWARDED : Admob?.rewarded;

  const appOpenAd = AppOpenAd.createForAdRequest(appOpenId);
  const interstitialAd = InterstitialAd.createForAdRequest(interstitialId);
  const rewardAd = RewardedAd.createForAdRequest(rewardId);

  useEffect(() => {
    appOpenAd.load();
    interstitialAd.load();
    rewardAd.load();
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
      console.log('Interstitial ad loaded -> ', interstitialAd.loaded);
      console.log('count -> ', innerPageClickCount);
      console.log('innerPageAdClickCount -> ', adData?.innerPageAdClickCount);
      console.log('innerPage -> ', innerPage);
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

export default useGoogleAds;
