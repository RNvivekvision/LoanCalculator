import React, { useEffect, useRef, useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import NativeAdView, {
  CallToActionView,
  HeadlineView,
  IconView,
  StarRatingView,
  StoreView,
  TaglineView,
} from 'react-native-admob-native-ads';
import { RNStyles } from '../../Common';
import { useSelector } from 'react-redux';

const testNativeAdId = 'ca-app-pub-3940256099942544/2247696110';

const NativeAd = () => {
  const { adData, Admob } = useSelector(({ UserReducer }) => UserReducer);
  const adUnitID = __DEV__ ? testNativeAdId : Admob?.nativeAdvanced;
  const [State, setState] = useState({ showButton: false });
  const NativeAdRef = useRef();

  useEffect(() => {
    NativeAdRef.current?.loadAd();
  }, []);

  return (
    <NativeAdView
      ref={NativeAdRef}
      adUnitID={adUnitID}
      onAdLoaded={() => setState(p => ({ ...p, showButton: true }))}
      onAdFailedToLoad={() => setState(p => ({ ...p, showButton: false }))}>
      <View style={styles.container}>
        <IconView style={styles.iconView} />

        <View style={styles.content}>
          <HeadlineView hello="abc" style={styles.headlineView} />
          <TaglineView numberOfLines={2} style={styles.taglineView} />

          <View style={styles.storeViewContainer}>
            <StoreView style={styles.taglineView} />
            <StarRatingView
              starSize={12}
              fullStarColor={Colors.Button}
              emptyStarColor={Colors.White}
              style={styles.starRating}
            />
          </View>
        </View>

        {State.showButton && (
          <CallToActionView
            style={styles.button}
            allCaps={true}
            textStyle={{
              fontSize: FontSize.font12,
              fontFamily: FontFamily.Bold,
              color: Colors.White,
            }}
          />
        )}
      </View>
    </NativeAdView>
  );
};

const iconSize = wp(18);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    backgroundColor: Colors.Black,
    paddingHorizontal: wp(4),
    paddingVertical: hp(1),
  },
  iconView: {
    width: iconSize,
    height: iconSize,
  },
  content: {
    flex: 1,
    paddingHorizontal: wp(2),
  },
  headlineView: {
    fontSize: FontSize.font16,
    fontFamily: FontFamily.Bold,
    color: Colors.White,
  },
  taglineView: {
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Regular,
    color: Colors.White,
  },
  storeViewContainer: {
    ...RNStyles.flexRow,
    paddingTop: hp(1),
  },
  starRating: {
    marginLeft: wp(2),
  },
  button: {
    ...RNStyles.center,
    width: wp(20),
    backgroundColor: Colors.Button,
    height: wp(10),
  },
});

export default NativeAd;

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
