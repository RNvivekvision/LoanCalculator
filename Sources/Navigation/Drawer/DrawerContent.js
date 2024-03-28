import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { useInset, useDummyData } from '../../Hooks';
import { Images, Strings } from '../../Constants';
import { RenderDrawer } from '../../Components';
import { Functions } from '../../Utils';

const DrawerContent = ({ navigation }) => {
  const { Drawer } = useDummyData();
  const styles = useStyles();

  const onDrawerPress = async item => {
    try {
      if (item.rateUs) {
        await Functions.RateUs({
          onSuccess: s => console.log('Drawer rate us Success -> ', s),
          onError: e => console.log('Drawer rate us Error -> ', e),
        });
      }

      if (item.share) {
        await Functions.ShareApp();
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

const logoSize = wp(33);
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    container: {
      ...RNStyles.container,
      backgroundColor: Colors.White,
    },
    logoContainer: {
      paddingTop: inset.top,
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
      bottom: -hp(6),
      alignSelf: 'center',
      borderRadius: wp(3),
    },
    ListContainer: {
      marginTop: hp(8),
    },
  });
};

export default DrawerContent;
