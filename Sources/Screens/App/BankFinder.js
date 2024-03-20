import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const BankFinder = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.BankFinder}></RNHeader>
    </RNContainer>
  );
};

export default BankFinder;

const styles = StyleSheet.create({});
