import React, { useCallback, useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { RNStyles, RNText } from '../Common';
import { Strings } from '../Constants';

const LOYearMonth = ({ onChange }) => {
  const [isYear, setisYear] = useState(true);

  const onButtonPress = bool => {
    setisYear(bool);
    onChange?.(bool);
  };

  const selectedStyle = useCallback(
    bool => ({
      backgroundColor: bool ? Colors.White : Colors.Transparent,
      borderRadius: bool ? wp(2) : 0,
    }),
    [],
  );

  return (
    <View style={styles.container}>
      <TouchableOpacity
        onPress={() => onButtonPress(true)}
        style={[styles.button, selectedStyle(isYear)]}>
        <RNText
          family={FontFamily.Medium}
          size={FontSize.font10}
          color={isYear ? Colors.Black : Colors.White}>
          {Strings.Year}
        </RNText>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => onButtonPress(false)}
        style={[styles.button, selectedStyle(!isYear)]}>
        <RNText
          family={FontFamily.Medium}
          size={FontSize.font10}
          color={!isYear ? Colors.Black : Colors.White}>
          {Strings.Month}
        </RNText>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    borderRadius: wp(2),
    backgroundColor: Colors.White + '20',
  },
  button: {
    ...RNStyles.center,
    paddingVertical: hp(1.2),
    width: wp(12),
  },
});

export default LOYearMonth;
