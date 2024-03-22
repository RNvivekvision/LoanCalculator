import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import {
  LOButtons,
  LOContainer,
  LOInput,
  LOResult,
  NativeAd,
} from '../../Components';

const TaxCalculation = () => {
  const [State, setState] = useState({
    amount: '',
    rateOfTax: '',
    net: 0,
    gst: 0,
    total: 0,
  });

  const onCalculatePress = () => {
    const amount = parseFloat(State.amount);
    const interest = parseFloat(State.rateOfTax);
    const tax = amount * (interest / 100);
    const net = amount + tax;
    const total = amount + tax;
    setState(p => ({ ...p, net: net, gst: tax, total: total }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.TaxCalculation}>
        <LOContainer>
          <LOInput
            title={Strings.Amount}
            value={State.amount}
            onChangeText={v => setState(p => ({ ...p, amount: v }))}
          />
          <LOInput
            title={Strings.RateOfTax}
            titlePlaceholder={Strings.max50yr}
            percent={true}
            maxLength={2}
            value={State.rateOfTax}
            onChangeText={v => setState(p => ({ ...p, rateOfTax: v }))}
          />
          <View style={styles.GST}>
            <RNText size={FontSize.font12} family={FontFamily.Medium}>
              {Strings.GSTisAdded}
            </RNText>
          </View>

          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            title={Strings.NetAmount}
            value={State.net}
            needBGColor={true}
          />
          <LOResult
            title={Strings.GSTAmount}
            value={State.gst}
            needBGColor={true}
          />
          <LOResult
            title={Strings.TotalAmount}
            value={State.amount}
            needBGColor={true}
          />
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
