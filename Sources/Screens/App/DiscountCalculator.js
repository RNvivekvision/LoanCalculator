import React from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';

const DiscountCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.DiscountCalculator}>
        <LOContainer>
          <LOInput title={Strings.Price} />
          <LOInput title={Strings.DiscountPercentage} percent={true} />
          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.DiscountPrice} value={0} />
          <LOResult title={Strings.SavedAmount} needBGColor={true} value={0} />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default DiscountCalculator;
