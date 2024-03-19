import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { RNStyles, RNImage, RNText } from '../Common';
import { Images } from '../Constants';
import { wp } from '../Theme';

const HMBack = ({ containerStyle, iconStyle, text }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      style={[styles.container, containerStyle]}
      onPress={() => navigation.goBack()}>
      <RNImage source={Images.Back} style={[RNStyles.icon, iconStyle]} />
      <RNText pHorizontal={wp(2)}>{text || 'Back'}</RNText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    alignSelf: 'flex-start',
  },
});

export default HMBack;
