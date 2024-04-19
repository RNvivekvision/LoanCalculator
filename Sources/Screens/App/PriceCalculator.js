import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { Functions } from '../../Utils';
import { useUserClicks } from '../../Hooks';

const PriceCalculator = () => {
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState({
    cost: '',
    grossMargin: '',
    markup: 0,
  });

  const onCalculatePress = () => {
    increaseCount();
    const costValue = parseFloat(State.cost);
    const grossMarginValue = parseFloat(State.grossMargin) / 100; // Convert percentage to decimal
    const sellingPrice = costValue + costValue * grossMarginValue;
    const markupPercentage = ((sellingPrice - costValue) / costValue) * 100;
    setState(p => ({ ...p, markup: Functions.toFixed(markupPercentage) }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.PriceCalculator}>
        <LOContainer>
          <LOInput
            title={Strings.Cost}
            value={State.cost}
            onChangeText={v => setState(p => ({ ...p, cost: v }))}
          />
          <LOInput
            title={Strings.GrossMargin}
            percent={true}
            maxLength={2}
            value={State.grossMargin}
            onChangeText={v => setState(p => ({ ...p, grossMargin: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.MarkupPercentage} value={State.markup} />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default PriceCalculator;
