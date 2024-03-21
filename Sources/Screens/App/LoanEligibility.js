import React from 'react';
import { RNButton, RNContainer, RNHeader, RNText } from '../../Common';
import { Strings } from '../../Constants';
import {
  LOButtons,
  LOContainer,
  LOInput,
  LOResult,
  LOYearMonth,
  NativeAd,
} from '../../Components';
import { FontFamily, FontSize, hp, wp } from '../../Theme';

const LoanEligibility = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.LoanEligibility}>
        <LOContainer>
          <LOInput title={Strings.GrossMonthlyIncome} />
          <LOInput title={Strings.TotalMonthlyEMI} />
          <LOInput title={Strings.LoanAmount} />
          <LOInput
            title={Strings.AnnualInterestRate}
            titlePlaceholder={Strings.max50perannum}
          />
          <LOInput title={Strings.Tenure} titlePlaceholder={Strings.max30yr}>
            <LOYearMonth onChange={isYear => console.log({ isYear })} />
          </LOInput>
          <RNButton title={Strings.Calculate} style={{ marginVertical: 0 }} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            title={Strings.LoanAmountYouAreEligibleFor}
            value={0}
            needBGColor={true}
          />
          <LOResult
            title={Strings.EMIYouAreEligibleFor}
            value={0}
            needBGColor={true}
          />
          <LOButtons
            button1={Strings.ShareResult}
            button2={Strings.ConvertPDF}
          />
          <RNText
            size={FontSize.font12}
            pHorizontal={wp(4)}
            family={FontFamily.Medium}
            pTop={hp(2)}
            align={'center'}>
            {Strings.LoanEligibilityDesc}
          </RNText>
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default LoanEligibility;
