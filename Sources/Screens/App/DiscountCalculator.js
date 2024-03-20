import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const DiscountCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.DiscountCalculator}></RNHeader>
    </RNContainer>
  );
};

export default DiscountCalculator;

const styles = StyleSheet.create({});
