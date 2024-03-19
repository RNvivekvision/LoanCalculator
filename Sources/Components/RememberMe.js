import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../Common';
import { Colors, FontSize, wp } from '../Theme';
import { Images, Strings } from '../Constants';

const RememberMe = ({ containerStyle, onPress, title, children }) => {
  const [State, setState] = useState({ checkbox: true });

  const onCheckBoxPress = () => {
    setState(p => ({ ...p, checkbox: !p.checkbox }));
    onPress?.(!State.checkbox);
  };

  return (
    <View style={RNStyles.flexRowBetween}>
      <TouchableOpacity
        onPress={onCheckBoxPress}
        style={[styles.container, containerStyle]}
        activeOpacity={0.6}>
        <View style={RNStyles.flexRow}>
          {State.checkbox ? (
            <RNImage source={Images.CheckboxTrue} style={styles.icon} />
          ) : (
            <View style={styles.Box} />
          )}
          <RNText
            size={FontSize.font14}
            pHorizontal={wp(2)}
            color={Colors.Black}>
            {Strings.Rememberme}
          </RNText>
        </View>
      </TouchableOpacity>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: wp(5),
  },
  Box: {
    ...RNStyles.icon,
    borderWidth: 1,
    borderColor: Colors.Black,
    borderRadius: wp(1),
  },
  icon: {
    ...RNStyles.icon,
    borderRadius: wp(2),
    tintColor: Colors.Button,
  },
});

export default RememberMe;
