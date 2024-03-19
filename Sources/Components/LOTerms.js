import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNImage, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const LOTerms = ({ containerStyle, onPress, title }) => {
  const [State, setState] = useState({ checked: true });
  const styles = useStyles({ ...State });

  const onBoxPress = () => {
    setState(p => ({ ...p, checked: !p.checked }));
    onPress?.(!State.checked);
  };

  return (
    <TouchableOpacity
      onPress={onBoxPress}
      style={[styles.container, containerStyle]}
      activeOpacity={0.6}>
      <View style={RNStyles.flexRow}>
        <View style={styles.Box}>
          {State.checked && (
            <RNImage source={Images.True} style={styles.icon} />
          )}
        </View>
        <RNText
          size={FontSize.font14}
          family={FontFamily.Medium}
          pHorizontal={wp(4)}>
          {title}
        </RNText>
      </View>
    </TouchableOpacity>
  );
};

const useStyles = ({ checked }) => {
  return StyleSheet.create({
    container: {
      paddingVertical: hp(2),
    },
    Box: {
      ...RNStyles.icon,
      ...RNStyles.center,
      borderWidth: checked ? 0 : 1,
      borderColor: Colors.White,
      borderRadius: wp(1),
      backgroundColor: checked ? Colors.Button : Colors.Transparent,
    },
    icon: {
      ...RNStyles.image70,
      borderRadius: wp(2),
      tintColor: Colors.White,
    },
  });
};

export default LOTerms;
