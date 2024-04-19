import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { Strings } from '../../Constants';
import { Functions } from '../../Utils';
import { useUserClicks } from '../../Hooks';

const OperatingMargin = () => {
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState({
    operatingIncome: '',
    revenue: '',
    profit: 0,
  });

  const onCalculatePress = () => {
    increaseCount();
    const operatingIncome = parseFloat(State.operatingIncome);
    const revenue = parseFloat(State.revenue);
    const profit = Functions.toFixed((operatingIncome / revenue) * 100);
    setState(p => ({ ...p, profit: profit }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.OperatingMargin}>
        <LOContainer>
          <LOInput
            title={Strings.OperatingIncome}
            value={State.operatingIncome}
            onChangeText={v => setState(p => ({ ...p, operatingIncome: v }))}
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
          <LOResult title={Strings.Profit} value={State.profit} />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default OperatingMargin;
