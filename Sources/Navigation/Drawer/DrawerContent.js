import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useSelector } from 'react-redux';
import { Colors, FontFamily, FontSize, hp, normalize, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { useInset, useDummyData, useUserClick } from '../../Hooks';
import { Images, Strings } from '../../Constants';
import { RenderDrawer } from '../../Components';
import { Functions } from '../../Utils';
import NavRoutes from '../NavRoutes';

const DrawerContent = ({ navigation }) => {
  const { adData } = useSelector(({ UserReducer }) => UserReducer);
  const { Drawer } = useDummyData();
  const { incrementCount } = useUserClick();
  const styles = useStyles();

  const onDrawerPress = async item => {
    incrementCount();
    try {
      // console.log({ item });
      if (item.share) {
        await Functions.ShareApp();
      }
      if (item.rateUs) {
        await Functions.RateUs({
          onSuccess: s => console.log('Drawer rate us Success -> ', s),
          onError: e => console.log('Drawer rate us Error -> ', e),
        });
      }
      if (item.privacyPolicy) {
        Functions.OpenUrl(adData?.appPrivacyPolicyLink);
      }
      if (item.aboutUs) {
        navigation.navigate(NavRoutes.AboutUs);
      }

      setTimeout(() => {
        navigation.closeDrawer();
      }, 100);
    } catch (e) {
      console.error('Error onDrawerPress -> ', e);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.logoContainer}>
        <RNText style={styles.title}>{Strings.LoanEMICalculator}</RNText>
        <RNImage source={Images.Logo} style={styles.logo} />
      </View>

      <View style={styles.ListContainer}>
        {Drawer.map((v, i) => (
          <RenderDrawer key={i} item={v} onPress={onDrawerPress} />
        ))}
      </View>
    </View>
  );
};

const logoSize = normalize(110);
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      ...RNStyles.container,
      backgroundColor: Colors.White,
    },
    logoContainer: {
      paddingTop: inset.top + hp(1),
      backgroundColor: Colors.Button,
      height: hp(23),
    },
    title: {
      paddingVertical: hp(1),
      textAlign: 'center',
      fontFamily: FontFamily.Bold,
      color: Colors.Black,
      fontSize: FontSize.font20,
    },
    logo: {
      width: logoSize,
      height: logoSize,
      position: 'absolute',
      bottom: -wp(12),
      alignSelf: 'center',
      borderRadius: wp(3),
    },
    ListContainer: {
      marginTop: hp(8),
    },
  });
};

export default DrawerContent;
