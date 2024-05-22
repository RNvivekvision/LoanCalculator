// import { useCallback, useRef } from 'react';
// import { Platform } from 'react-native';
// import { useSelector } from 'react-redux';
// import { DummyData } from '../Utils';
// import { InterstitialAd, RewardedAd } from 'react-native-applovin-max';

// const KEY = DummyData.adKeys.appLovein;

const useAppLoveinAds = () => {
  // const nativeAdRef = useRef();
  // const { loveinAds, loveinAdsLoaded } = useSelector(
  //   ({ UserReducer }) => UserReducer,
  // );
  // const getKey = useCallback(key => KEY[Platform.OS][key], []);
  // const bannerId = getKey('banner');
  // const interstitialId = getKey('interstitial');
  // const nativeId = getKey('native');
  // const rewardId = getKey('reward');
  // const showInterstitialAd = async () => {
  //   const key = DummyData.adKeys.appLovein[Platform.OS].interstitial;
  //   InterstitialAd.loadAd(key);
  //   const isReady = await InterstitialAd.isAdReady(key);
  //   if (isReady) {
  //     return InterstitialAd.showAd(key);
  //   }
  //   setTimeout(() => {
  //     showInterstitialAd();
  //   }, 2000);
  // };
  // const showRewardAd = async () => {
  //   const key = DummyData.adKeys.appLovein[Platform.OS].reward;
  //   RewardedAd.loadAd(key);
  //   const isReady = await RewardedAd.isAdReady(key);
  //   console.log({ isReady });
  //   if (isReady) {
  //     return RewardedAd.showAd(key);
  //   }
  //   setTimeout(() => {
  //     showRewardAd();
  //   }, 2000);
  // };
  // return {
  //   bannerId,
  //   interstitialId,
  //   nativeId,
  //   rewardId,
  //   nativeAdRef,
  //   loveinAdsLoaded,
  //   showInterstitialAd,
  //   showRewardAd,
  // };
};

export default useAppLoveinAds;
