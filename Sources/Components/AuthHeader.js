import React from 'react';
import { StatusBar, StyleSheet, View } from 'react-native';
import { RNGradient, RNImage, RNScrollView, RNStyles } from '../Common';
import { Colors, hp, wp } from '../Theme';
import { Images } from '../Constants';
import { useInset } from '../Hooks';

const AuthHeader = ({
  children,
  containerStyle,
  gradientStyle,
  contentContainerStyle,
  scrollProps,
}) => {
  const styles = useStyles();
  return (
    <View style={[RNStyles.container, containerStyle]}>
      <StatusBar backgroundColor={Colors.Primary1} translucent={true} />
      <RNGradient
        colors={[Colors.Primary1, Colors.Primary2]}
        style={[styles.container, gradientStyle]}>
        <RNImage source={Images.AppLogo} style={styles.logo} />
      </RNGradient>
      <RNScrollView
        style={[styles.content, contentContainerStyle]}
        scrollProps={scrollProps}>
        {children}
      </RNScrollView>
    </View>
  );
};

const bottomRadius = wp(5);
const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    container: {
      ...RNStyles.center,
      paddingTop: inset.top,
      height: hp(25),
      borderBottomLeftRadius: bottomRadius,
      borderBottomRightRadius: bottomRadius,
    },
    logo: {
      width: '60%',
      height: hp(10),
      marginBottom: hp(2),
    },
    content: {
      ...RNStyles.container,
      paddingHorizontal: wp(4),
    },
  });
};

export default AuthHeader;
