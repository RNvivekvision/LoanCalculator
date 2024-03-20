import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const MarginCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.MarginCalculator}></RNHeader>
    </RNContainer>
  );
};

export default MarginCalculator;

const styles = StyleSheet.create({});
