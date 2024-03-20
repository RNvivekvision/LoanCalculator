import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const Lumpsum = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.Lumpsum}></RNHeader>
    </RNContainer>
  );
};

export default Lumpsum;

const styles = StyleSheet.create({});
