import React from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { RNImage, RNStyles, RNText } from '../../Common';
import { useNavigation } from '@react-navigation/native';

const VStack = ({ item }) => {
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
    ...RNStyles.center,
    backgroundColor: Colors.White + '20',
    marginHorizontal: wp(1.5),
    height: hp(14),
    width: wp(27),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
    marginBottom: hp(1.5),
  },
  image: {
    ...RNStyles.center,
    width: iconSize,
    height: iconSize,
    backgroundColor: Colors.Button,
    borderRadius: 100,
  },
  title: {
    textAlign: 'center',
    paddingTop: hp(1.5),
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
  },
});

export default VStack;
