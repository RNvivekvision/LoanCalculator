import React, { useEffect, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import {
  RNButton,
  RNContainer,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { useInset, useUserClicks } from '../../Hooks';
import { Images, Strings } from '../../Constants';
import { NativeAd } from '../../Components';
import { NavRoutes } from '../../Navigation';
import { Functions } from '../../Utils';
import { useSelector } from 'react-redux';

const Welcome = ({ navigation }) => {
  const { adDataLoading } = useSelector(({ UserReducer }) => UserReducer);
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState(false);
  const styles = useStyles();

  useEffect(() => {
    setState(true);
  }, []);

  const onStartAppPress = () => {
    increaseCount();
    navigation.replace(NavRoutes.Home);
  };

  const onInvitePress = async () => {
    // increaseCount();
    try {
      await Functions.ShareApp();
    } catch (e) {
      console.log('Error onInvitePress -> ', e);
    }
  };

  const onPrivacyPolicyPress = async () => {
    try {
      // increaseCount();
    } catch (e) {
      console.log('Error onPrivacyPolicyPress -> ', e);
    }
  };

  const onRateUsPress = async () => {
    try {
      // increaseCount();
      await Functions.RateUs({
        onSuccess: s => console.log('Welcome rate us Success -> ', s),
        onError: e => console.log('Welcome rate us Error -> ', e),
      });
    } catch (e) {
      console.log('Error onRateUsPress -> ', e);
    }
  };

  return (
    <RNContainer style={styles.container} isLoading={adDataLoading}>
      <View style={styles.content}>
        <RNScrollView safeArea={'top'}>
          <RNText size={FontSize.font18} family={FontFamily.Bold}>
            {Strings.WelcomeToThe}
          </RNText>
          <RNText style={styles.text}>
            {Strings.LoanGolLoanEMICalculator}
          </RNText>

          <RNImage source={Images.Logo} style={styles.Logo} />

          <RNText style={styles.text}>
            {Strings.LoanGolLoanEMICalculatorDesc1}
          </RNText>

          <RNText style={styles.text}>
            {Strings.LoanGolLoanEMICalculatorDesc2}
          </RNText>

          <RNButton
            title={Strings.StartApp}
            style={{ marginVertical: hp(2) }}
            onPress={onStartAppPress}
          />

          <View style={RNStyles.flexRow}>
            <TouchableOpacity
              activeOpacity={0.6}
              onPress={onInvitePress}
              style={[styles.buttonContainer, styles.inviteContainer]}>
              <RNImage
                source={Images.InviteFriends}
                style={styles.inviteIcon}
              />
              <RNText style={styles.buttonText} pTop={hp(2)}>
                {Strings.InviteFriends}
              </RNText>
            </TouchableOpacity>

            <View style={{ flex: 1 }}>
              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onPrivacyPolicyPress}
                style={styles.buttonContainer}>
                <RNImage source={Images.PrivacyPolicy} style={styles.icon} />
                <RNText style={styles.buttonText}>
                  {Strings.PrivacyPolicy}
                </RNText>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.6}
                onPress={onRateUsPress}
                style={styles.buttonContainer}>
                <RNImage source={Images.RateUs} style={styles.icon} />
                <RNText style={styles.buttonText}>{Strings.RateUs}</RNText>
              </TouchableOpacity>
            </View>
          </View>
        </RNScrollView>
      </View>

      <NativeAd />
    </RNContainer>
  );
};

const logoSize = wp(33);
const iconSize = wp(8);
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      paddingBottom: inset.bottom,
    },
    content: {
      flex: 1,
      paddingHorizontal: wp(6),
    },
    text: {
      fontSize: FontSize.font14,
      color: Colors.White + '50',
      paddingVertical: hp(1),
    },
    Logo: {
      width: logoSize,
      height: logoSize,
      borderWidth: 1,
      borderColor: Colors.White,
      borderRadius: wp(3),
      marginVertical: hp(1.5),
      alignSelf: 'center',
    },
    buttonContainer: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.White + '15',
      height: hp(8),
      marginHorizontal: wp(1),
      borderRadius: wp(3),
      marginBottom: hp(1),
    },
    inviteContainer: {
      ...RNStyles.center,
      flexDirection: 'column',
      height: hp(17),
      width: '45%',
      marginRight: wp(2),
    },
    icon: {
      width: iconSize,
      height: iconSize,
      marginLeft: wp(4),
      marginRight: wp(1),
    },
    inviteIcon: {
      width: iconSize + wp(4),
      height: iconSize + wp(4),
      marginTop: hp(4),
    },
    buttonText: {
      flex: 1,
      fontSize: FontSize.font14,
      fontFamily: FontFamily.Bold,
      paddingHorizontal: wp(0.5),
    },
  });
};

export default Welcome;
