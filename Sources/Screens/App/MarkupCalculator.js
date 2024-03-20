import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const MarkupCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.MarkupCalculator}></RNHeader>
    </RNContainer>
  );
};

export default MarkupCalculator;

const styles = StyleSheet.create({});
