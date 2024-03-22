import React from 'react';
import { StyleSheet, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { RNIcon, RNStyles, RNText, RNScrollView } from './index';
import { Images } from '../Constants';
import { useInset } from '../Hooks';

const RNHeader = ({
  title,
  scrollProps,
  containerStyle,
  titleStyle,
  children,
  style,
  footer,
  drawer,
  noScroll,
}) => {
  const navigation = useNavigation();
  const styles = useStyles();

  return (
    <View style={RNStyles.container}>
      <View style={[styles.Container, containerStyle]}>
        <RNIcon
          icon={drawer ? Images.Drawer : Images.Back}
          iconStyle={RNStyles.image60}
          onPress={() =>
            drawer ? navigation.openDrawer() : navigation.goBack()
          }
          containerStyle={styles.icon}
        />
        <RNText style={[styles.title, titleStyle]}>{title}</RNText>
      </View>
      {noScroll ? (
        children
      ) : (
        <RNScrollView style={style} scrollProps={scrollProps}>
          {children}
        </RNScrollView>
      )}
      {footer && <View style={styles.footer}>{footer}</View>}
    </View>
  );
};

const iconSize = wp(8);
const useStyles = () => {
  const inset = useInset();

  return StyleSheet.create({
    footer: {
      paddingBottom: inset.bottom,
    },
    Container: {
      ...RNStyles.flexRow,
      backgroundColor: Colors.Black,
      paddingHorizontal: wp(4),
      paddingTop: inset.top + hp(2),
      paddingVertical: hp(2),
    },
    icon: {
      ...RNStyles.center,
      width: iconSize,
      height: iconSize,
      borderRadius: 100,
    },
    title: {
      paddingHorizontal: hp(1),
      marginHorizontal: hp(1),
      fontSize: FontSize.font18,
      fontFamily: FontFamily.Medium,
      color: Colors.White,
      width: '80%',
      textAlign: 'center',
    },
  });
};

export default RNHeader;
