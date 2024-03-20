import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const SIP = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.SIP}></RNHeader>
    </RNContainer>
  );
};

export default SIP;

const styles = StyleSheet.create({});
