import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const CurrencyConversion = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.CurrencyConversion}></RNHeader>
    </RNContainer>
  );
};

export default CurrencyConversion;

const styles = StyleSheet.create({});
