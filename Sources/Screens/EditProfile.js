import React, { useRef, useState } from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import {
  RNButton,
  RNHeader,
  RNIcon,
  RNImage,
  RNStyles,
  RNText,
} from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { HMDropDown, HMEntity, HMInput } from '../Components';
import { Images, Strings } from '../Constants';
import { DummyData } from '../Utils';

const EditProfile = () => {
  const confirmPasswordRef = useRef();
  const [State, setState] = useState({
    language: null,
    password: '',
    confirmPassword: '',
    passwordSecure: true,
    confirmPasswordSecure: true,
  });

  return (
    <RNHeader style={{ paddingHorizontal: wp(4) }} title={Strings.EditProfile}>
      <View style={RNStyles.flexRowBetween}>
        <RNText size={FontSize.font18} family={FontFamily.Medium}>
          {Strings.EditUserProfile}
        </RNText>
        <TouchableOpacity style={RNStyles.flexRow}>
          <RNImage source={Images.Reset} style={RNStyles.icon} />
          <RNText color={Colors.Button} pLeft={wp(1)} textLine={'underline'}>
            {Strings.Reset}
          </RNText>
        </TouchableOpacity>
      </View>

      <HMInput title={`${Strings.Login}*`} placeholder={Strings.Peter} />
      <HMInput
        title={`${Strings.FullName}*`}
        placeholder={Strings.PeterParker}
      />
      <HMInput title={`${Strings.ShortName}*`} placeholder={'PP1'} />
      <HMInput title={Strings.Email} placeholder={Strings.dummyEmailAddress} />
      <HMDropDown
        title={Strings.Language}
        data={DummyData.UserProfile.Languages}
        placeholder={Strings.PleaseSelect}
        onChange={value => setState(p => ({ ...p, language: value }))}
        value={State.language}
      />

      <RNText size={FontSize.font18} pTop={hp(1)} family={FontFamily.Medium}>
        {Strings.Security}
      </RNText>

      <HMInput
        title={`${Strings.Password}*`}
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
        title={`${Strings.ReenterPassword}*`}
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

      <RNText pTop={hp(2)} color={Colors.Placeholder}>
        {Strings.ProfilePhoto}
      </RNText>
      <TouchableOpacity activeOpacity={0.6} style={styles.profilePicContainer}>
        <RNText family={FontFamily.SemiBold} size={FontSize.font30}>
          {'PPs'}
        </RNText>
        <RNIcon
          icon={Images.UpdateProfilePic}
          containerStyle={styles.profilePicIcon}
          iconStyle={RNStyles.image60}
        />
      </TouchableOpacity>

      <RNText
        size={FontSize.font18}
        pVertical={hp(0.5)}
        family={FontFamily.Medium}>
        {Strings.EntitiesandRights}
      </RNText>

      <HMEntity
        data={[{ title: 'HMS AG', text: 'Accounts User, Ops Admin' }]}
      />

      <TouchableOpacity style={styles.AddEntitiesContainer}>
        <RNText
          color={Colors.Button}
          textLine={'underline'}
          size={FontSize.font14}>
          {`+${Strings.AddEntitiesandRights}`}
        </RNText>
      </TouchableOpacity>

      <RNButton title={Strings.Add} />
    </RNHeader>
  );
};

const picSize = wp(30);
const styles = StyleSheet.create({
  profilePicContainer: {
    ...RNStyles.center,
    width: picSize,
    height: picSize,
    borderWidth: 1,
    borderRadius: 100,
    marginVertical: hp(1),
    borderWidth: wp(0.3),
    borderColor: Colors.Button,
    backgroundColor: Colors.PlaceholderBackground,
  },
  profilePicIcon: {
    borderRadius: 100,
    backgroundColor: Colors.Button,
    position: 'absolute',
    right: 0,
    bottom: 0,
  },
  AddEntitiesContainer: {
    alignSelf: 'flex-end',
    paddingVertical: hp(1),
    paddingBottom: hp(3),
  },
});

export default EditProfile;
