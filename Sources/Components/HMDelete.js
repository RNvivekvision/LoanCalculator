import React from 'react';
import { Modal, StyleSheet, View } from 'react-native';
import { RNStyles, RNButton, RNImage, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images, Strings } from '../Constants';

const HMDelete = ({
  visible,
  onClose,
  animationType,
  containerStyle,
  title,
  titleStyle,
  text,
  textStyle,
  buttontext,
  buttonStyle,
  buttonProps,
  ...modalProps
}) => {
  return (
    <Modal
      visible={visible}
      onRequestClose={onClose}
      transparent={true}
      animationType={animationType || 'fade'}
      {...modalProps}>
      <View style={styles.overlay}>
        <View style={[styles.container, containerStyle]}>
          <View style={styles.iconContainer}>
            <RNImage source={Images.Delete} style={RNStyles.image50} />
          </View>
          <RNText style={[styles.title, titleStyle]}>{title}</RNText>
          <RNText style={[styles.text, textStyle]}>{text}</RNText>
          <RNButton
            title={buttontext || Strings.Delete}
            style={[styles.button, buttonStyle]}
            {...buttonProps}
          />
        </View>
      </View>
    </Modal>
  );
};

const iconSize = wp(20);
const styles = StyleSheet.create({
  overlay: {
    ...RNStyles.container,
    ...RNStyles.center,
    backgroundColor: Colors.Black + '40',
  },
  container: {
    backgroundColor: Colors.White,
    borderRadius: wp(4),
    width: wp(90),
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  iconContainer: {
    ...RNStyles.center,
    width: iconSize,
    height: iconSize,
    borderRadius: 100,
    backgroundColor: Colors.Delete + '15',
    alignSelf: 'center',
    marginVertical: hp(1),
  },
  title: {
    textAlign: 'center',
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Medium,
    paddingVertical: hp(1),
    paddingHorizontal: wp(4),
  },
  text: {
    textAlign: 'center',
    fontSize: FontSize.font14,
    paddingHorizontal: wp(4),
  },
  button: {
    marginTop: hp(3),
    backgroundColor: Colors.Delete,
  },
});

export default HMDelete;
