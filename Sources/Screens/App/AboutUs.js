import { StyleSheet, View } from 'react-native';
import { RNContainer, RNHeader, RNText } from '../../Common';
import { Colors, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';

const AboutUs = () => {
  return (
    <RNContainer>
      <RNHeader title={Strings.AboutUs}>
        <View style={styles.container}>
          <RNText size={FontSize.font18}>{Strings.aboutusDescription_1}</RNText>
          <RNText size={FontSize.font18} pTop={hp(2)}>
            {Strings.aboutusDescription_2}
          </RNText>
        </View>
      </RNHeader>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.White + '15',
    marginHorizontal: wp(4),
    marginVertical: hp(2),
    paddingHorizontal: wp(4),
    paddingVertical: hp(2),
    borderRadius: wp(4),
  },
});

export default AboutUs;
