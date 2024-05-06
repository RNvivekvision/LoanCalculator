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
import { useGoogleAds, useUserClick } from '../../Hooks';

const RecurringDeposit = () => {
  const { showInterstitialAd } = useGoogleAds();
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
    showInterstitialAd();
    // Convert strings to numbers
    const investment = parseFloat(State.investmentAmount);
    const rate = parseFloat(State.expectedRateOfInterest);

    // Calculate monthly interest rate
    const monthlyInterestRate = rate / (12 * 100);

    // Calculate total number of installments
    const totalInstallments = Functions.tenure(State.tenure, State.isYear);

    // Calculate maturity amount
    const maturityAmount =
      (investment * ((1 + monthlyInterestRate) ** totalInstallments - 1)) /
      monthlyInterestRate;

    // Calculate maturity date
    const maturityDate = new Date(State.date.getTime());
    if (maturityDate) {
      maturityDate.setMonth(maturityDate.getMonth() + totalInstallments);
    }

    // Calculate total investment amount
    const totalInvestment = investment * totalInstallments;

    // Update state with results
    setState(p => ({
      ...p,
      totalInvestment: Functions.toFixed(totalInvestment),
      totalInterest: Functions.toFixed(maturityAmount - totalInvestment),
      maturityDate: Functions.formatDate({ date: maturityDate }),
      maturityValue: Functions.toFixed(maturityAmount),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.RecurringDeposit}>
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
            // button2={Strings.ConvertPDF}
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

export default RecurringDeposit;
