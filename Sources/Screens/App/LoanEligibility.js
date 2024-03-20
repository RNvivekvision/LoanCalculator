import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const LoanEligibility = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.LoanEligibility}></RNHeader>
    </RNContainer>
  );
};

export default LoanEligibility;

const styles = StyleSheet.create({});
