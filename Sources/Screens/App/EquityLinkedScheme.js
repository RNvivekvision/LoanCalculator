import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const EquityLinkedScheme = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.EquityLinkedScheme}></RNHeader>
    </RNContainer>
  );
};

export default EquityLinkedScheme;

const styles = StyleSheet.create({});
