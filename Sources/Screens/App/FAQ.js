import React from 'react';
import { View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { NativeAd, RenderFAQ } from '../../Components';
import { useDummyData } from '../../Hooks';

const FAQ = () => {
  const { FAQ } = useDummyData();
  return (
    <RNContainer>
      <RNHeader title={Strings.ApplyLoan}>
        {FAQ.map((v, i) => (
          <View key={i}>
            {i === 4 && <NativeAd />}
            <RenderFAQ key={i} item={v} index={i} />
          </View>
        ))}
      </RNHeader>
    </RNContainer>
  );
};

export default FAQ;
