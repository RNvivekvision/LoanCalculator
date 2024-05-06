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

const Lumpsum = () => {
  const { incrementCount } = useUserClick();
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
    incrementCount();
    const investmentAmount = parseFloat(State.investmentAmount);
    const rateOfInterest = parseFloat(State.expectedRateOfInterest);
    const tenure = Functions.tenure(State.tenure, State.isYear);
    const isYear = State.isYear;
    const firstInstallmentDate = State.date;
    const interestRatePerPeriod = rateOfInterest / (isYear ? 12 : 1) / 100;
    const maturityValue =
      investmentAmount * Math.pow(1 + interestRatePerPeriod, tenure);
    const totalInterest = maturityValue - investmentAmount;
    const maturityDate = new Date(firstInstallmentDate);
    maturityDate.setMonth(maturityDate.getMonth() + tenure);
    setState(p => ({
      ...p,
      investment: Functions.toFixed(investmentAmount),
      totalInterest: Functions.toFixed(totalInterest),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.Lumpsum}>
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
            value={{
              [Strings.InvestmentAmount]: State.investment,
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

export default Lumpsum;
