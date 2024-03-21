import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { Strings } from '../../Constants';
import {
  LOButtons,
  LOContainer,
  LOInput,
  LOResult,
  NativeAd,
} from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';

const TaxCalculation = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.TaxCalculation}>
        <LOContainer>
          <LOInput title={Strings.Amount} />
          <LOInput
            title={Strings.RateOfTax}
            titlePlaceholder={Strings.max50yr}
            percent={true}
          />
          <View style={styles.GST}>
            <RNText size={FontSize.font12} family={FontFamily.Medium}>
              {Strings.GSTisAdded}
            </RNText>
          </View>

          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.NetAmount} value={0} needBGColor={true} />
          <LOResult title={Strings.GSTAmount} value={0} needBGColor={true} />
          <LOResult title={Strings.TotalAmount} value={0} needBGColor={true} />
          <LOButtons
            button1={Strings.ShareResult}
            button2={Strings.ConvertPDF}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  GST: {
    backgroundColor: Colors.White + '10',
    paddingVertical: hp(1.5),
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
    marginVertical: hp(1),
  },
});

export default TaxCalculation;
