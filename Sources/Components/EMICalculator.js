import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNImage, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import { Images } from '../Constants';

const EMICalculator = () => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <RNText
          size={FontSize.font18}
          color={Colors.Black}
          family={FontFamily.Bold}>
          {'EMI Calculator'}
        </RNText>
        <RNText
          size={FontSize.font14}
          family={FontFamily.Light}
          color={Colors.Black}>
          {'Easy and fast way to calculator your loan EMI'}
        </RNText>
        <RNButton
          title={'Calculate Now'}
          style={styles.button}
          textStyle={styles.buttonText}
        />
      </View>

      <RNImage source={Images.EmiCalculator} style={styles.EmiCalculator} />
    </View>
  );
};

const iconSize = wp(35);
const styles = StyleSheet.create({
  container: {
    ...RNStyles.flexRow,
    backgroundColor: Colors.Button,
    marginHorizontal: wp(4),
    paddingVertical: hp(1),
    paddingHorizontal: wp(5),
    borderRadius: wp(3),
  },
  content: {
    flex: 1,
  },
  EmiCalculator: {
    width: iconSize,
    height: iconSize,
  },
  button: {
    backgroundColor: Colors.Black,
    width: wp(30),
    paddingVertical: hp(1),
    marginHorizontal: 0,
    marginTop: hp(2),
    marginBottom: 0,
  },
  buttonText: {
    color: Colors.White,
    fontSize: FontSize.font12,
  },
});

export default EMICalculator;
