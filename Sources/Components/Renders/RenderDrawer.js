import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, wp } from '../../Theme';

const RenderDrawer = ({ item, onPress }) => {
  return (
    <TouchableOpacity
      onPress={() => onPress?.(item)}
      activeOpacity={0.6}
      style={styles.container}>
      <View style={styles.iconContainer}>
        <RNImage source={item.image} style={RNStyles.image50} />
      </View>
      <RNText
        family={FontFamily.Medium}
        size={FontSize.font14}
        color={Colors.Black}>
        {item.title}
      </RNText>
    </TouchableOpacity>
  );
};

const iconSize = wp(10);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    paddingHorizontal: wp(4),
    paddingVertical: wp(3),
  },
  iconContainer: {
    ...RNStyles.center,
    width: iconSize,
    height: iconSize,
    backgroundColor: Colors.Black,
    borderRadius: 100,
    marginRight: wp(3),
  },
});

export default RenderDrawer;
