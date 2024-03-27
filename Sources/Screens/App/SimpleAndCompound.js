import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { DummyData, Functions } from '../../Utils';
import {
  LOButtons,
  LOContainer,
  LODropDown,
  LOInput,
  LOResult,
  LOYearMonth,
  NativeAd,
} from '../../Components';

const SimpleAndCompound = () => {
  const [State, setState] = useState({
    amount: '',
    rateOfInterest: '',
    tenure: '',
    isYear: true,
    typeOfInterest: DummyData.SimpleAndCompound.dropdownData[0],
    investmentAmount: 0,
    totalInterestValue: 0,
    maturityAmount: 0,
  });

  const onCalculatePress = () => {
    const { amount, rateOfInterest, tenure, isYear, typeOfInterest } = State;
    const principal = parseFloat(amount);
    const rate = parseFloat(rateOfInterest) / 100; // converting percentage to decimal
    const time = isYear ? parseFloat(tenure) : parseFloat(tenure) / 12; // converting months to years if needed

    if (typeOfInterest.value === Strings.Simple) {
      const interest = principal * rate * time;
      const maturityAmount = principal + interest;
      setState(p => ({
        ...p,
        investmentAmount: Functions.toFixed(principal),
        totalInterestValue: Functions.toFixed(interest),
        maturityAmount: Functions.toFixed(maturityAmount),
      }));
    } else if (typeOfInterest.value === Strings.Compound) {
      const n = 12; // assuming interest is compounded monthly
      const compoundInterest =
        principal * Math.pow(1 + rate / n, n * time) - principal;
      const maturityAmount = principal + compoundInterest;
      setState(p => ({
        ...p,
        investmentAmount: Functions.toFixed(principal),
        totalInterestValue: Functions.toFixed(compoundInterest),
        maturityAmount: Functions.toFixed(maturityAmount),
      }));
    }
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SimpleAndCompound}>
        <LOContainer>
          <LOInput
            title={Strings.Amount}
            value={State.amount}
            onChangeText={v => setState(p => ({ ...p, amount: v }))}
          />
          <LOInput
            title={Strings.RateOfInterest}
            titlePlaceholder={Strings.max50yr}
            percent={true}
            value={State.rateOfInterest}
            onChangeText={v => setState(p => ({ ...p, rateOfInterest: v }))}
          />
          <LOInput
            title={Strings.Tenure}
            titlePlaceholder={Strings.max30yr}
            value={State.tenure}
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}>
            <LOYearMonth onChange={v => setState(p => ({ ...p, isYear: v }))} />
          </LOInput>

          <LODropDown
            title={Strings.TypeOfInterest}
            data={DummyData.SimpleAndCompound.dropdownData}
            onChange={v => setState(p => ({ ...p, typeOfInterest: v }))}
            value={State.typeOfInterest?.value}
          />

          <RNButton
            title={Strings.Calculate}
            style={{ marginTop: 15 }}
            onPress={onCalculatePress}
          />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            title={Strings.InvestmentAmount}
            value={State.investmentAmount}
            needBGColor={true}
          />
          <LOResult
            title={Strings.TotalInterestValue}
            value={State.totalInterestValue}
            needBGColor={true}
          />
          <LOResult
            title={Strings.MaturityAmount}
            value={State.maturityAmount}
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

export default SimpleAndCompound;
