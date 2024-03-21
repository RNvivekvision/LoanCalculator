import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles } from '../Common';
import { FontSize, wp } from '../Theme';

const LOButtons = ({ button1, button2, onButton1Press, onButton2Press }) => {
  return (
    <View style={RNStyles.flexRow}>
      <RNButton
        title={button1}
        style={styles.button}
        onPress={onButton1Press}
        textStyle={styles.buttonText}
      />
      <RNButton
        title={button2}
        style={styles.button}
        onPress={onButton2Press}
        textStyle={styles.buttonText}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: wp(1),
    marginBottom: 0,
  },
  buttonText: {
    fontSize: FontSize.font14,
  },
});

export default LOButtons;
