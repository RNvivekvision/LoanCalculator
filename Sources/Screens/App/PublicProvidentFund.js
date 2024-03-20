import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const PublicProvidentFund = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.PublicProvidentFund}></RNHeader>
    </RNContainer>
  );
};

export default PublicProvidentFund;

const styles = StyleSheet.create({});
