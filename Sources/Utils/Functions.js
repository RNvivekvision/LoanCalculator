import { Alert, Linking, Share } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Rate, { AndroidMarket } from 'react-native-rate';

const ALERT = ({ Title, Text, Buttons }) => Alert.alert(Title, Text, Buttons);

const OpenUrl = url => Linking.openURL(url);

const setAppData = async data => {
  const previousValue = await getAppData();
  if (previousValue) {
    await AsyncStorage.setItem(
      'appdata',
      JSON.stringify({ ...previousValue, ...data }),
    );
  } else {
    await AsyncStorage.setItem('appdata', JSON.stringify(data));
  }
};

const getAppData = async () => {
  const value = await AsyncStorage.getItem('appdata');
  return JSON.parse(value);
};

const ToPercentage = ({ value, total }) => {
  const Percentage = Math.floor((value * 100) / total);
  return Percentage > 100 ? 100 : Percentage;
};

const spliteArray = arr => {
  const half = Math.floor(arr.length / 2);
  const firstHalfData = arr.slice(0, half);
  const secondHalfData = arr.slice(half);
  return [firstHalfData, secondHalfData];
};

const formatDate = ({ date }) => {
  const d = new Date(date);
  const months = [
    'Jan',
    'Feb',
    'Mar',
    'Apr',
    'May',
    'Jun',
    'Jul',
    'Aug',
    'Sep',
    'Oct',
    'Nov',
    'Dec',
  ];
  const month = months[d.getMonth()];
  const day = d.getDate();
  const year = d.getFullYear();
  if (day && month && year) {
    return `${day || ''} ${month || ''} ${year || ''}`;
  }
};

const toFixed = (amount, digit = 2) => {
  if (!amount) return 0;
  return parseFloat(amount).toFixed(digit);
};

const tenure = (tenure, isYear) =>
  isYear ? parseInt(tenure) * 12 : parseInt(tenure);

const EMI = ({ principalAmount, interestRate, tenureMonths }) => {
  const monthlyInterestRate = parseInt(interestRate) / 12 / 100;
  const principalAmountNum = parseInt(principalAmount);
  return toFixed(
    (principalAmountNum *
      monthlyInterestRate *
      Math.pow(1 + monthlyInterestRate, tenureMonths)) /
      (Math.pow(1 + monthlyInterestRate, tenureMonths) - 1),
  );
};

const loanTenure = (startDate, tenure) => {
  const newDate = new Date(startDate);
  newDate.setMonth(newDate.getMonth() + tenure);
  return formatDate({ date: newDate });
};

const RateUs = async ({ onSuccess, onError } = {}) => {
  const options = {
    AppleAppID: '1465682080',
    GooglePackageName: 'com.mywebsite.myapp',
    AmazonPackageName: 'com.mywebsite.myapp',
    preferredAndroidMarket: AndroidMarket.Google,
    preferInApp: true,
    openAppStoreIfInAppFails: true,
    fallbackPlatformURL: 'https://github.com/KjellConnelly/react-native-rate',
    inAppDelay: 1000,
  };
  await Rate.rate(options, (success, error) => {
    if (success) {
      onSuccess?.(success);
    }
    if (error) {
      onError?.(error);
    }
  });
};

const ShareApp = async ({ title, message, url } = {}) => {
  const Title = 'LoanGol';
  const Message =
    'Share Loan gol app to your friends. by clicking the following url https://play.google.com/store/apps/details?id=com.activision.callofduty.warzone';
  const Url =
    'https://play.google.com/store/apps/details?id=com.activision.callofduty.warzone';

  await Share.share({
    title: title || Title,
    message: message || Message,
    url: url || Url,
  });
};

const Functions = {
  ALERT,
  OpenUrl,
  setAppData,
  getAppData,
  ToPercentage,
  spliteArray,
  formatDate,
  toFixed,
  EMI,
  tenure,
  loanTenure,
  RateUs,
  ShareApp,
};

export default Functions;
