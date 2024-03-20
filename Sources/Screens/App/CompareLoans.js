import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const CompareLoans = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.CompareLoans}></RNHeader>
    </RNContainer>
  );
};

export default CompareLoans;

const styles = StyleSheet.create({});
