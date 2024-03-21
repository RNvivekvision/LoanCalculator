import React from 'react';
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

const PublicProvidentFund = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.PublicProvidentFund}>
        <LOContainer>
          <LOInput title={Strings.InvestmentAmount} />
          <LOInput
            title={Strings.RateOfInterest}
            titlePlaceholder={Strings.max50yr}
            percent={true}
          />
          <LOInput title={Strings.Tenure} titlePlaceholder={Strings.max30yr} />
          <LODatePicker onDateChange={date => console.log({ date })} />
          <RNButton title={Strings.Calculate} style={{ marginTop: 25 }} />
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

export default PublicProvidentFund;
