import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Images, Strings } from '../../Constants';
import {
  LOButtons,
  LOContainer,
  LODatePicker,
  LOInput,
  LOResult,
  LOYearMonth,
  NativeAd,
} from '../../Components';
import { Functions } from '../../Utils';

const SWP = () => {
  const [State, setState] = useState({
    investmentAmount: '',
    expectedRateOfInterest: '',
    tenure: '',
    monthlyWithdrawalAmount: '',
    date: null,
    isYear: true,
    totalInvestmentAmount: 0,
    totalInterestValue: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    // Retrieve values from State
    const {
      investmentAmount,
      expectedRateOfInterest,
      tenure,
      monthlyWithdrawalAmount,
      date,
      isYear,
    } = State;

    // Convert strings to numbers
    const investmentAmountNum = parseFloat(investmentAmount);
    const interestRateNum = parseFloat(expectedRateOfInterest);
    const tenureNum = isYear ? 12 * parseInt(tenure) : parseInt(tenure);
    const monthlyWithdrawalAmountNum = parseFloat(monthlyWithdrawalAmount);

    // Calculate total investment amount
    let totalInvestmentAmount = investmentAmountNum;

    // Calculate total interest value
    const interestRate = interestRateNum / 100;
    let totalInterestValue = 0;
    for (let i = 0; i < tenureNum; i++) {
      totalInterestValue +=
        (totalInvestmentAmount + totalInterestValue) * (interestRate / 12);
      totalInvestmentAmount += monthlyWithdrawalAmountNum;
    }

    // Calculate maturity date
    const maturityDate = new Date(date);
    maturityDate.setMonth(maturityDate.getMonth() + tenureNum);

    // Calculate maturity value
    const maturityValue = totalInvestmentAmount + totalInterestValue;

    // Update State with calculated values
    setState(prevState => ({
      ...prevState,
      totalInvestmentAmount: Functions.toFixed(totalInvestmentAmount),
      totalInterestValue: Functions.toFixed(totalInterestValue),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SWP}>
        <LOContainer>
          <LOInput
            title={Strings.InvestmentAmount}
            value={State.investmentAmount}
            onChangeText={v => setState(p => ({ ...p, investmentAmount: v }))}
          />

          <LOInput
            title={Strings.ExpectedRateOfInterest}
            titlePlaceholder={Strings.max50yr}
            percent={true}
            value={State.expectedRateOfInterest}
            onChangeText={v =>
              setState(p => ({ ...p, expectedRateOfInterest: v }))
            }
          />

          <LOInput
            title={Strings.Tenure}
            titlePlaceholder={Strings.max30yr}
            value={State.tenure}
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}>
            <LOYearMonth onChange={v => setState(p => ({ ...p, isYear: v }))} />
          </LOInput>

          <LOInput
            title={Strings.MonthlyWithdrawalAmount}
            value={State.monthlyWithdrawalAmount}
            onChangeText={v =>
              setState(p => ({ ...p, monthlyWithdrawalAmount: v }))
            }
          />

          <LODatePicker
            onDateChange={v => setState(p => ({ ...p, date: v }))}
          />

          <RNButton
            title={Strings.Calculate}
            style={{ marginTop: 25 }}
            onPress={onCalculatePress}
          />
          <RNButton title={Strings.Statistic} style={{ marginBottom: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              {
                title: Strings.TotalInvestmentAmount,
                value: State.totalInvestmentAmount,
              },
              {
                title: Strings.TotalInterestValue,
                value: State.totalInterestValue,
              },
            ]}
          />
          <LOResult
            title={Strings.MaturityDate}
            value={State.maturityDate}
            icon={Images.Calendar}
          />
          <LOResult
            title={Strings.MaturityValue}
            value={State.maturityValue}
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

export default SWP;
