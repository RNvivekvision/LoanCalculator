import React, { useState } from 'react';
import { RNButton, RNDevider, RNText } from '../../Common';
import { AuthHeader, HMBack, HMInput } from '../../Components';
import { FontFamily, FontSize, hp } from '../../Theme';
import { NavRoutes } from '../../Navigation';
import { Strings } from '../../Constants';

const ForgotPassword = ({ navigation }) => {
  const [State, setState] = useState({ email: '' });

  return (
    <AuthHeader>
      <HMBack />

      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.SemiBold}>
        {Strings.ForgotPassword + '?'}
      </RNText>

      <RNText size={FontSize.font12} spacing={1} pVertical={hp(2)}>
        {Strings.ForgotPasswordDesc}
      </RNText>

      <RNDevider style={{ marginBottom: hp(1) }} />

      <HMInput
        title={Strings.EmailAddress + '*'}
        placeholder={Strings.dummyEmailAddress}
        value={State.email}
        onChangeText={v => setState(p => ({ ...p, email: v.trim() }))}
        keyboardType={'email-address'}
        // error={errorEmail}
      />

      <RNButton
        title={Strings.SendEmail}
        style={{ marginTop: hp(5) }}
        onPress={() => navigation.navigate(NavRoutes.VerifyCode)}
      />
    </AuthHeader>
  );
};

export default ForgotPassword;
