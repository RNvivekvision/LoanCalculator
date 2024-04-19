import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { Strings } from '../../Constants';
import { Functions } from '../../Utils';
import { useUserClicks } from '../../Hooks';

const MarkupCalculator = () => {
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState({
    cost: '',
    revenue: '',
    markup: 0,
    profit: 0,
  });

  const onCalculatePress = () => {
    increaseCount();
    // Ensure cost and revenue are numbers
    const costValue = parseFloat(State.cost);
    const revenueValue = parseFloat(State.revenue);
    const markupAmount = revenueValue - costValue;
    const markupPercentage = (markupAmount / costValue) * 100;
    const profit = revenueValue - costValue;

    setState(p => ({
      ...p,
      markup: Functions.toFixed(markupPercentage),
      profit: Functions.toFixed(profit),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.MarkupCalculator}>
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

export default MarkupCalculator;
