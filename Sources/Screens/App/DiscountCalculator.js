import React, { useState } from 'react';
import { RNButton, RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { LOContainer, LOInput, LOResult, NativeAd } from '../../Components';
import { Functions } from '../../Utils';
import { useUserClicks } from '../../Hooks';

const DiscountCalculator = () => {
  const { increaseCount } = useUserClicks();
  const [State, setState] = useState({
    price: '',
    discount: '',
    discountPrice: 0,
    savedAmount: 0,
  });

  const onCalculatePress = () => {
    increaseCount();
    const price = parseFloat(State.price);
    const discountPercentage = parseFloat(State.discount);

    const discountedPrice = price - price * (discountPercentage / 100);
    const savedAmount = price - discountedPrice;

    setState(p => ({
      ...p,
      discountPrice: Functions.toFixed(discountedPrice),
      savedAmount: Functions.toFixed(savedAmount),
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.DiscountCalculator}>
        <LOContainer>
          <LOInput
            title={Strings.Price}
            value={State.price}
            onChangeText={v => setState(p => ({ ...p, price: v }))}
          />
          <LOInput
            title={Strings.DiscountPercentage}
            percent={true}
            maxLength={2}
            value={State.discount}
            onChangeText={v => setState(p => ({ ...p, discount: v }))}
          />
          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <LOResult title={Strings.DiscountPrice} value={State.discountPrice} />
          <LOResult
            title={Strings.SavedAmount}
            needBGColor={true}
            value={State.savedAmount}
          />
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

export default DiscountCalculator;
