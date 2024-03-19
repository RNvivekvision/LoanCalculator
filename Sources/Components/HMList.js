import React from 'react';
import {
  FlatList,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import { RNStyles, RNText } from '../Common';
import { FontFamily, FontSize, hp, wp } from '../Theme';
import HStack from './HStack';
import VStack from './VStack';

const HMList = ({
  title,
  titleChildrenText,
  ontitleChildrenPress,
  titleChildrenStyle,
  data,
  vStack,
  horizontal,
  contentContainerStyle,
  renderItem,
  viewText,
  onViewProfilePress,
  onEditPress,
  onDeletePress,
  ...rest
}) => {
  const styles = useStyles();

  return (
    <View style={RNStyles.container}>
      <View style={styles.titleContainer}>
        <RNText family={FontFamily.SemiBold}>{title ?? ''}</RNText>
        <TouchableOpacity onPress={ontitleChildrenPress} activeOpacity={0.6}>
          <RNText style={[styles.addUser, titleChildrenStyle]}>
            {titleChildrenText ?? ''}
          </RNText>
        </TouchableOpacity>
      </View>

      {vStack ? (
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
          <View style={styles.VStackContainer}>
            <View style={RNStyles.flexRow}>
              {data[0]?.map((v, i) => (
                <VStack
                  key={i}
                  item={v}
                  viewText={viewText}
                  onViewProfilePress={onViewProfilePress}
                  onEditPress={onEditPress}
                  onDeletePress={onDeletePress}
                />
              ))}
            </View>
            <View style={{ flexDirection: 'row' }}>
              {data[1]?.map((v, i) => (
                <VStack
                  key={i}
                  item={v}
                  viewText={viewText}
                  onViewProfilePress={onViewProfilePress}
                  onEditPress={onEditPress}
                  onDeletePress={onDeletePress}
                />
              ))}
            </View>
          </View>
        </ScrollView>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(v, i) => String(i)}
          horizontal={horizontal ?? true}
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={
            contentContainerStyle ?? { paddingHorizontal: wp(4) }
          }
          renderItem={({ item, index }) =>
            renderItem ? (
              renderItem(item, index)
            ) : (
              <HStack
                item={item}
                viewText={viewText}
                onViewProfilePress={onViewProfilePress}
                onEditPress={onEditPress}
                onDeletePress={onDeletePress}
              />
            )
          }
          {...rest}
        />
      )}
    </View>
  );
};

const useStyles = () => {
  return StyleSheet.create({
    titleContainer: {
      ...RNStyles.flexRowBetween,
      paddingHorizontal: wp(5),
      paddingTop: hp(2),
    },
    addUser: {
      fontSize: FontSize.font12,
      textDecorationLine: 'underline',
    },
    VStackContainer: {
      paddingHorizontal: wp(4),
      paddingVertical: hp(2),
    },
  });
};

export default HMList;
