// import { useEffect } from 'react';
// import { StyleSheet, View } from 'react-native';
// import SplashScreen from 'react-native-splash-screen';
// import {
//   BannerAd,
//   BannerAdSize,
//   TestIds,
// } from 'react-native-google-mobile-ads';

// const App = () => {
//   useEffect(() => {
//     SplashScreen.hide();
//   }, []);

//   return (
//     <View style={styles.container}>
//       <View style={{ paddingVertical: 20, borderWidth: 1 }}>
//         <BannerAd
//           size={BannerAdSize.ANCHORED_ADAPTIVE_BANNER}
//           unitId={TestIds.BANNER}
//           onPaid={e => console.log('BannerAd onPaid -> ', e)}
//           onAdFailedToLoad={error => {
//             console.log('Error BannerAd -> ', error);
//           }}
//         />
//       </View>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// export default App;

import React from 'react';
import { Routes } from './Navigation';
import { Provider } from 'react-redux';
import Store from './Redux';

const App = () => {
  return (
    <Provider store={Store}>
      <Routes />
    </Provider>
  );
};

export default App;
