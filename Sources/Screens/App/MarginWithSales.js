import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const MarginWithSales = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.MarginWithSales}></RNHeader>
    </RNContainer>
  );
};

export default MarginWithSales;

const styles = StyleSheet.create({});
