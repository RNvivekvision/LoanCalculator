import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import Reanimated, { FadeInDown } from 'react-native-reanimated';
import { RNContainer, RNText, RNStyles, RNButton } from '../../Common';
import { LOTerms, RenderTerms } from '../../Components';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';
import { DummyData } from '../../Utils';
import { useInset } from '../../Hooks';
import { NavRoutes } from '../../Navigation';

const TermsAndCondition = ({ navigation }) => {
  const styles = useStyles();

  const Header = () => {
    return <RNText style={styles.title}>{Strings.TermsAndConditions}</RNText>;
  };

  const Footer = () => {
    const [State, setState] = useState({ isChecked: true });

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
          onPress={() => navigation.navigate(NavRoutes.LanguageSelection)}
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
        <RNText>{'For Banner'}</RNText>
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
      ...RNStyles.center,
      paddingVertical: hp(2),
      borderWidth: 1,
      borderColor: Colors.White + '60',
      borderStyle: 'dashed',
      marginBottom: inset.bottom,
      marginHorizontal: wp(2),
      borderRadius: wp(4),
    },
  });
};

export default TermsAndCondition;
