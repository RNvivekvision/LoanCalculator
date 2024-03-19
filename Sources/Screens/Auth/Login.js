import React, { useRef, useState } from 'react';
import { TouchableOpacity } from 'react-native';
import { AuthHeader, RememberMe, HMInput } from '../../Components';
import { RNButton, RNDevider, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp } from '../../Theme';
import { Images, Strings } from '../../Constants';
import { NavRoutes } from '../../Navigation';

const Login = ({ navigation }) => {
  const passwordRef = useRef();
  const [State, setState] = useState({
    email: '',
    password: '',
    passwordSecure: true,
  });

  return (
    <AuthHeader>
      <RNText pTop={hp(2)} size={FontSize.font28} family={FontFamily.SemiBold}>
        {Strings.Signintoyouraccount}
      </RNText>

      <RNText size={FontSize.font14} spacing={1} pVertical={hp(2)}>
        {Strings.Letsgetstarted}
      </RNText>

      <RNDevider style={{ marginBottom: hp(1) }} />

      <HMInput
        title={Strings.EmailAddress + '*'}
        placeholder={Strings.dummyEmailAddress}
        value={State.email}
        onChangeText={v => setState(p => ({ ...p, email: v.trim() }))}
        keyboardType={'email-address'}
        onSubmitEditing={() => passwordRef.current.focus()}
        // error={errorEmail}
      />

      <HMInput
        ref={passwordRef}
        title={Strings.Password + '*'}
        returnKeyType={'done'}
        placeholder={Strings.dummyPassword}
        value={State.password}
        onChangeText={v => setState(p => ({ ...p, password: v }))}
        secureTextEntry={State.passwordSecure}
        icon={State.passwordSecure ? Images.Show : Images.Hide}
        onIconPress={() =>
          setState(p => ({ ...p, passwordSecure: !p.passwordSecure }))
        }
      />

      <RememberMe onPress={isRemember => console.log({ isRemember })}>
        <TouchableOpacity
          onPress={() => navigation.navigate(NavRoutes.ForgotPassword)}
          activeOpacity={0.6}>
          <RNText size={FontSize.font14} color={Colors.Button}>
            {Strings.ForgotPassword + '?'}
          </RNText>
        </TouchableOpacity>
      </RememberMe>

      <RNButton
        title={Strings.Login}
        onPress={() => navigation.replace(NavRoutes.Drawer)}
      />
    </AuthHeader>
  );
};

export default Login;
