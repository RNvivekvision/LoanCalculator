import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { Functions } from '../../Utils';
import { useGoogleAds, useUserClick } from '../../Hooks';

const MarginCalculator = () => {
  const { showInterstitialAd } = useGoogleAds();
  const { incrementCount } = useUserClick();
  const [State, setState] = useState({
    cost: '',
    revenue: '',
    markup: 0,
    profit: 0,
  });

  const onCalculatePress = () => {
    incrementCount();
    showInterstitialAd();
    const cost = parseFloat(State.cost);
    const revenue = parseFloat(State.revenue);
    const markup = Functions.toFixed(((revenue - cost) / cost) * 100);
    const profit = Functions.toFixed(revenue - cost);
    setState(p => ({ ...p, markup: markup, profit: profit }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.MarginCalculator}>
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
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult
            columns={[
              { title: Strings.MarkupPercentage, value: State.markup },
              { title: Strings.Profit, value: State.profit },
            ]}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default MarginCalculator;
