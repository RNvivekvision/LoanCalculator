import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const Theory = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.Theory}></RNHeader>
    </RNContainer>
  );
};

export default Theory;

const styles = StyleSheet.create({});
