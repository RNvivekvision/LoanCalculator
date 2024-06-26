import { useSelector } from 'react-redux';
import { GoogleNativeAd } from './google';
// import { FacebookNativeAd } from './facebook';
// import { AppLoveInNativeAd } from './appLoveIn';

const NativeAd = () => {
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const showAd = adData?.showAdInApp ?? false;

  if (showAd) {
    // return <AppLoveInNativeAd />;
    // return <FacebookNativeAd />;
    return <GoogleNativeAd />;
  }

  return null;
};

export default NativeAd;

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
