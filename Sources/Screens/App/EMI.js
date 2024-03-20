import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import {
  LOContainer,
  LODatePicker,
  LOInput,
  LOYearMonth,
  NativeAd,
} from '../../Components';
import { Strings } from '../../Constants';
import { hp } from '../../Theme';

const EMI = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.EMI}>
        <LOContainer>
          <LOInput
            title={'Principal Amount'}
            placeholder={'Principal Amount'}
          />
          <LOInput
            title={'Interest'}
            titlePlaceholder={'(max 50% per annum)'}
            percent={true}
            placeholder={'Interest'}
          />
          <LOInput
            title={'Loan Tenure'}
            titlePlaceholder={'(max 30yr)'}
            placeholder={'Loan Tenure'}>
            <LOYearMonth onChange={isYear => console.log({ isYear })} />
          </LOInput>
          <LODatePicker onDateChange={date => console.log({ date })} />
          <RNButton title={'Calculate'} style={{ marginTop: hp(2) }} />
          <RNButton title={'Statistic'} style={{ marginVertical: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOInput
            title={'Principal Amount'}
            placeholder={'Principal Amount'}
          />
          <LOInput
            title={'Interest'}
            titlePlaceholder={'(max 50% per annum)'}
            percent={true}
            placeholder={'Interest'}
          />
          <LOInput
            title={'Loan Tenure'}
            titlePlaceholder={'(max 30yr)'}
            placeholder={'Loan Tenure'}>
            <LOYearMonth onChange={isYear => console.log({ isYear })} />
          </LOInput>
          <LODatePicker onDateChange={date => console.log({ date })} />
          <RNButton title={'Calculate'} style={{ marginTop: hp(2) }} />
          <RNButton title={'Statistic'} style={{ marginVertical: 0 }} />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({});

export default EMI;
