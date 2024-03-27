import React from 'react';
import { EMICalculator, LOScreens, NativeAd } from '../../Components';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { useDummyData } from '../../Hooks';

const Home = () => {
  const { Home } = useDummyData();
  const { emi, bankFinder, business, finance, investment, moreOptions } = Home;

  return (
    <RNContainer>
      <RNHeader drawer={true} title={Strings.LoanEMICalculator}>
        <EMICalculator />
        <LOScreens title={Strings.EMICalculator} data={emi} />
        <LOScreens
          title={Strings.InvestmentCalculator}
          horizontal={true}
          data={investment}
        />
        <NativeAd />
        <LOScreens title={Strings.FinanceCalculator} data={finance} />
        <LOScreens title={Strings.BusinessCalculator} data={business} />
        <LOScreens title={Strings.BankAndATMFinder} data={bankFinder} />
        <LOScreens
          title={Strings.MoreOptions}
          horizontal={true}
          data={moreOptions}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default Home;
