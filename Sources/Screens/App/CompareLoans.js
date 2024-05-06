import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { LOContainer, LOYearMonth, NativeAd } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import {
  RNButton,
  RNContainer,
  RNHeader,
  RNInput,
  RNStyles,
  RNText,
} from '../../Common';
import { Functions } from '../../Utils';
import { useGoogleAds, useUserClick } from '../../Hooks';

const CompareLoans = () => {
  const { incrementCount } = useUserClick();
  const { showInterstitialAd } = useGoogleAds();
  const [State, setState] = useState({
    loan1: {
      principalAmount: '',
      interest: '',
      loanTenure: '',
    },
    loan2: {
      principalAmount: '',
      interest: '',
      loanTenure: '',
    },
    isYear: true,
    emi: {
      first: 0,
      second: 0,
      difference: 0,
    },
    totalInterest: {
      first: 0,
      second: 0,
      difference: 0,
    },
    totalPaymentAmount: {
      first: 0,
      second: 0,
      difference: 0,
    },
  });

  // console.log('State -> ', JSON.stringify(State, null, 2));

  const onCalculatePress = () => {
    incrementCount();
    showInterstitialAd();
    const { tenure, EMI, toFixed } = Functions;
    const tenure1 = tenure(State.loan1.loanTenure, State.isYear);
    const tenure2 = tenure(State.loan2.loanTenure, State.isYear);

    const emi1 = EMI({
      principalAmount: State.loan1.principalAmount,
      interestRate: State.loan1.interest,
      tenureMonths: tenure1,
    });
    const emi2 = EMI({
      principalAmount: State.loan2.principalAmount,
      interestRate: State.loan2.interest,
      tenureMonths: tenure2,
    });
    const emiDifference = Math.abs(toFixed(emi1 - emi2));

    const totalPayment1 = toFixed(emi1 * tenure1);
    const totalPayment2 = toFixed(emi2 * tenure2);
    const totalPaymentDifference = Math.abs(
      toFixed(totalPayment1 - totalPayment2),
    );

    const totalInterest1 = toFixed(totalPayment1 - State.loan1.principalAmount);
    const totalInterest2 = toFixed(totalPayment2 - State.loan2.principalAmount);
    const totalInterestDifference = Math.abs(
      toFixed(totalInterest1 - totalInterest2),
    );

    setState(p => ({
      ...p,
      emi: {
        first: emi1,
        second: emi2,
        difference: emiDifference,
      },
      totalInterest: {
        first: totalInterest1,
        second: totalInterest2,
        difference: totalInterestDifference,
      },
      totalPaymentAmount: {
        first: totalPayment1,
        second: totalPayment2,
        difference: totalPaymentDifference,
      },
    }));
  };

  return (
    <RNContainer>
      <RNHeader title={Strings.CompareLoans}>
        <LOContainer>
          <View style={styles.loansContainer}>
            <View style={styles.loan}>
              <RNText style={styles.loanText}>{Strings.Loan1}</RNText>
            </View>
            <View style={styles.loan}>
              <RNText style={styles.loanText}>{Strings.Loan2}</RNText>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <RNText family={FontFamily.Medium}>
              {Strings.PrincipalAmount}
            </RNText>
            <View style={styles.inputMainContainer}>
              <View style={styles.inputContainer}>
                <RNInput
                  style={styles.input}
                  keyboardType={'numeric'}
                  value={State.loan1.principalAmount}
                  onChangeText={v =>
                    setState(p => ({
                      ...p,
                      loan1: { ...p.loan1, principalAmount: v },
                    }))
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <RNInput
                  style={styles.input}
                  keyboardType={'numeric'}
                  value={State.loan2.principalAmount}
                  onChangeText={v =>
                    setState(p => ({
                      ...p,
                      loan2: { ...p.loan2, principalAmount: v },
                    }))
                  }
                />
              </View>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <View style={RNStyles.flexRow}>
              <RNText family={FontFamily.Medium}>{Strings.Interest}</RNText>
              <RNText style={styles.titlePlaceholder}>
                {Strings.max50perannum}
              </RNText>
            </View>
            <View style={styles.inputMainContainer}>
              <View style={styles.inputContainer}>
                <RNInput
                  style={styles.input}
                  keyboardType={'numeric'}
                  value={State.loan1.interest}
                  onChangeText={v =>
                    setState(p => ({
                      ...p,
                      loan1: { ...p.loan1, interest: v },
                    }))
                  }
                />
                <RNText style={styles.titlePlaceholder}>{'%'}</RNText>
              </View>
              <View style={styles.inputContainer}>
                <RNInput
                  style={styles.input}
                  keyboardType={'numeric'}
                  value={State.loan2.interest}
                  onChangeText={v =>
                    setState(p => ({
                      ...p,
                      loan2: { ...p.loan2, interest: v },
                    }))
                  }
                />
                <RNText style={styles.titlePlaceholder}>{'%'}</RNText>
              </View>
            </View>
          </View>

          <View style={styles.titleContainer}>
            <View style={RNStyles.flexRow}>
              <RNText family={FontFamily.Medium}>{Strings.LoanTenure}</RNText>
              <RNText style={styles.titlePlaceholder}>{Strings.max30yr}</RNText>
            </View>
            <View style={styles.inputMainContainer}>
              <View style={styles.inputContainer}>
                <RNInput
                  style={styles.input}
                  keyboardType={'numeric'}
                  value={State.loan1.loanTenure}
                  onChangeText={v =>
                    setState(p => ({
                      ...p,
                      loan1: { ...p.loan1, loanTenure: v },
                    }))
                  }
                />
              </View>
              <View style={styles.inputContainer}>
                <RNInput
                  style={styles.input}
                  keyboardType={'numeric'}
                  value={State.loan2.loanTenure}
                  onChangeText={v =>
                    setState(p => ({
                      ...p,
                      loan2: { ...p.loan2, loanTenure: v },
                    }))
                  }
                />
              </View>
            </View>
          </View>

          <LOYearMonth
            containerStyle={styles.yearContainer}
            buttonStyles={styles.yearButtonStyles}
            onChange={v => setState(p => ({ ...p, isYear: v }))}
          />

          <RNButton title={Strings.Calculate} onPress={onCalculatePress} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <View style={styles.resultContainer}>
            <RNText pBottom={hp(1)} family={FontFamily.Medium}>
              {Strings.EMI}
            </RNText>
            <View style={RNStyles.flexRow}>
              <RNText style={styles.resultLeft}>{State.emi.first}</RNText>
              <RNText style={styles.resultRight}>{State.emi.second}</RNText>
            </View>
            <RNText style={styles.resultPlaceholder}>
              {Strings.Difference + State.emi.difference}
            </RNText>
          </View>

          <View style={styles.resultContainer}>
            <RNText pBottom={hp(1)} family={FontFamily.Medium}>
              {Strings.TotalInterest}
            </RNText>
            <View style={RNStyles.flexRow}>
              <RNText style={styles.resultLeft}>
                {State.totalInterest.first}
              </RNText>
              <RNText style={styles.resultRight}>
                {State.totalInterest.second}
              </RNText>
            </View>
            <RNText style={styles.resultPlaceholder}>
              {Strings.Difference + State.totalInterest.difference}
            </RNText>
          </View>

          <View style={styles.resultContainer}>
            <RNText pBottom={hp(1)} family={FontFamily.Medium}>
              {Strings.TotalPaymentAmount}
            </RNText>
            <View style={RNStyles.flexRowBetween}>
              <RNText style={styles.resultLeft}>
                {State.totalPaymentAmount.first}
              </RNText>
              <RNText style={styles.resultRight}>
                {State.totalPaymentAmount.second}
              </RNText>
            </View>
            <RNText style={styles.resultPlaceholder}>
              {Strings.Difference + State.totalPaymentAmount.difference}
            </RNText>
          </View>
        </LOContainer>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  loansContainer: {
    ...RNStyles.flexRow,
  },
  loan: {
    ...RNStyles.center,
    backgroundColor: Colors.White + '10',
    paddingVertical: hp(1.5),
    borderRadius: wp(3),
    flex: 1,
    marginHorizontal: wp(2),
  },
  loanText: {
    fontFamily: FontFamily.Medium,
  },
  titleContainer: {
    paddingTop: hp(2),
  },
  titlePlaceholder: {
    paddingHorizontal: wp(2),
    fontSize: FontSize.font12,
    fontFamily: FontFamily.Medium,
    color: Colors.White + '50',
  },
  inputMainContainer: {
    ...RNStyles.flexRowBetween,
  },
  inputContainer: {
    ...RNStyles.flexRow,
    flex: 1,
    backgroundColor: Colors.PlaceholderBackground,
    backgroundColor: Colors.White + '10',
    paddingHorizontal: wp(4),
    borderRadius: wp(3),
    marginTop: hp(1),
    marginHorizontal: wp(3),
  },
  input: {
    flex: 1,
    color: Colors.White,
    paddingHorizontal: 0,
  },
  yearContainer: {
    alignSelf: 'center',
    marginTop: hp(2),
    marginBottom: hp(1),
  },
  yearButtonStyles: {
    width: wp(15),
  },
  resultContainer: {
    ...RNStyles.center,
    paddingVertical: hp(1),
  },
  resultLeft: {
    color: Colors.Button,
    fontFamily: FontFamily.Medium,
    flex: 1,
    marginHorizontal: wp(10),
  },
  resultRight: {
    color: Colors.Button,
    fontFamily: FontFamily.Medium,
    flex: 1,
    textAlign: 'right',
    marginHorizontal: wp(10),
  },
  resultPlaceholder: {
    paddingHorizontal: wp(2),
    fontSize: FontSize.font14,
    fontFamily: FontFamily.Medium,
    color: Colors.White + '50',
    paddingTop: hp(1),
  },
});

export default CompareLoans;
