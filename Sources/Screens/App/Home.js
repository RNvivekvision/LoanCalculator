import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader, RNText } from '../../Common';
import { Strings } from '../../Constants';

const Home = () => {
  return (
    <RNContainer>
      <RNHeader drawer={true} title={Strings.LoanEMICalculator}></RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
