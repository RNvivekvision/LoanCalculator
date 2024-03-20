import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const PriceCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.PriceCalculator}></RNHeader>
    </RNContainer>
  );
};

export default PriceCalculator;

const styles = StyleSheet.create({});
