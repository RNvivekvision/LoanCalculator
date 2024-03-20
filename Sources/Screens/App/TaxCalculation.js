import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const TaxCalculation = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.TaxCalculation}></RNHeader>
    </RNContainer>
  );
};

export default TaxCalculation;

const styles = StyleSheet.create({});
