import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNImage, RNStyles, RNText } from '../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../Theme';
import Reanimated, { ZoomIn } from 'react-native-reanimated';
import { Images, Strings } from '../Constants';
import { NavRoutes } from '../Navigation';

const EMICalculator = ({ onPress }) => {
  return (
    <Reanimated.View entering={ZoomIn.delay(200)} style={styles.container}>
      <View style={styles.content}>
        <RNText
          size={FontSize.font18}
          color={Colors.Black}
          family={FontFamily.Bold}>
          {Strings.EMICalculator}
        </RNText>
        <RNText
          size={FontSize.font14}
          family={FontFamily.Light}
          color={Colors.Black}>
          {Strings.Easyandfastway}
        </RNText>
        <RNButton
          title={Strings.CalculateNow}
          style={styles.button}
          textStyle={styles.buttonText}
          onPress={() => onPress?.({ navigate: NavRoutes.EMI })}
        />
      </View>
      <RNImage source={Images.EmiCalculator} style={styles.EmiCalculator} />
    </Reanimated.View>
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
    width: wp(33),
    paddingVertical: hp(1.5),
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
