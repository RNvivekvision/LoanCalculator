import React from 'react';
import { StyleSheet } from 'react-native';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import {
  LOContainer,
  LODatePicker,
  LOInput,
  LOYearMonth,
  NativeAd,
  LOResult,
  LOButtons,
} from '../../Components';
import { Images, Strings } from '../../Constants';
import { hp } from '../../Theme';

const EMI = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.EMI}>
        <LOContainer>
          <LOInput
            title={Strings.PrincipalAmount}
            placeholder={Strings.PrincipalAmount}
          />
          <LOInput
            title={Strings.Interest}
            titlePlaceholder={Strings.max50perannum}
            percent={true}
            placeholder={Strings.Interest}
          />
          <LOInput
            title={Strings.LoanTenure}
            titlePlaceholder={Strings.max30yr}
            placeholder={Strings.LoanTenure}>
            <LOYearMonth onChange={isYear => console.log({ isYear })} />
          </LOInput>
          <LODatePicker onDateChange={date => console.log({ date })} />
          <RNButton title={Strings.Calculate} style={{ marginTop: hp(2) }} />
          <RNButton title={Strings.Statistic} style={{ marginVertical: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.TotalInterest, value: 0 },
              { title: Strings.TotalPrinciple, value: 0 },
            ]}
          />
          <LOResult
            title={Strings.TotalPaymentPrincipleInterest}
            value={0}
            needBGColor={true}
          />
          <LOResult title={Strings.LoanLastDate} icon={Images.Calendar} />
          <LOResult
            title={Strings.EMIMonthlyPayment}
            value={0}
            needBGColor={true}
          />
          <LOButtons
            button1={Strings.ShareResult}
            button2={Strings.ConvertPDF}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({});

export default EMI;
