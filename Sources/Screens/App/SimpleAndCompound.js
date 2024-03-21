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

const SimpleAndCompound = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.SimpleAndCompound}>
        <LOContainer>
          <LOInput title={Strings.Amount} />
          <LOInput
            title={Strings.RateOfInterest}
            titlePlaceholder={Strings.max50yr}
            percent={true}
          />
          <LOInput title={Strings.Tenure} titlePlaceholder={Strings.max30yr}>
            <LOYearMonth onChange={isYear => console.log({ isYear })} />
          </LOInput>
          <LOInput title={Strings.TypeOfInterest} />
          <RNButton title={Strings.Calculate} style={{ marginVertical: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            title={Strings.InvestmentAmount}
            value={0}
            needBGColor={true}
          />
          <LOResult
            title={Strings.TotalInterestValue}
            value={0}
            needBGColor={true}
          />
          <LOResult
            title={Strings.MaturityAmount}
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

export default SimpleAndCompound;
