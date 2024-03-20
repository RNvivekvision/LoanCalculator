import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const RecurringDeposit = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.RecurringDeposit}></RNHeader>
    </RNContainer>
  );
};

export default RecurringDeposit;

const styles = StyleSheet.create({});
