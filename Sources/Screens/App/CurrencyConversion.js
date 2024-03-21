import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, NativeAd } from '../../Components';
import { Colors, FontFamily, hp } from '../../Theme';

const CurrencyConversion = () => {
  const currencies = [
    '0 INR',
    '0 Dollar',
    '0 Euro',
    '0 Dihram',
    '0 Yen',
    '0 Pound',
  ];
  return (
    <RNContainer>
      <RNHeader title={Strings.CurrencyConversion}>
        <LOContainer>
          <LOInput title={Strings.Amount} />
          <LOInput title={Strings.CurrencyOfTheAmount} />
          <RNButton title={Strings.Calculate} style={{ marginBottom: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <RNText family={FontFamily.Medium} pBottom={hp(2)}>
            {Strings.AmountInDifferentCurrency}
          </RNText>
          {currencies.map((v, i) => (
            <View key={i} style={styles.renderContainer}>
              <RNText style={styles.renderText}>{v}</RNText>
            </View>
          ))}
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  renderContainer: {
    paddingVertical: hp(1.5),
    borderBottomWidth: 1,
    borderBlockColor: Colors.White + '30',
  },
  renderText: {
    color: Colors.Button,
    textAlign: 'center',
    fontFamily: FontFamily.Medium,
  },
});

export default CurrencyConversion;
