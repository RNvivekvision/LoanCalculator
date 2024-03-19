import React, { useState } from 'react';
import { FlatList, StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNText, RNStyles, RNGradient, RNImage, RNIcon } from '../../Common';
import { hp, wp, Colors, FontFamily } from '../../Theme';
import { DummyData } from '../../Utils';
import { Images } from '../../Constants';
import { useInset } from '../../Hooks';

const DrawerContent = ({ navigation }) => {
  const [State, setState] = useState({
    selectedIndex: DummyData.drawerScreens[0],
  });
  const styles = useStyles({});

  const onItemPress = item => {
    setState(p => ({ ...p, selectedIndex: item }));
    setTimeout(() => {
      item.navigate && navigation.navigate(item.navigate);
      navigation.closeDrawer();
    }, 50);
  };

  return (
    <RNGradient
      colors={[Colors.Primary1, Colors.Primary2]}
      style={styles.container}>
      <View style={styles.logoContainer}>
        <RNImage source={Images.AppLogo} style={styles.logo} />
        <RNIcon icon={Images.Drawer} onPress={() => navigation.closeDrawer()} />
      </View>

      <FlatList
        data={DummyData.drawerScreens}
        key={(v, i) => String(i)}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.contentContainerStyle}
        renderItem={({ item, index }) => (
          <RenderItems
            item={item}
            index={index}
            isSelected={State.selectedIndex?.name === item.name}
            onItemPress={onItemPress}
          />
        )}
      />
    </RNGradient>
  );
};

const RenderItems = ({ item, index, isSelected, onItemPress }) => {
  const styles = useStyles({ isSelected });

  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={() => onItemPress?.(item, index)}
      style={styles.renderContainer}>
      {isSelected && (
        <View style={styles.gradientOverlay}>
          <RNGradient
            style={RNStyles.image100}
            start={{ x: 1, y: 0 }}
            end={{ x: 0, y: 0 }}
            colors={[Colors.Primary1, Colors.Primary2]}
          />
        </View>
      )}
      <RNImage source={item.icon} style={styles.icon} />
      <RNText style={styles.name}>{item.name}</RNText>
    </TouchableOpacity>
  );
};

const useStyles = ({ isSelected }) => {
  const inset = useInset();
  return StyleSheet.create({
    contentContainerStyle: {
      paddingTop: hp(2),
      paddingBottom: inset.bottom + hp(1),
    },
    container: {
      ...RNStyles.container,
      paddingTop: inset.top,
      borderTopRightRadius: wp(7),
      borderBottomRightRadius: wp(7),
      overflow: 'hidden',
    },
    renderContainer: {
      ...RNStyles.flexRow,
      paddingVertical: hp(1.5),
      paddingHorizontal: wp(6),
    },
    icon: {
      width: wp(7),
      height: wp(7),
      tintColor: isSelected ? Colors.White : Colors.drawerInactive,
    },
    name: {
      color: isSelected ? Colors.White : Colors.drawerInactive,
      fontFamily: FontFamily.SemiBold,
      paddingLeft: wp(4),
    },
    gradientOverlay: {
      ...RNStyles.flexRow,
      ...StyleSheet.absoluteFillObject,
      borderLeftWidth: 5,
      borderLeftColor: Colors.Button,
    },
    logoContainer: {
      ...RNStyles.flexRowBetween,
      paddingVertical: hp(2),
      borderBottomWidth: 1,
      borderBlockColor: Colors.White + '50',
      marginHorizontal: wp(4),
    },
    logo: {
      width: '60%',
      height: hp(7),
      alignSelf: 'center',
    },
  });
};

export default DrawerContent;
