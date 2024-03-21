import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { RNText, RNStyles } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const RenderTopTabs = ({ item, selectedTab, onPress }) => {
  const styles = useStyles({ selectedTab });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onPress?.(item)}
      style={styles.container}>
      <RNText style={styles.title}>{item}</RNText>
    </TouchableOpacity>
  );
};

const useStyles = ({ selectedTab }) => {
  return StyleSheet.create({
    container: {
      ...RNStyles.center,
      backgroundColor: selectedTab ? Colors.Button : Colors.White + '10',
      width: wp(25),
      height: hp(5),
      marginHorizontal: wp(2),
      borderRadius: wp(3),
    },
    title: {
      fontSize: FontSize.font14,
      fontFamily: FontFamily.Medium,
      color: selectedTab ? Colors.Black : Colors.White,
    },
  });
};

export default RenderTopTabs;
