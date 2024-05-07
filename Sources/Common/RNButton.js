import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, FontFamily, hp, wp } from '../Theme';
import RNPagginationLoader from './RNPagginationLoader';
import RNStyles from './RNStyles';
import RNText from './RNText';
import RNImage from './RNImage';

const RNButton = ({
  title,
  style,
  textStyle,
  onPress,
  disable,
  icon,
  iconStyle,
  isLoading,
}) => {
  const styles = useStyles({ disable });

  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={0.5}
      disabled={disable}
      style={[styles.Container, style]}>
      {isLoading ? (
        <RNPagginationLoader size={'small'} color={Colors.White} />
      ) : (
        <>
          {icon && <RNImage source={icon} style={[styles.icon, iconStyle]} />}
          <RNText style={[styles.buttonText, textStyle]}>{title}</RNText>
        </>
      )}
    </TouchableOpacity>
  );
};

const iconSize = wp(6);
const useStyles = ({ disable }) => {
  return StyleSheet.create({
    Container: {
      ...RNStyles.center,
      ...RNStyles.flexRow,
      backgroundColor: disable ? Colors.Placeholder : Colors.Button,
      paddingVertical: hp(1.7),
      paddingHorizontal: wp(4),
      marginHorizontal: wp(4),
      marginVertical: hp(1),
      borderRadius: 100,
    },
    buttonText: {
      fontFamily: FontFamily.Bold,
      color: Colors.Black,
    },
    icon: {
      width: iconSize,
      height: iconSize,
      marginRight: wp(2),
    },
  });
};

export default RNButton;
