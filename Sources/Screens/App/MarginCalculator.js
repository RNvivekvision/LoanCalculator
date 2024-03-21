import React from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';

const MarginCalculator = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.MarginCalculator}>
        <LOContainer>
          <LOInput title={Strings.Cost} />
          <LOInput title={Strings.Revenue} />
          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.MarkupPercentage, value: 0 },
              { title: Strings.Profit, value: 0 },
            ]}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default MarginCalculator;
