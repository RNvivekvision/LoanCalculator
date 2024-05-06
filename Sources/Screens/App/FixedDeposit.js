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
import { useUserClick } from '../../Hooks';

const FixedDeposit = () => {
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    investmentAmount: '',
    expectedRateOfInterest: '',
    tenure: '',
    isYear: true,
    date: null,
    totalInvestment: 0,
    totalInterest: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    incrementCount();
    const tenureInMonths = Functions.tenure(State.tenure, State.isYear);
    const maturityDate = new Date(State.date);
    maturityDate.setMonth(maturityDate.getMonth() + tenureInMonths);
    const rateOfInterestDecimal =
      parseFloat(State.expectedRateOfInterest) / 100;
    const principal = parseFloat(State.investmentAmount);
    const maturityValue =
      principal * Math.pow(1 + rateOfInterestDecimal, tenureInMonths);
    const totalInterest = maturityValue - principal;
    setState(p => ({
      ...p,
      totalInvestment: Functions.toFixed(principal),
      totalInterest: Functions.toFixed(totalInterest),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.FixedDeposit}>
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
          <LODatePicker
            onDateChange={v => setState(p => ({ ...p, date: v }))}
          />
          <RNButton
            title={Strings.Calculate}
            style={{ marginTop: 25 }}
            onPress={onCalculatePress}
          />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              {
                title: Strings.TotalInvestmentAmount,
                value: State.totalInvestment,
              },
              { title: Strings.TotalInterestValue, value: State.totalInterest },
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
            value={{
              [Strings.TotalInvestmentAmount]: State.totalInvestment,
              [Strings.TotalInterestValue]: State.totalInterest,
              [Strings.MaturityDate]: State.maturityDate,
              [Strings.MaturityValue]: State.maturityValue,
            }}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default FixedDeposit;
