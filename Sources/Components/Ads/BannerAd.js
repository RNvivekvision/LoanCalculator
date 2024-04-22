import { Platform, View } from 'react-native';
import { BannerView } from 'react-native-fbads';

const BannerAd = () => {
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

  const bannerAdId =
    IMG_16_9_APP_INSTALL + getKey({ ios: ios_banner, android: android_banner });

  console.log({ bannerAdId });

  return (
    <View>
      {bannerAdId && (
        <BannerView
          placementId={bannerAdId}
          type="standard"
          onPress={() => console.log('Click Banner')}
          onError={e => console.error('Error Banner -> ', e.nativeEvent)}
        />
      )}
    </View>
  );
};

export default BannerAd;

// Google Banner AD...
// import React from 'react';
// import {
//   BannerAd,
//   BannerAdSize,
//   TestIds,
// } from 'react-native-google-mobile-ads';
// import { useSelector } from 'react-redux';

// const BannerAds = () => {
//   const { Admob } = useSelector(({ UserReducer }) => UserReducer);
//   const unitId = __DEV__ ? TestIds.BANNER : Admob?.banner;

//   return (
//     unitId && (
//       <BannerAd
//         size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
//         unitId={unitId}
//         onPaid={e => {
//           // console.log('BannerAd onPaid -> ', e);
//         }}
//         onAdFailedToLoad={error => {
//           console.log('Error BannerAd -> ', error);
//         }}
//       />
//     )
//   );
// };

// export default BannerAds;
