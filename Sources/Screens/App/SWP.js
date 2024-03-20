import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const SWP = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.SWP}></RNHeader>
    </RNContainer>
  );
};

export default SWP;

const styles = StyleSheet.create({});
