import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import {
  RNGradient,
  RNIcon,
  RNImage,
  RNScrollView,
  RNStyles,
  RNText,
} from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images, Strings } from '../Constants';
import { DummyData } from '../Utils';
import { useInset } from '../Hooks';
import { HMEntity } from '../Components';
import { NavRoutes } from '../Navigation';

const UserProfile = ({ navigation }) => {
  const styles = useStyles();

  return (
    <View style={[RNStyles.container]}>
      <StatusBar backgroundColor={Colors.Primary1} translucent={true} />
      <RNGradient
        colors={[Colors.Primary1, Colors.Primary2]}
        style={[styles.container]}>
        <View style={styles.headerContainer}>
          <View style={RNStyles.flexRow}>
            <RNIcon
              icon={Images.Back}
              iconStyle={styles.iconStyle}
              onPress={() => navigation.goBack()}
            />

            <RNText
              pLeft={wp(2)}
              family={FontFamily.SemiBold}
              size={FontSize.font20}
              color={Colors.White}>
              {Strings.UserProfile}
            </RNText>
          </View>

          <RNIcon
            icon={Images.EditUserProfile}
            iconStyle={styles.iconStyle}
            onPress={() => navigation.navigate(NavRoutes.EditProfile)}
          />
        </View>

        <View style={{ alignItems: 'center' }}>
          <RNImage source={Images.Dummy_user1} style={styles.userImage} />
          <RNText
            pBottom={hp(1)}
            size={FontSize.font18}
            family={FontFamily.Medium}
            color={Colors.White}>
            {'Vana Starykova'}
          </RNText>
          <RNText pBottom={hp(3)} size={FontSize.font14} color={Colors.White}>
            {`user_name: ${'ystarykova'}`}
          </RNText>
        </View>
      </RNGradient>

      <RNScrollView>
        <View style={styles.UserDetailsContainer}>
          {DummyData.UserProfile.UserDetail.map((v, i) => (
            <View key={i} style={styles.UserDetails}>
              <RNText family={FontFamily.Medium}>{v.title}</RNText>
              <RNText style={styles.text}>{v.text}</RNText>
            </View>
          ))}
        </View>

        <HMEntity
          containerStyle={{ marginHorizontal: wp(4) }}
          data={DummyData.UserProfile.EntitiesAndRights}
          title={Strings.EntitiesandRights}
        />
      </RNScrollView>
    </View>
  );
};

const bottomRadius = wp(7);
const userImage = wp(30);
const borderColor = Colors.Black + '40';
const textColor = Colors.Black + '99';
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      paddingTop: inset.top,
      borderBottomLeftRadius: bottomRadius,
      borderBottomRightRadius: bottomRadius,
    },
    headerContainer: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
    iconStyle: {
      width: wp(7),
      height: wp(7),
      tintColor: Colors.White,
    },
    userImage: {
      width: userImage,
      height: userImage,
      borderRadius: 100,
      marginVertical: hp(1),
    },
    UserDetailsContainer: {
      ...RNStyles.flexWrapHorizontal,
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: wp(4),
      marginHorizontal: wp(4),
      marginVertical: hp(1),
      paddingVertical: hp(2),
    },
    UserDetails: {
      width: '50%',
      paddingHorizontal: wp(6),
      paddingVertical: hp(1),
    },
    text: {
      paddingTop: hp(1),
      fontSize: FontSize.font14,
      color: textColor,
    },
    entityContainer: {
      borderWidth: 1,
      borderColor: borderColor,
      borderRadius: wp(4),
      marginHorizontal: wp(4),
      marginVertical: hp(3),
    },
  });
};

export default UserProfile;
