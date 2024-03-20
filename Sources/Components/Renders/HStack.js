import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { useNavigation } from '@react-navigation/native';

const HStack = ({ item, onPress }) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(item.navigate)}
      activeOpacity={0.6}
      style={styles.container}>
      <View style={styles.image}>
        <RNImage source={item.image} style={RNStyles.image70} />
      </View>
      <RNText style={styles.title}>{item.title}</RNText>
    </TouchableOpacity>
  );
};

const iconSize = wp(12);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRowCenter,
    backgroundColor: Colors.White + '20',
    marginHorizontal: wp(1.5),
    // height: hp(14),
    width: wp(42),
    paddingHorizontal: wp(4),
    borderRadius: wp(4),
    marginBottom: hp(1.5),
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
    paddingLeft: wp(2),
  },
});

export default HStack;
