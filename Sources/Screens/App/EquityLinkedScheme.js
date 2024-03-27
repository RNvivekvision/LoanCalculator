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

const EquityLinkedScheme = () => {
  const [State, setState] = useState({
    investmentAmount: '',
    expectedRateOfInterest: '',
    tenure: '',
    isYear: true,
    date: null,
    investment: 0,
    totalInterest: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    // Convert strings to numbers
    const amount = parseFloat(State.investmentAmount);
    const rate = parseFloat(State.expectedRateOfInterest) / 12 / 100;
    const tenure = Functions.tenure(State.tenure, State.isYear);
    const currentDate = new Date(State.date);

    // Calculate maturity date
    const maturityDate = new Date(currentDate);
    maturityDate.setMonth(currentDate.getMonth() + tenure);

    // Calculate maturity value
    const maturityValue = amount * Math.pow(1 + rate, tenure);

    // Calculate total interest
    const totalInterest = maturityValue - amount;

    // Update state with calculated values
    setState(p => ({
      ...p,
      investment: Functions.toFixed(amount),
      totalInterest: Functions.toFixed(totalInterest),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.EquityLinkedScheme}>
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
            maxLength={2}
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
          <RNButton title={Strings.Statistic} style={{ marginBottom: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.InvestmentAmount} value={State.investment} />
          <LOResult
            title={Strings.TotalInterestValue}
            value={State.totalInterest}
            needBGColor={true}
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

export default EquityLinkedScheme;
