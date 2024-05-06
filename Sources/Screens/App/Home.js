import React, { useCallback } from 'react';
import { EMICalculator, LOScreens, NativeAd } from '../../Components';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { useDummyData, useGoogleAds, useUserClick } from '../../Hooks';
import { Functions } from '../../Utils';

const Home = ({ navigation }) => {
  const { Home } = useDummyData();
  const { emi, bankFinder, business, finance, investment, moreOptions } = Home;
  const { incrementCount } = useUserClick();
  const { showInterstitialAd } = useGoogleAds();

  const onPress = useCallback(async item => {
    // console.log('item -> ', JSON.stringify(item, null, 2));
    incrementCount();
    await showInterstitialAd();
    if (item.navigate) {
      navigation.navigate(item.navigate);
    }
    if (item.link) {
      Functions.OpenUrl(item.link);
    }
  }, []);

  return (
    <RNContainer>
      <RNHeader drawer={true} title={Strings.LoanEMICalculator}>
        <EMICalculator onPress={onPress} />
        <LOScreens title={Strings.EMICalculator} data={emi} onPress={onPress} />
        <LOScreens
          title={Strings.InvestmentCalculator}
          horizontal={true}
          data={investment}
          onPress={onPress}
        />
        <NativeAd />
        <LOScreens
          title={Strings.FinanceCalculator}
          data={finance}
          onPress={onPress}
        />
        <LOScreens
          title={Strings.BusinessCalculator}
          data={business}
          onPress={onPress}
        />
        <LOScreens
          title={Strings.BankAndATMFinder}
          data={bankFinder}
          onPress={onPress}
        />
        <LOScreens
          title={Strings.MoreOptions}
          horizontal={true}
          data={moreOptions}
          onPress={onPress}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default Home;
