import React from 'react';
import { StyleSheet } from 'react-native';
import { Colors, hp, wp } from '../Theme';
import Reanimated, { FadeIn } from 'react-native-reanimated';

const LOContainer = ({ children }) => {
  return (
    <Reanimated.View entering={FadeIn.delay(200)} style={styles.container}>
      {children}
    </Reanimated.View>
  );
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
