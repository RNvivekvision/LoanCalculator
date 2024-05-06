import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import Reanimated, { ZoomIn } from 'react-native-reanimated';

const HStack = ({ item, index, onPress }) => {
  return (
    <Reanimated.View
      entering={ZoomIn.delay(index * 200)}
      style={styles.container}>
      <TouchableOpacity
        onPress={() => onPress?.(item)}
        activeOpacity={0.6}
        style={styles.card}>
        <View style={styles.image}>
          <RNImage source={item.image} style={RNStyles.image70} />
        </View>
        <RNText style={styles.title}>{item.title}</RNText>
      </TouchableOpacity>
    </Reanimated.View>
  );
};

const iconSize = wp(12);
const styles = StyleSheet.create({
  container: {
    width: wp(42),
    marginHorizontal: wp(1.9),
    borderRadius: wp(4),
    marginBottom: hp(2),
    backgroundColor: Colors.White + '15',
  },
  card: {
    ...RNStyles.flexRowCenter,
    paddingHorizontal: wp(3),
    borderRadius: wp(4),
    paddingVertical: hp(2),
  },
  image: {
    ...RNStyles.center,
    width: iconSize,
    height: iconSize,
    backgroundColor: Colors.Button,
    borderRadius: 100,
  },
  title: {
    flex: 1,
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
    paddingHorizontal: wp(2),
  },
});

export default HStack;
