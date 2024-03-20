import React from 'react';
import { EMICalculator, LOScreens, NativeAd } from '../../Components';
import { RNContainer, RNHeader } from '../../Common';
import { Strings } from '../../Constants';
import { DummyData } from '../../Utils';

const Home = () => {
  return (
    <RNContainer>
      <RNHeader drawer={true} title={Strings.LoanEMICalculator}>
        <EMICalculator />
        <LOScreens title={Strings.EMICalculator} data={DummyData.Home.emi} />
        <LOScreens
          title={Strings.InvestmentCalculator}
          horizontal={true}
          data={DummyData.Home.investment}
        />
        <NativeAd />
        <LOScreens
          title={Strings.FinanceCalculator}
          data={DummyData.Home.finance}
        />
        <LOScreens
          title={Strings.BusinessCalculator}
          data={DummyData.Home.business}
        />
        <LOScreens
          title={Strings.BankAndATMFinder}
          data={DummyData.Home.bankFinder}
        />
        <LOScreens
          title={Strings.MoreOptions}
          horizontal={true}
          data={DummyData.Home.moreOptions}
        />
      </RNHeader>
    </RNContainer>
  );
};

export default Home;
