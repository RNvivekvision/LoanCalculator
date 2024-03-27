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
import { Images, Strings } from '../../Constants';
import { NativeAd } from '../../Components';
import { NavRoutes } from '../../Navigation';

const Welcome = ({ navigation }) => {
  const [State, setState] = useState(false);

  useEffect(() => {
    setState(true);
  }, []);

  return (
    <RNContainer>
      <RNScrollView safeArea={'top'} style={styles.container}>
        <RNText size={FontSize.font18} family={FontFamily.Bold}>
          {Strings.WelcomeToThe}
        </RNText>
        <RNText style={styles.text}>{Strings.LoanGolLoanEMICalculator}</RNText>

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
          onPress={() => navigation.replace(NavRoutes.Home)}
        />

        <View style={RNStyles.flexRow}>
          <TouchableOpacity
            activeOpacity={0.6}
            style={[styles.buttonContainer, styles.inviteContainer]}>
            <RNImage source={Images.InviteFriends} style={styles.inviteIcon} />
            <RNText style={styles.buttonText} pTop={hp(2)}>
              {Strings.InviteFriends}
            </RNText>
          </TouchableOpacity>

          <View style={{ flex: 1 }}>
            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.buttonContainer}>
              <RNImage source={Images.PrivacyPolicy} style={styles.icon} />
              <RNText style={styles.buttonText}>{Strings.PrivacyPolicy}</RNText>
            </TouchableOpacity>

            <TouchableOpacity
              activeOpacity={0.6}
              style={styles.buttonContainer}>
              <RNImage source={Images.RateUs} style={styles.icon} />
              <RNText style={styles.buttonText}>{Strings.RateUs}</RNText>
            </TouchableOpacity>
          </View>
        </View>
      </RNScrollView>

      <NativeAd />
    </RNContainer>
  );
};

const logoSize = wp(33);
const iconSize = wp(8);
const styles = StyleSheet.create({
  container: {
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

export default Welcome;
