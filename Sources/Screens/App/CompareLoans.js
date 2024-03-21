import React from 'react';
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

const CompareLoans = () => {
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
                <RNInput style={styles.input} keyboardType={'numeric'} />
              </View>
              <View style={styles.inputContainer}>
                <RNInput style={styles.input} keyboardType={'numeric'} />
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
                <RNInput style={styles.input} keyboardType={'numeric'} />
                <RNText style={styles.titlePlaceholder}>{'%'}</RNText>
              </View>
              <View style={styles.inputContainer}>
                <RNInput style={styles.input} keyboardType={'numeric'} />
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
                <RNInput style={styles.input} keyboardType={'numeric'} />
              </View>
              <View style={styles.inputContainer}>
                <RNInput style={styles.input} keyboardType={'numeric'} />
              </View>
            </View>
          </View>

          <LOYearMonth
            containerStyle={styles.yearContainer}
            buttonStyles={styles.yearButtonStyles}
            onChange={isYear => console.log({ isYear })}
          />

          <RNButton title={Strings.Calculate} />
        </LOContainer>

        <NativeAd />

        <LOContainer>
          <View style={styles.resultContainer}>
            <RNText pBottom={hp(1)} family={FontFamily.Medium}>
              {Strings.EMI}
            </RNText>
            <View style={RNStyles.flexRow}>
              <RNText style={styles.resultLeft}>{0}</RNText>
              <RNText style={styles.resultRight}>{0}</RNText>
            </View>
            <RNText style={styles.resultPlaceholder}>
              {Strings.Difference + 0}
            </RNText>
          </View>

          <View style={styles.resultContainer}>
            <RNText pBottom={hp(1)} family={FontFamily.Medium}>
              {Strings.TotalInterest}
            </RNText>
            <View style={RNStyles.flexRow}>
              <RNText style={styles.resultLeft}>{0}</RNText>
              <RNText style={styles.resultRight}>{0}</RNText>
            </View>
            <RNText style={styles.resultPlaceholder}>
              {Strings.Difference + 0}
            </RNText>
          </View>

          <View style={styles.resultContainer}>
            <RNText pBottom={hp(1)} family={FontFamily.Medium}>
              {Strings.TotalPaymentAmount}
            </RNText>
            <View style={RNStyles.flexRowBetween}>
              <RNText style={styles.resultLeft}>{0}</RNText>
              <RNText style={styles.resultRight}>{0}</RNText>
            </View>
            <RNText style={styles.resultPlaceholder}>
              {Strings.Difference + 0}
            </RNText>
          </View>

          <RNButton title={Strings.ConvertPDF} />
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
