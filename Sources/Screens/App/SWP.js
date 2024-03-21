import React from 'react';
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

const SWP = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.SWP}>
        <LOContainer>
          <LOInput title={Strings.InvestmentAmount} />
          <LOInput
            title={Strings.ExpectedRateOfInterest}
            titlePlaceholder={Strings.max50yr}
            percent={true}
          />
          <LOInput title={Strings.Tenure} titlePlaceholder={Strings.max30yr}>
            <LOYearMonth onChange={isYear => console.log({ isYear })} />
          </LOInput>
          <LOInput title={Strings.MonthlyWithdrawalAmount} />
          <LODatePicker onDateChange={date => console.log({ date })} />
          <RNButton title={Strings.Calculate} style={{ marginTop: 25 }} />
          <RNButton title={Strings.Statistic} style={{ marginBottom: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.TotalInvestmentAmount, value: 0 },
              { title: Strings.TotalInterestValue, value: 0 },
            ]}
          />
          <LOResult title={Strings.MaturityDate} icon={Images.Calendar} />
          <LOResult
            title={Strings.MaturityValue}
            value={0}
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
