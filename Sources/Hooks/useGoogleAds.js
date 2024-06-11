import { useDispatch, useSelector } from 'react-redux';
import {
  AppOpenAd,
  InterstitialAd,
  TestIds,
} from 'react-native-google-mobile-ads';
import { showAdLoader } from '../Redux/Actions';
import { Functions } from '../Utils';

const useGoogleAds = () => {
  const { clickAds, adData, Admob, Admanager1, Admanager2 } = useSelector(
    ({ UserReducer }) => UserReducer,
  );
  const methods = [Admob, Admanager1, Admanager2];
  const dispatch = useDispatch();

  // const showingAppOpenAds = async (method = methods[0], count = 0) => {
  //   try {
  //     const AdId = Functions.isDev ? TestIds.INTERSTITIAL : method?.appOpen;
  //     const Ad = AppOpenAd.createForAdRequest(AdId); // initialization...

  //     dispatch(showAdLoader(true)); // Show loader...

  //     Ad.load();
  //     await Functions.wait(2000); // wait for 2 seconds to load  ad...

  //     count++;
  //     if (!Ad.loaded) {
  //       if (count >= methods.length) {
  //         return dispatch(showAdLoader(false));
  //       } else {
  //         return showingAppOpenAds(methods[count], count);
  //       }
  //     } else {
  //       if (adData?.splashAd) return await Ad.show();
  //     }
  //   } catch (e) {
  //     dispatch(showAdLoader(false));
  //     console.log('Error App Open Ad -> ', e);
  //   } finally {
  //     dispatch(showAdLoader(false));
  //   }
  // };

  // const showingIntestitialAds = async (
  //   onboarding,
  //   method = methods[0],
  //   count = 0,
  // ) => {
  //   try {
  //     const AdId = Functions.isDev
  //       ? TestIds.INTERSTITIAL
  //       : method?.interstitial;
  //     const Ad = InterstitialAd.createForAdRequest(AdId); // initialization...

  //     dispatch(showAdLoader(true)); // Show loader...

  //     Ad.load();
  //     await Functions.wait(2000); // wait for 2 seconds to load interstitial ad...

  //     count++;
  //     if (!Ad.loaded) {
  //       if (count >= methods.length) {
  //         return dispatch(showAdLoader(false));
  //       } else {
  //         return showingIntestitialAds(onboarding, methods[count], count);
  //       }
  //     } else {
  //       if (clickAds || onboarding) return await Ad.show();
  //     }
  //   } catch (e) {
  //     dispatch(showAdLoader(false));
  //     console.log('Error Intestitial Ad -> ', e);
  //   } finally {
  //     dispatch(showAdLoader(false));
  //   }
  // };

  const showingRewadAds = () => {};

  const showAds = async ({
    adType = InterstitialAd,
    testAdId = TestIds.INTERSTITIAL,
    method = methods[0],
    key = 'interstitial',
    count = 0,
    condition,
  }) => {
    try {
      if (!condition) return;

      const AdId = Functions.isDev ? testAdId : method[key];
      const Ad = adType.createForAdRequest(AdId); // initialization...

      console.log('\n\nshowing loader...');
      dispatch(showAdLoader(true)); // Show loader...

      console.log('start loading ad...');
      Ad.load();
      await Functions.wait(2000); // wait for 2 seconds to load ad...

      count++;
      if (!Ad.loaded) {
        console.log('Not Loaded...');
        if (count >= methods.length) {
          console.log('return all methods...');
          return dispatch(showAdLoader(false));
        } else {
          console.log('go to next method...');
          return showAds({
            adType,
            testAdId,
            method: methods[count],
            count,
            key,
            condition,
          });
        }
      } else {
        console.log('ad loaded and condition fulfilled...');
        dispatch(showAdLoader(false));
        return await Ad.show();
      }
    } catch (e) {
      dispatch(showAdLoader(false));
      console.log('Error show Ads -> ', e);
    }
  };

  if (adData?.showAdInApp) {
    return {
      showAppOpenAd: () =>
        showAds({
          adType: AppOpenAd,
          key: 'appOpen',
          testAdId: TestIds.APP_OPEN,
          condition: adData?.splashAd,
        }),
      showInterstitialAd: onboard =>
        showAds({
          adType: InterstitialAd,
          key: 'interstitial',
          testAdId: TestIds.INTERSTITIAL,
          condition: clickAds || onboard,
        }),
      showRewardAd: showingRewadAds,
    };
  }

  return {
    showAppOpenAd: () => console.log('showAdInApp: ', adData?.showAdInApp),
    showInterstitialAd: () => console.log('showAdInApp: ', adData?.showAdInApp),
    showRewardAd: () => console.log('showAdInApp: ', adData?.showAdInApp),
  };
};

export default useGoogleAds;

// Previous code as on 11th June 2024

// App Open
// const showingAppOpenAds = (method = methods[0], count = 0) => {
//   if (appOpenAd?.loaded == undefined) return;
//   console.log('AppOpen ad loaded -> ', appOpenAd?.loaded);
//   if (appOpenAd?.loaded) {
//     if (adData?.splashAd) {
//       appOpenAd?.show();
//     }
//     return;
//   } else {
//     appOpenAd?.load();
//     Functions.wait(2000).then(showingAppOpenAds);
//   }
// };

// Interstitial
// const showingIntestitialAds = async onboarding => {
//   try {
//     if (interstitialAd?.loaded == undefined) return;
//     console.log('Interstitial ad loaded -> ', interstitialAd?.loaded);
//     if (interstitialAd?.loaded) {
//       if (clickAds || onboarding) {
//         dispatch(showAdLoader(true));
//         await Functions.wait(1000);
//         await interstitialAd?.show();
//         await dispatch(showAdLoader(false));
//       }
//       return;
//     } else {
//       interstitialAd?.load();
//       await Functions.wait(500);
//       await showingIntestitialAds(onboarding);
//     }
//   } catch (e) {
//     console.log('Error showingIntestitialAds -> ', e);
//   }
// };
