import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Images, Strings } from '../../Constants';
import {
  LOContainer,
  LODatePicker,
  LOInput,
  LOYearMonth,
  NativeAd,
  LOResult,
  LOButtons,
} from '../../Components';
import { Functions } from '../../Utils';

const EMI = () => {
  const [State, setState] = useState({
    principalAmount: '',
    interest: '',
    loanTenure: null,
    isYear: true,
    date: null,
    totalInterest: 0,
    totalPrinciple: 0,
    totalPayment: 0,
    loanLastDate: null,
    emi: 0,
  });

  // console.log('State -> ', JSON.stringify(State, null, 2));

  const settingUpState = ({ key, value }) => {
    setState(p => ({ ...p, [key]: value }));
  };

  const onCalculatePress = () => {
    const { principalAmount, interest, loanTenure, isYear, date } = State;
    const monthlyInterestRate = interest / 12 / 100;
    const tenureMonths = isYear ? 12 * loanTenure : loanTenure;

    const emi = Functions.toFixed(
      (principalAmount *
        monthlyInterestRate *
        Math.pow(1 + monthlyInterestRate, tenureMonths)) /
        (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1),
    );
    const totalPayment = Functions.toFixed(emi * tenureMonths);
    const totalPrinciple =
      parseInt(principalAmount) > 0 ? parseInt(principalAmount) : 0;
    const totalInterest = Functions.toFixed(totalPayment - principalAmount);
    const loanLastDate = Functions.loanTenure(date, tenureMonths - 1);

    setState(p => ({
      ...p,
      totalInterest: totalInterest,
      totalPrinciple: totalPrinciple,
      totalPayment: totalPayment,
      loanLastDate: loanLastDate,
      emi: emi,
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.EMI}>
        <LOContainer>
          <LOInput
            title={Strings.PrincipalAmount}
            placeholder={Strings.PrincipalAmount}
            value={State.principalAmount}
            onChangeText={v =>
              settingUpState({ key: 'principalAmount', value: v })
            }
          />
          <LOInput
            title={Strings.Interest}
            titlePlaceholder={Strings.max50perannum}
            percent={true}
            placeholder={Strings.Interest}
            value={State.interest}
            maxLength={2}
            onChangeText={v => settingUpState({ key: 'interest', value: v })}
          />
          <LOInput
            title={Strings.LoanTenure}
            titlePlaceholder={Strings.max30yr}
            placeholder={Strings.LoanTenure}
            value={State.loanTenure}
            onChangeText={v => settingUpState({ key: 'loanTenure', value: v })}>
            <LOYearMonth
              onChange={v => settingUpState({ key: 'isYear', value: v })}
            />
          </LOInput>
          <LODatePicker
            onDateChange={date => settingUpState({ key: 'date', value: date })}
          />
          <RNButton
            title={Strings.Calculate}
            style={{ marginTop: 25 }}
            onPress={onCalculatePress}
          />
          <RNButton title={Strings.Statistic} style={{ marginVertical: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.TotalInterest, value: State.totalInterest },
              { title: Strings.TotalPrinciple, value: State.totalPrinciple },
            ]}
          />
          <LOResult
            title={Strings.TotalPaymentPrincipleInterest}
            value={State.totalPayment}
            needBGColor={true}
          />
          <LOResult
            title={Strings.LoanLastDate}
            value={State.loanLastDate}
            icon={Images.Calendar}
          />
          <LOResult
            title={Strings.EMIMonthlyPayment}
            value={State.emi}
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

export default EMI;
