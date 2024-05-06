import { StyleSheet, View } from 'react-native';
import Share from 'react-native-share';
import { RNButton, RNStyles } from '../Common';
import { FontSize, wp } from '../Theme';
import { useGoogleAds, useUserClick } from '../Hooks';

const LOButtons = ({
  button1,
  button2,
  value,
  // onButton1Press,
  onButton2Press,
}) => {
  const { incrementCount } = useUserClick();
  const { showInterstitialAd } = useGoogleAds();

  const onButton1Press = async () => {
    incrementCount();
    await showInterstitialAd();
    try {
      const messagesArray = Object.entries(value).map(
        ([key, val]) => `${key} : ${val}\n`,
      );
      const message = messagesArray.join('\n');
      await Share.open({
        title: 'Result',
        message: message,
      });
    } catch (e) {
      console.log('Error onButton1Press -> ', e);
    }
  };

  return (
    <View style={RNStyles.flexRow}>
      <RNButton
        title={button1}
        style={styles.button}
        onPress={onButton1Press}
        textStyle={styles.buttonText}
      />
      {button2 && (
        <RNButton
          title={button2}
          style={styles.button}
          onPress={onButton2Press}
          textStyle={styles.buttonText}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    marginHorizontal: wp(1),
    marginBottom: 0,
  },
  buttonText: {
    fontSize: FontSize.font14,
  },
});

export default LOButtons;
