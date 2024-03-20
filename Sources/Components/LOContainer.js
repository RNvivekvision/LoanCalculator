import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Colors, hp, wp } from '../Theme';

const LOContainer = ({ children }) => {
  return <View style={styles.container}>{children}</View>;
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: wp(4),
    marginVertical: hp(1),
    backgroundColor: Colors.White + '15',
    borderRadius: wp(4),
    paddingVertical: hp(3),
    paddingHorizontal: wp(5),
  },
});

export default LOContainer;
