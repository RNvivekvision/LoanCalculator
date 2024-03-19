import React, { useRef, useState } from 'react';
import { AuthHeader, RememberMe, HMBack, HMInput } from '../../Components';
import { RNButton, RNDevider, RNText } from '../../Common';
import { FontFamily, FontSize, hp } from '../../Theme';
import { Images, Strings } from '../../Constants';

const ResetPassword = ({ navigation }) => {
  const [State, setState] = useState({
    password: '',
    confirmPassword: '',
    passwordSecure: true,
    confirmPasswordSecure: true,
  });
  const confirmPasswordRef = useRef();

  return (
    <AuthHeader>
      <HMBack />

      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.SemiBold}>
        {Strings.ResetYourPassword}
      </RNText>

      <RNText size={FontSize.font12} spacing={1} pVertical={hp(2)}>
        {Strings.ResetYourPasswordDesc}
      </RNText>

      <RNDevider style={{ marginBottom: hp(1) }} />

      <HMInput
        title={Strings.Password + '*'}
        returnKeyType={'done'}
        placeholder={Strings.dummyPassword}
        value={State.password}
        onChangeText={v => setState(p => ({ ...p, password: v }))}
        onSubmitEditing={() => confirmPasswordRef.current.focus()}
        secureTextEntry={State.passwordSecure}
        icon={State.passwordSecure ? Images.Show : Images.Hide}
        onIconPress={() =>
          setState(p => ({ ...p, passwordSecure: !p.passwordSecure }))
        }
      />

      <HMInput
        ref={confirmPasswordRef}
        title={Strings.ReenterPassword + '*'}
        returnKeyType={'done'}
        placeholder={Strings.dummyPassword}
        value={State.confirmPassword}
        onChangeText={v => setState(p => ({ ...p, confirmPassword: v }))}
        secureTextEntry={State.confirmPasswordSecure}
        icon={State.confirmPasswordSecure ? Images.Show : Images.Hide}
        onIconPress={() =>
          setState(p => ({
            ...p,
            confirmPasswordSecure: !p.confirmPasswordSecure,
          }))
        }
      />

      <RememberMe onPress={isRemember => console.log({ isRemember })} />

      <RNButton
        title={Strings.SetPassword}
        style={{ marginTop: hp(3) }}
        onPress={() => navigation.popToTop()}
      />
    </AuthHeader>
  );
};

export default ResetPassword;
