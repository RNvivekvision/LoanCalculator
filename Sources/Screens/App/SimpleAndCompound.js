import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const SimpleAndCompound = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.SimpleAndCompound}></RNHeader>
    </RNContainer>
  );
};

export default SimpleAndCompound;

const styles = StyleSheet.create({});
