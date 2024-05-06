import React, { useState } from 'react';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { Functions } from '../../Utils';
import { useGoogleAds, useUserClick } from '../../Hooks';

const MarginWithSales = () => {
  const { showInterstitialAd } = useGoogleAds();
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    cost: '',
    revenue: '',
    salesTax: '',
    margin: 0,
    markup: 0,
    netPrice: 0,
    profit: 0,
  });

  const onCalculatePress = () => {
    incrementCount();
    showInterstitialAd();
    const costValue = parseFloat(State.cost);
    const revenueValue = parseFloat(State.revenue);
    const salesTaxValue = parseFloat(State.salesTax);
    const netPrice = Functions.toFixed(
      revenueValue / (1 + salesTaxValue / 100),
    );
    const profit = Functions.toFixed(revenueValue - costValue);
    const margin = Functions.toFixed(
      ((revenueValue - costValue) / revenueValue) * 100,
    );
    const markup = Functions.toFixed(
      ((revenueValue - costValue) / costValue) * 100,
    );

    setState(p => ({
      ...p,
      margin: margin,
      markup: markup,
      netPrice: netPrice,
      profit: profit,
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.MarginWithSales}>
        <LOContainer>
          <LOInput
            title={Strings.Cost}
            value={State.cost}
            onChangeText={v => setState(p => ({ ...p, cost: v }))}
          />
          <LOInput
            title={Strings.Revenue}
            value={State.revenue}
            onChangeText={v => setState(p => ({ ...p, revenue: v }))}
          />
          <LOInput
            title={Strings.SalesTaxPercentage}
            maxLength={2}
            value={State.salesTax}
            onChangeText={v => setState(p => ({ ...p, salesTax: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.MarginPercentage, value: State.margin },
              { title: Strings.MarkupPercentage, value: State.markup },
            ]}
          />
          <LOResult
            columns={[
              { title: Strings.NetPrice, value: State.netPrice },
              { title: Strings.Profit, value: State.profit },
            ]}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default MarginWithSales;
