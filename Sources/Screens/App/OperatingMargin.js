import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const OperatingMargin = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.OperatingMargin}></RNHeader>
    </RNContainer>
  );
};

export default OperatingMargin;

const styles = StyleSheet.create({});
