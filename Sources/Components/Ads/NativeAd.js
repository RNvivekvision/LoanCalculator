import React from 'react';
import { Platform, Text, View } from 'react-native';
import {
  AdIconView,
  TriggerableView,
  withNativeAd,
  NativeAdsManager,
} from 'react-native-fbads';

const NativeAd = () => {
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

  const nativeAdId =
    VID_HD_9_16_39S_APP_INSTALL +
    getKey({ ios: ios_native, android: android_native });

  const adsManager = new NativeAdsManager(nativeAdId, 3);

  return (
    <NativeAdView adsManager={adsManager} adChoicePosition="bottomRight" />
  );
};

const NativeAdView = withNativeAd(props => {
  return (
    <View style={{ flexDirection: 'column', borderWidth: 1 }}>
      <View style={{ flexDirection: 'row', paddingVertical: 10 }}>
        <AdIconView style={{ width: '25%', height: 80 }} />

        <View
          style={{ flexDirection: 'column', paddingHorizontal: 10, flex: 1 }}>
          <TriggerableView style={{ fontSize: 18, color: '#fff' }}>
            {props.nativeAd?.headline}
          </TriggerableView>

          <Text style={{ color: '#fff' }}>
            {props.nativeAd?.sponsoredTranslation}
          </Text>

          <TriggerableView style={{ fontSize: 10, color: '#fff' }}>
            {props.nativeAd?.linkDescription}
          </TriggerableView>
        </View>

        <TriggerableView
          style={{
            fontSize: 14,
            color: '#a70f0a',
            backgroundColor: '#f00',
          }}>
          {props.nativeAd?.callToActionText}
        </TriggerableView>
      </View>
    </View>
  );
});

export default NativeAd;

// Google ads
// import React, { useEffect, useRef, useState } from 'react';
// import { StyleSheet, View } from 'react-native';
// import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
// import NativeAdView, {
//   CallToActionView,
//   HeadlineView,
//   IconView,
//   StarRatingView,
//   StoreView,
//   TaglineView,
//   TestIds,
// } from 'react-native-admob-native-ads';
// import { RNStyles } from '../../Common';
// import { useSelector } from 'react-redux';

// const NativeAd = () => {
//   const NativeAdRef = useRef();
//   const { adData, Admob } = useSelector(({ UserReducer }) => UserReducer);
//   const [State, setState] = useState({ showButton: false });
//   const adUnitID = __DEV__ ? TestIds.Image : Admob?.nativeAdvanced;

//   // styles...
//   const containerBgColor = {
//     backgroundColor: adData?.appMoreFieldAdsBackgroundColor || Colors.Black,
//   };
//   const textColor = { color: adData?.appMoreFieldAdsTextColor || Colors.White };
//   const buttonBgColor = {
//     backgroundColor: adData?.appMoreFieldAdsButtonColor || Colors.Button,
//   };
//   const buttonTextColor = {
//     color: adData?.appMoreFieldAdsButtonTextColor || Colors.White,
//   };

//   useEffect(() => {
//     NativeAdRef.current?.loadAd();
//   }, []);

//   return (
//     adUnitID && (
//       <NativeAdView
//         ref={NativeAdRef}
//         adUnitID={adUnitID}
//         onAdLoaded={() => setState(p => ({ ...p, showButton: true }))}
//         onAdFailedToLoad={() => setState(p => ({ ...p, showButton: false }))}>
//         <View style={styles.container}>
//           <IconView style={styles.iconView} />

//           <View style={styles.content}>
//             <HeadlineView
//               hello="abc"
//               style={[styles.headlineView, textColor]}
//             />
//             <TaglineView
//               numberOfLines={2}
//               style={[styles.taglineView, textColor]}
//             />

//             <View style={styles.storeViewContainer}>
//               <StoreView style={[styles.taglineView, textColor]} />
//               <StarRatingView
//                 starSize={12}
//                 fullStarColor={Colors.Button}
//                 emptyStarColor={Colors.White}
//                 style={styles.starRating}
//               />
//             </View>
//           </View>

//           {State.showButton && (
//             <CallToActionView
//               style={[styles.button, buttonBgColor]}
//               textStyle={[styles.buttonText, buttonTextColor]}
//               allCaps={true}
//             />
//           )}
//         </View>
//       </NativeAdView>
//     )
//   );
// };

// const iconSize = wp(18);
// const styles = StyleSheet.create({
//   container: {
//     ...RNStyles.flexRow,
//     backgroundColor: Colors.Black,
//     paddingHorizontal: wp(4),
//     paddingVertical: hp(1),
//   },
//   iconView: {
//     width: iconSize,
//     height: iconSize,
//   },
//   content: {
//     flex: 1,
//     paddingHorizontal: wp(2),
//   },
//   headlineView: {
//     fontSize: FontSize.font16,
//     fontFamily: FontFamily.Bold,
//     color: Colors.White,
//   },
//   taglineView: {
//     fontSize: FontSize.font12,
//     fontFamily: FontFamily.Regular,
//     color: Colors.White,
//   },
//   storeViewContainer: {
//     ...RNStyles.flexRow,
//     paddingTop: hp(1),
//   },
//   starRating: {
//     marginLeft: wp(2),
//   },
//   button: {
//     ...RNStyles.center,
//     width: wp(20),
//     height: wp(10),
//     backgroundColor: Colors.Button,
//   },
//   buttonText: {
//     fontSize: FontSize.font12,
//     fontFamily: FontFamily.Bold,
//     color: Colors.White,
//   },
// });

// export default NativeAd;

// import React from 'react';
// import { StyleSheet } from 'react-native';
// import { RNText, RNStyles } from '../../Common';
// import { Colors, FontFamily, hp, wp } from '../../Theme';
// import Reanimated, { ZoomIn } from 'react-native-reanimated';

// const NativeAd = () => {
//   return (
//     <Reanimated.View entering={ZoomIn.delay(200)} style={styles.container}>
//       <RNText family={FontFamily.Medium}>{'For Native 1'}</RNText>
//     </Reanimated.View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     ...RNStyles.center,
//     borderWidth: 1,
//     borderColor: Colors.White + '50',
//     borderStyle: 'dashed',
//     borderRadius: wp(3),
//     marginHorizontal: wp(2),
//     marginVertical: hp(1),
//     height: hp(18),
//   },
// });

// export default NativeAd;
