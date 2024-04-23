import { Platform } from 'react-native';
import { useSelector } from 'react-redux';

const useFacebookAds = () => {
  const { fbAds } = useSelector(({ UserReducer }) => UserReducer);

  const bannerId = __DEV__
    ? IMG_16_9_APP_INSTALL +
      getKey({ ios: ios_banner, android: android_banner })
    : getKey({ ios: ios_banner, android: android_banner });
  const interstitialId = __DEV__
    ? VID_HD_9_16_39S_APP_INSTALL +
      getKey({ ios: ios_interstitial, android: android_interstitial })
    : getKey({ ios: ios_interstitial, android: android_interstitial });
  const nativeId = __DEV__
    ? VID_HD_9_16_39S_APP_INSTALL +
      getKey({ ios: ios_native, android: android_native })
    : getKey({ ios: ios_native, android: android_native });
  const nativeBannerId = __DEV__
    ? VID_HD_9_16_39S_APP_INSTALL +
      getKey({ ios: ios_nativeBanner, android: android_nativeBanner })
    : getKey({ ios: ios_nativeBanner, android: android_nativeBanner });
  const rewardInterstitialId = __DEV__
    ? VID_HD_9_16_39S_APP_INSTALL +
      getKey({
        ios: ios_rewardInterstitial,
        android: android_rewardInterstitial,
      })
    : getKey({
        ios: ios_rewardInterstitial,
        android: android_rewardInterstitial,
      });
  const rewardVideoId = __DEV__
    ? VID_HD_9_16_39S_APP_INSTALL +
      getKey({ ios: ios_rewardVideo, android: android_rewardVideo })
    : getKey({ ios: ios_rewardVideo, android: android_rewardVideo });

  return {
    bannerId,
    interstitialId,
    nativeId,
    nativeBannerId,
    rewardInterstitialId,
    rewardVideoId,
  };
};

const IMG_16_9_APP_INSTALL = 'IMG_16_9_APP_INSTALL#';
const VID_HD_9_16_39S_APP_INSTALL = 'VID_HD_9_16_39S_APP_INSTALL#';
const VID_HD_16_9_15S_APP_INSTALL = 'VID_HD_16_9_15S_APP_INSTALL#';

const android_banner = '931958428934809_931959862267999';
const android_interstitial = '931958428934809_931959938934658';
const android_native = '931958428934809_931960002267985';
const android_nativeBanner = '931958428934809_931960078934644';
const android_rewardInterstitial = '931958428934809_931960358934616';
const android_rewardVideo = '931958428934809_931960238934628';

const ios_banner = '931958428934809_931959198934732';
const ios_interstitial = '931958428934809_931959248934727';
const ios_native = '931958428934809_931959578934694';
const ios_nativeBanner = '931958428934809_931959338934718';
const ios_rewardInterstitial = '931958428934809_931959432268042';
const ios_rewardVideo = '931958428934809_931959522268033';

const getKey = ({ ios, android }) =>
  Platform.select({
    ios: ios,
    android: android,
  });

export default useFacebookAds;
