import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { RNText, RNStyles } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';

const Archive = () => {
  const [State, setState] = useState({ archive: null });

  return (
    <View style={RNStyles.container}>
      <View style={styles.archiveContainer}>
        {[Strings.Archive, Strings.Commission, Strings.Principal].map(
          (v, i) => (
            <TouchableOpacity
              key={i}
              activeOpacity={0.6}
              onPress={() => setState(p => ({ ...p, archive: v }))}
              style={styles.renderArchiveContainer}>
              <RNText size={FontSize.font14}>{v}</RNText>
              <View
                style={[
                  styles.radioContainer,
                  {
                    borderColor:
                      State.archive === v ? Colors.Button : Colors.Black,
                  },
                ]}>
                {State.archive === v && <View style={styles.radio} />}
              </View>
            </TouchableOpacity>
          ),
        )}
      </View>
      <RNText family={FontFamily.Medium} size={FontSize.font14}>
        {Strings.ApproxDesc}
      </RNText>
    </View>
  );
};

const styles = StyleSheet.create({
  archiveContainer: {
    paddingVertical: hp(1),
    ...RNStyles.flexWrapHorizontal,
  },
  renderArchiveContainer: {
    ...RNStyles.flexRowBetween,
    width: '50%',
    paddingRight: wp(6),
    paddingVertical: hp(1),
  },
  radioContainer: {
    ...RNStyles.center,
    width: wp(5),
    height: wp(5),
    borderWidth: 1,
    borderRadius: 100,
  },
  radio: {
    width: wp(3),
    height: wp(3),
    backgroundColor: Colors.Button,
    borderRadius: 100,
  },
});

export default Archive;
