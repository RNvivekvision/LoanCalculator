import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const ATMFinder = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.ATMFinder}></RNHeader>
    </RNContainer>
  );
};

export default ATMFinder;

const styles = StyleSheet.create({});
