import React from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
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
    return (
      <>
        <LOTerms title={Strings.PleaseCheckFor} />
        <RNButton
          title={Strings.Announcing}
          style={{ marginVertical: hp(3) }}
          onPress={() => navigation.navigate(NavRoutes.LanguageSelection)}
        />
      </>
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
        renderItem={({ item }) => <RenderTerms item={item} />}
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
      borderRadius: wp(4),
    },
  });
};

export default TermsAndCondition;
