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

const SIP = () => {
  const [State, setState] = useState({
    investment: '',
    interest: '',
    tenure: '',
    date: null,
    isYear: true,
    totalInvestmentAmount: 0,
    totalInterestValue: 0,
    maturityDate: null,
    maturityValue: 0,
  });

  const onCalculatePress = () => {
    // Parse start date
    const startDateObj = new Date(State.date);

    // Convert tenure to months
    const tenureInMonths = Functions.tenure(State.tenure, State.isYear);

    // Convert interest rate to monthly rate
    const monthlyRate = parseFloat(State.interest) / 100 / 12;

    // Calculate SIP
    let totalInvestment = 0;
    let totalInterest = 0;
    let maturityDate = new Date(startDateObj);
    maturityDate.setMonth(maturityDate.getMonth() + tenureInMonths);
    console.log({ maturityDate });

    for (let i = 0; i < tenureInMonths; i++) {
      totalInvestment += parseInt(State.investment);
      totalInterest += totalInvestment * monthlyRate;
    }

    // Calculate maturity value
    const maturityValue = totalInvestment + totalInterest;
    setState(p => ({
      ...p,
      totalInvestmentAmount: Functions.toFixed(totalInvestment),
      totalInterestValue: Functions.toFixed(totalInterest),
      maturityDate: Functions.loanTenure(State.date, tenureInMonths - 1),
      maturityValue: Functions.toFixed(maturityValue),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.SIP}>
        <LOContainer>
          <LOInput
            title={Strings.InvestmentAmount}
            value={State.investment}
            onChangeText={v => setState(p => ({ ...p, investment: v }))}
          />
          <LOInput
            title={Strings.ExpectedRateOfInterest}
            titlePlaceholder={Strings.max50yr}
            percent={true}
            value={State.interest}
            onChangeText={v => setState(p => ({ ...p, interest: v }))}
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

export default SIP;
