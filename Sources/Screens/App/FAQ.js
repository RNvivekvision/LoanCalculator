import React from 'react';
import { View } from 'react-native';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { NativeAd, RenderFAQ } from '../../Components';
import { DummyData } from '../../Utils';

const FAQ = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.ApplyLoan}>
        {DummyData.FAQ.map((v, i) => (
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
