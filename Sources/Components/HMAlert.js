import React from 'react';
import {
  Keyboard,
  Modal,
  StyleSheet,
  TouchableWithoutFeedback,
  View,
} from 'react-native';
import { RNStyles, RNButton } from '../Common';
import { Colors, hp, wp } from '../Theme';
import { HMFilterTitle } from './index';

const HMAlert = ({
  visible,
  onClose,
  animationType,
  containerStyle,
  children,
  title,
  buttontext,
  buttonStyle,
  titleProps,
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
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <View style={styles.overlay}>
          <View style={[styles.container, containerStyle]}>
            <HMFilterTitle
              title={title}
              onClosePress={onClose}
              containerStyle={styles.titleContainer}
              {...titleProps}
            />
            {children}
            <RNButton
              title={buttontext}
              style={[styles.button, buttonStyle]}
              {...buttonProps}
            />
          </View>
        </View>
      </TouchableWithoutFeedback>
    </Modal>
  );
};

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
  titleContainer: {
    paddingHorizontal: 0,
    paddingTop: hp(1.5),
  },
  button: {
    marginTop: hp(3),
  },
});

export default HMAlert;
