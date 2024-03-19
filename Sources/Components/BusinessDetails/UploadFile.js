import React from 'react';
import { StyleSheet, View } from 'react-native';
import { RNButton, RNStyles, RNText } from '../../Common';
import { Colors, FontFamily, FontSize, hp, wp } from '../../Theme';
import { Strings } from '../../Constants';

const UploadFile = () => {
  return (
    <View style={RNStyles.container}>
      <RNText style={styles.title}>{Strings.UploadFiles}</RNText>
      <RNText size={FontSize.font12} color={Colors.Placeholder}>
        {Strings.UploadFilesDesc}
      </RNText>
      <RNText size={FontSize.font12} color={Colors.Placeholder}>
        {Strings.MaxFilesize}
      </RNText>
      <RNButton
        title={Strings.UploadFiles}
        style={styles.uploadFiles}
        textStyle={{ fontSize: FontSize.font12 }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  title: {
    fontSize: FontSize.font18,
    paddingVertical: hp(2),
    fontFamily: FontFamily.Medium,
  },
  uploadFiles: {
    backgroundColor: Colors.Primary2,
    paddingVertical: hp(1.2),
    marginTop: hp(2),
    borderRadius: wp(2),
  },
});

export default UploadFile;
