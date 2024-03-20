import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { Colors, wp } from '../Theme';
import { RNImage, RNStyles } from '../Common';
import { Images } from '../Constants';

const LOBack = ({ drawer, ...rest }) => {
  console.log('rest -> ', JSON.stringify(rest, null, 2));

  return (
    <TouchableOpacity style={styles.container}>
      <RNImage
        source={drawer ? Images.Drawer : Images.Back}
        style={RNStyles.image60}
      />
    </TouchableOpacity>
  );
};

const iconSize = wp(9);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.center,
    width: iconSize,
    height: iconSize,
    borderRadius: 100,
    backgroundColor: Colors.Button,
    marginLeft: wp(4),
  },
});

export default LOBack;
