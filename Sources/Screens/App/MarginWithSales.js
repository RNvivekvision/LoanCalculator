import React from 'react';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';

const MarginWithSales = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.MarginWithSales}>
        <LOContainer>
          <LOInput title={Strings.Cost} />
          <LOInput title={Strings.Revenue} />
          <LOInput title={Strings.SalesTaxPercentage} />
          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.MarginPercentage, value: 0 },
              { title: Strings.MarkupPercentage, value: 0 },
            ]}
          />
          <LOResult
            columns={[
              { title: Strings.NetPrice, value: 0 },
              { title: Strings.Profit, value: 0 },
            ]}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default MarginWithSales;
