import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const EMI = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.EMI}></RNHeader>
    </RNContainer>
  );
};

export default EMI;

const styles = StyleSheet.create({});
