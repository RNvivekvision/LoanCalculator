import React, { useState } from 'react';
import { OtpInput } from 'react-native-otp-entry';
import { AuthHeader, HMBack } from '../../Components';
import { RNButton, RNDevider, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const VerifyCode = ({ navigation }) => {
  const [State, setState] = useState({ otp: '' });

  return (
    <AuthHeader>
      <HMBack />

      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.SemiBold}>
        {Strings.VerifyYourCode}
      </RNText>

      <RNText size={FontSize.font12} spacing={1} pVertical={hp(2)}>
        {Strings.VerifyYourCodeDesc}
      </RNText>

      <RNDevider style={{ marginBottom: hp(3) }} />

      <RNText color={Colors.Placeholder}>{Strings.EnterCode}</RNText>

      <OtpInput
        numberOfDigits={4}
        onTextChange={otp => setState(p => ({ ...p, otp }))}
        autoFocus
        theme={otpTheme}
      />

      <RNButton
        title={Strings.Verify}
        style={{ marginTop: hp(8) }}
        onPress={() => navigation.navigate(NavRoutes.ResetPassword)}
      />
    </AuthHeader>
  );
};

const otpTheme = {
  containerStyle: {
    paddingVertical: hp(1),
  },
  pinCodeContainerStyle: {
    backgroundColor: Colors.PlaceholderBackground,
    width: wp(20),
    height: wp(18),
  },
  pinCodeTextStyle: {
    fontSize: FontSize.font24,
    fontFamily: FontFamily.SemiBold,
    color: Colors.Black,
  },
  focusStickStyle: {
    backgroundColor: Colors.Button,
  },
  focusedPinCodeContainerStyle: {
    borderColor: Colors.Button,
  },
};

export default VerifyCode;
