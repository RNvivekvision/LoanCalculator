import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const FixedDeposit = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.FixedDeposit}></RNHeader>
    </RNContainer>
  );
};

export default FixedDeposit;

const styles = StyleSheet.create({});
