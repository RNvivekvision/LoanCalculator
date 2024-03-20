import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader, RNText } from '../../Common';
import { Strings } from '../../Constants';
import { EMICalculator, LOScreens } from '../../Components';

const Home = () => {
  return (
    <RNContainer>
      <RNHeader drawer={true} title={Strings.LoanEMICalculator}>
        <EMICalculator />

        <LOScreens />
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  container: {},
});

export default Home;
