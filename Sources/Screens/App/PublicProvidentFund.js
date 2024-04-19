import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Images, Strings } from '../../Constants';
import {
  LOButtons,
  LOContainer,
  LODatePicker,
  LOInput,
  LOResult,
  NativeAd,
} from '../../Components';
import { Functions } from '../../Utils';
import { useUserClicks } from '../../Hooks';

const PublicProvidentFund = () => {
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState({
    investmentAmount: '',
    rateOfInterest: '',
    tenure: '',
    date: null,
    totalInvestment: 0,
    totalInterest: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    increaseCount();

    // Convert rate of interest to a decimal
    const interestRate = parseFloat(State.rateOfInterest) / 100;

    // Calculate maturity date
    const maturityDate = new Date(State.date);
    maturityDate.setFullYear(
      maturityDate.getFullYear() + parseInt(State.tenure),
    );

    // Calculate total investment amount
    const totalInvestment =
      parseFloat(State.investmentAmount) * parseInt(State.tenure);

    // Calculate future value (maturity value)
    const futureValue =
      parseFloat(State.investmentAmount) *
      (1 + interestRate) ** parseInt(State.tenure);

    // Calculate total interest
    const totalInterest = futureValue - parseFloat(State.investmentAmount);

    // Update state with calculation results
    setState(prevState => ({
      ...prevState,
      totalInvestment: Functions.toFixed(totalInvestment),
      totalInterest: Functions.toFixed(totalInterest),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(futureValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.PublicProvidentFund}>
        <LOContainer>
          <LOInput
            title={Strings.InvestmentAmount}
            value={State.investmentAmount}
            onChangeText={v => setState(p => ({ ...p, investmentAmount: v }))}
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
            onChangeText={v => setState(p => ({ ...p, tenure: v }))}
          />
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
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default PublicProvidentFund;
