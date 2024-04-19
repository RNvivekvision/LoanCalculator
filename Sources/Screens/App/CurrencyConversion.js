import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { LOContainer, LOInput, NativeAd, LODropDown } from '../../Components';
import { Colors, FontFamily, hp } from '../../Theme';
import { DummyData, Functions } from '../../Utils';
import { Strings } from '../../Constants';
import { useUserClicks } from '../../Hooks';

const { currencies, exchangeRates } = DummyData.CurrencyConversion;

const CurrencyConversion = () => {
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState({
    amount: '',
    currencyOfTheAmount: currencies[0],
    currencies: currencies,
  });

  const onCalculatePress = () => {
    increaseCount();
    const convertedCurrencies = currencies.map(currency => {
      const convertedAmount =
        (parseFloat(State.amount) * exchangeRates[currency.label]) /
        exchangeRates[State.currencyOfTheAmount.label];
      return { ...currency, text: Functions.toFixed(convertedAmount) };
    });
    console.log({ convertedCurrencies });
    setState(p => ({ ...p, currencies: convertedCurrencies }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.CurrencyConversion}>
        <LOContainer>
          <LOInput
            title={Strings.Amount}
            value={State.amount}
            onChangeText={v => setState(p => ({ ...p, amount: v }))}
          />
          <LODropDown
            title={Strings.CurrencyOfTheAmount}
            data={currencies}
            onChange={v => setState(p => ({ ...p, currencyOfTheAmount: v }))}
            value={State.currencyOfTheAmount?.value}
          />
          <RNButton
            title={Strings.Calculate}
            style={{ marginBottom: 0 }}
            onPress={onCalculatePress}
          />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <RNText family={FontFamily.Medium} pBottom={hp(2)}>
            {Strings.AmountInDifferentCurrency}
          </RNText>
          {State.currencies.map((v, i) => (
            <View key={i} style={styles.renderContainer}>
              <RNText
                style={styles.renderText}>{`${v.text} ${v.label}`}</RNText>
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
