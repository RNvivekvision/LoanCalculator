import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import {
  LOButtons,
  LOContainer,
  LOInput,
  LOResult,
  LOYearMonth,
  NativeAd,
} from '../../Components';
import { Functions } from '../../Utils';

const LoanEligibility = () => {
  const [State, setState] = useState({
    grossMonthlyIncome: '',
    totalMonthlyEmi: '',
    loanAmount: '',
    interestRate: '',
    tenure: '',
    isYear: true,
    eligibleAmount: 0,
    eligibleEmi: 0,
  });

  const onCalculatePress = () => {
    const {
      grossMonthlyIncome,
      totalMonthlyEmi,
      loanAmount,
      interestRate,
      tenure,
      isYear,
    } = State;
    const grossMonthlyIncomeNum = parseFloat(grossMonthlyIncome);
    const totalMonthlyEmiNum = parseFloat(totalMonthlyEmi);
    const loanAmountNum = parseFloat(loanAmount);
    const interestRateNum = parseFloat(interestRate);
    const tenureNum = parseFloat(tenure);
    const maxAllowedEMI = 0.6 * grossMonthlyIncomeNum;
    if (totalMonthlyEmiNum <= maxAllowedEMI) {
      const monthlyInterestRate = interestRateNum / 12 / 100;
      const totalMonths = isYear ? tenureNum * 12 : tenureNum;
      const loanEligibility = Math.floor(
        (loanAmountNum * monthlyInterestRate) /
          (1 - Math.pow(1 + monthlyInterestRate, -totalMonths)),
      );
      const emi = Math.floor(
        loanEligibility / (isYear ? tenureNum * 12 : tenureNum),
      );
      setState(p => ({
        ...p,
        eligibleAmount: loanEligibility,
        eligibleEmi: emi,
      }));
    } else {
      setState(p => ({
        ...p,
        eligibleAmount: 0,
        eligibleEmi: 0,
      }));
    }
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.LoanEligibility}>
        <LOContainer>
          <LOInput
            title={Strings.GrossMonthlyIncome}
            value={State.grossMonthlyIncome}
            onChangeText={v => setState(p => ({ ...p, grossMonthlyIncome: v }))}
          />
          <LOInput
            title={Strings.TotalMonthlyEMI}
            value={State.totalMonthlyEmi}
            onChangeText={v => setState(p => ({ ...p, totalMonthlyEmi: v }))}
          />
          <LOInput
            title={Strings.LoanAmount}
            value={State.loanAmount}
            onChangeText={v => setState(p => ({ ...p, loanAmount: v }))}
          />
          <LOInput
            title={Strings.AnnualInterestRate}
            titlePlaceholder={Strings.max50perannum}
            maxLength={2}
            value={State.interestRate}
            onChangeText={v => setState(p => ({ ...p, interestRate: v }))}
          />
          <LOInput
            title={Strings.Tenure}
            titlePlaceholder={Strings.max30yr}
            value={State.tenure}
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}>
            <LOYearMonth onChange={v => setState(p => ({ ...p, isYear: v }))} />
          </LOInput>
          <RNButton
            title={Strings.Calculate}
            style={{ marginVertical: 0 }}
            onPress={onCalculatePress}
          />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            title={Strings.LoanAmountYouAreEligibleFor}
            value={State.eligibleAmount}
            needBGColor={true}
          />
          <LOResult
            title={Strings.EMIYouAreEligibleFor}
            value={State.eligibleEmi}
            needBGColor={true}
          />
          <LOButtons
            button1={Strings.ShareResult}
            button2={Strings.ConvertPDF}
          />
          <RNText
            size={FontSize.font12}
            pHorizontal={wp(4)}
            family={FontFamily.Medium}
            pTop={hp(2)}
            align={'center'}>
            {Strings.LoanEligibilityDesc}
          </RNText>
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default LoanEligibility;
