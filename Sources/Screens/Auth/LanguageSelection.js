import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import {
  RNContainer,
  RNIcon,
  RNScrollView,
  RNStyles,
  RNText,
} from '../../Common';
import { Images, Strings } from '../../Constants';
import { RenderLanguages } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData } from '../../Utils';

const LanguageSelection = () => {
  const [State, setState] = useState({
    selectedLanguage: DummyData.LanguageSelection[0],
  });

  return (
    <RNContainer>
      <RNScrollView top={true}>
        <View style={styles.content}>
          <View style={RNStyles.flexRow}>
            <View style={{ flex: 1 }}>
              <RNText style={styles.title}>{Strings.SelectYourLanguage}</RNText>
              <RNText style={styles.titleDesc}>
                {Strings.SelectYourLanguageDesc}
              </RNText>
            </View>
            <RNIcon icon={Images.True} containerStyle={styles.trueButton} />
          </View>

          {DummyData.LanguageSelection.map((v, i) => (
            <RenderLanguages
              key={i}
              item={v}
              selected={State.selectedLanguage.title === v.title}
              onPress={v => setState(p => ({ ...p, selectedLanguage: v }))}
            />
          ))}
        </View>
      </RNScrollView>

      <View style={styles.ads}>
        <RNText family={FontFamily.Medium}>{'For Native 1'}</RNText>
      </View>
    </RNContainer>
  );
};

const styles = StyleSheet.create({
  content: {
    paddingHorizontal: wp(5),
  },
  trueButton: {
    width: wp(15),
    borderRadius: 100,
    zIndex: 1,
  },
  title: {
    fontSize: FontSize.font18,
    fontFamily: FontFamily.Medium,
    paddingBottom: hp(1),
  },
  titleDesc: {
    fontSize: FontSize.font14,
    color: Colors.White + '50',
  },
  ads: {
    ...RNStyles.center,
    paddingVertical: hp(6),
    borderWidth: 1,
    borderColor: Colors.White + '50',
    borderStyle: 'dashed',
    borderRadius: wp(4),
  },
});

export default LanguageSelection;
