import React from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';

const OperatingMargin = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.OperatingMargin}>
        <LOContainer>
          <LOInput title={Strings.OperatingIncome} />
          <LOInput title={Strings.Revenue} />
          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.Profit} value={0} />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default OperatingMargin;
