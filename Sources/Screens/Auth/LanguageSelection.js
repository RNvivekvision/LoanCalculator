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
import { NativeAd, RenderLanguages } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { DummyData } from '../../Utils';
import { useInset } from '../../Hooks';

const LanguageSelection = () => {
  const styles = useStyles();
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

      <NativeAd />
    </RNContainer>
  );
};

const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
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
  });
};

export default LanguageSelection;
