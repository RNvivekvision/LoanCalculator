import React from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';

const PriceCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.PriceCalculator}>
        <LOContainer>
          <LOInput title={Strings.Cost} />
          <LOInput title={Strings.GrossMargin} percent={true} />
          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.MarkupPercentage} value={0} />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default PriceCalculator;
