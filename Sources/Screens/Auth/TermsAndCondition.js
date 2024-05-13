import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { RNContainer, RNText, RNButton } from '../../Common';
import { BannerAd, LOTerms, RenderTerms } from '../../Components';
import { FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import { DummyData } from '../../Utils';
import { useInset, useUserClick } from '../../Hooks';
import { NavRoutes } from '../../Navigation';

const TermsAndCondition = ({ navigation }) => {
  const styles = useStyles();
  const { incrementCount } = useUserClick();

  const Header = () => {
    return <RNText style={styles.title}>{Strings.TermsAndConditions}</RNText>;
  };

  const Footer = () => {
    const [State, setState] = useState({ isChecked: true });

    const onAnnouncingPress = () => {
      incrementCount();
      navigation.navigate(NavRoutes.LanguageSelection);
    };

    return (
      <Reanimated.View entering={FadeInDown.delay(600)}>
        <LOTerms
          title={Strings.PleaseCheckFor}
          onPress={v => setState(p => ({ ...p, isChecked: v }))}
        />
        <RNButton
          disable={!State.isChecked}
          title={Strings.Announcing}
          style={{ marginVertical: hp(2) }}
          onPress={onAnnouncingPress}
        />
      </Reanimated.View>
    );
  };

  return (
    <RNContainer>
      <FlatList
        data={DummyData.termsAndCondition}
        keyExtractor={(v, i) => String(i)}
        contentContainerStyle={styles.contentContainerStyle}
        ListHeaderComponent={<Header />}
        ListFooterComponent={<Footer />}
        renderItem={({ item, index }) => (
          <RenderTerms item={item} index={index} />
        )}
      />
      <View style={styles.banner}>
        <BannerAd />
      </View>
    </RNContainer>
  );
};

const useStyles = () => {
  const inset = useInset();
  return StyleSheet.create({
    contentContainerStyle: {
      paddingHorizontal: wp(4),
      paddingTop: inset.top,
    },
    title: {
      fontSize: FontSize.font18,
      fontFamily: FontFamily.Medium,
      paddingVertical: hp(2),
      paddingBottom: hp(2),
    },
    banner: {
      marginBottom: inset.bottom,
    },
  });
};

export default TermsAndCondition;
