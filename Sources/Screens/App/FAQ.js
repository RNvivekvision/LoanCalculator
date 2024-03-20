import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const FAQ = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.ApplyLoan}></RNHeader>
    </RNContainer>
  );
};

export default FAQ;

const styles = StyleSheet.create({});
